import {Component, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import {Product} from "../products";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @ViewChild(MatTable) table: MatTable<any> | undefined;

  items: Product[] = this.cartService.getItems();

  form = this.formBuilder.group({
    name: '',
    type: '',
    motor: '',
    color: '',
    price: '',
    equipement: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  displayedColumns: string[] = ['name', 'type', 'motor', 'color', 'equipement', 'price', 'actions'];
  delete(id: number):void {
    this.items = this.items.filter(p=> p.id!==id)

    //this.cartService.removeFromCart(id);
    // @ts-ignore
    this.table.renderRows();
  }

  edit(id: number): void {
    alert("TODO edit");
  }
  add(): void {

    const product = this.form.getRawValue();
    const newProduct: Product= {
      id:  this.getID() + 1,
      name:  product.name,
      type:  product.type,
      motor:  product.motor,
      color:  product.color,
      equipement:  product.equipement,
      price: product.price ? new Number(product.price).valueOf() : 0,
    }

    this.items.push(newProduct)
    // @ts-ignore
    this.table.renderRows();
    //this.form.updateValueAndValidity();
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.form.value);
    //this.form.reset();
  }

  getID(): number {
    return this.cartService.getItems().length;
  }
}
