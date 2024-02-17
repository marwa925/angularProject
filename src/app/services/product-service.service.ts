import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseURL: string = 'http://localhost:3005/products';

  constructor(public http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.baseURL);
  }

  getProductById(id: any) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  addProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }
  editProduct(id: any, product: any) {
    return this.http.put(`${this.baseURL}/${id}`, product);
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
