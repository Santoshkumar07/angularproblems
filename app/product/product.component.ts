import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

/*interface Product
{
  productId:number,
  productName:String,
  productPrice:number,
  productDes:String,
  productImg:String,
}*/
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent   {

  filteredString:string=''; 
  sortby:any='1';
  products:any=[];
  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }


}
  /*products:Product[]=[
    {productId:101,
    productName:'samsung',
    productPrice:58749,
    productDes:'the product is mobile ',
    productImg:'assets/images/download.jpg'},
    {productId:102,
      productName:'poco',
      productPrice:34500,
      productDes:'the product is mobile ',
      productImg:'assets/images/poco.jpg'},
      {productId:103,
        productName:'iphone',
        productPrice:134500,
        productDes:'the product is mobile ',
        productImg:'assets/images/iphone.jpg'}  
  ]*/