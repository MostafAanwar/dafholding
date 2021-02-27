import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList: Product[];
  constructor(private http: HttpClient) {
    this.http
      .get<any>('http://localhost:3000/products')
      .subscribe((transformedData: Product[]) => {
        this.productsList = transformedData;
      });
  }
}


class Product {
  id: Number;
  product_name: String;
  quantity: Number;
  price: Number;
}
