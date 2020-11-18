import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private companyService:CompanyService) { }

  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {

    // Get the products list and attach their companies.
    this.productService.getProducts().
    subscribe(
      result => {
        this.products = result;
        for (let pp of this.products) {
          this.companyService.getCompanyById(pp.company).subscribe(comp=>{pp.company=comp})
        }
      }
    )
  }

}


// import { Component, OnInit } from '@angular/core';

// import { Product } from '../product';
// import { ProductService } from '../ProductService';

// @Component({
// 	templateUrl: 'product.component.html'
// })

// export class ProductComponent implements OnInit {

// 	products: Product[];

// 	constructor(
// 		private productService: ProductService
// 	) { }

// 	ngOnInit() {
// 		console.log(this.productService.findAll())
// 		this.products = this.productService.findAll();
// 	}


// }