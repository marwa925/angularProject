import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  product:any;
  constructor(
    private activatedRouter:ActivatedRoute,
    public productService:ProductServiceService,
    public router:Router
  ){

  }
  ngOnInit(): void {
    this.productId=this.activatedRouter.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }
  goback(){
    this.router.navigate(['/products']);
  }
}
