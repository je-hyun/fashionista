import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  companyRef = new FormGroup({
    name:new FormControl()
  });
  companies: Company[];

  constructor(private companyService: CompanyService) { }


  updateCompanyTable() {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    })
  }
  ngOnInit(): void {
    this.updateCompanyTable()
  }

  deleteCompany(idToDelete): void {
    this.companyService.deleteCompanyById(idToDelete).
    subscribe(
      result=>{this.updateCompanyTable()}
    )
  }

  storeCompanyDetails(): void {
    this.companyService.addCompany(this.companyRef.value).
    subscribe(
      result => {this.updateCompanyTable()}
    )

    
  }
}