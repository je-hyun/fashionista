import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../services/company.service';
import { ProductService } from './../services/product.service';
import { Company } from './../models/company';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  productRef = new FormGroup({
    code:new FormControl(),
    name:new FormControl(),
    details:new FormControl(),
    image:new FormControl(),
    price:new FormControl(),
    company:new FormControl()
  });
  companies: Company[];
  products: Product[];

  constructor(private companyService: CompanyService, private productService: ProductService) { }

  getCompanies() {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    })
  }

  updateProductTable() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    })
  }


  ngOnInit(): void {
    this.updateProductTable();
    this.getCompanies();
  }
  
  deleteProduct(idToDelete): void {
    this.productService.deleteProductById(idToDelete).
    subscribe(
      result=>{this.updateProductTable()}
    )

  }

  storeProductDetails(): void {    
    console.log(`Company ID: ${this.productRef.value.company}`);

    this.companyService.getCompanyById(this.productRef.value.company).subscribe(
      result => {
        this.productRef.value.company = result

        this.productService.addProduct(this.productRef.value).
        subscribe(
          result => {this.updateProductTable()}
        )
      }
    )
  }
}