import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products:any;
  constructor(public productServices : ProductServiceService){

  }
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => console.log(error),
    });
  };
  deletHandlar(id:any){
    this.productServices.deleteProduct(id).subscribe({
      next: (data) => {
        this.products = this.products.filter(
          (product: any) => product.id != id
        );
      },
    });
  }
}


