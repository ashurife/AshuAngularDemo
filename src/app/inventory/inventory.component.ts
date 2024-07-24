import { Component } from '@angular/core';
import { Product } from './inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  product : Product;

  constructor () {
    this.product = new Product();
    this.product.productID = 0;
    this.product.productName = "";
    this.product.cost = 0;
    this.product.quantity = 0;
    this.product.billAmount = 0;
    this.product.discount = 0;
    this.product.netBillAmount = 0;
  }

  doCalculation(product: Product){
    product.billAmount = product.cost * product.quantity;
    if(product.billAmount > 10000){
      product.discount = product.billAmount * 10/100;
    }
    else{
      product.discount = product.billAmount * 5/100;
    }

    product.netBillAmount = product.billAmount - product.discount;
  }

  get JsonProduct(){
    return JSON.stringify(this.product);
  }

}
