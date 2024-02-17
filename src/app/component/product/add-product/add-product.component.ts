import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId:any;
  productEdit:any;
  product: any;
  mySub: any;
  constructor(
    private activeRoute:ActivatedRoute,
    public productService:ProductServiceService,
    public router:Router
  ){}
  ngOnInit(): void {
    this.productEdit=this.activeRoute.snapshot.params['edit'];
    this.activeRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getName.setValue('');
        this.getPrice.setValue(null);
        this.getQuantity.setValue(null);
      },
    });
    if (this.productId != 0) {
      this.mySub = this.productService
        .getProductById(this.productId)
        .subscribe({
          next: (data) => {
            this.product = data;
            this.getName.setValue(this.product.name);
            this.getPrice.setValue(this.product.price);
            this.getQuantity.setValue(this.product.quantity);
          },
        });
    }

  }

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(10)]),
    quantity: new FormControl(null, [Validators.required]),
  });
  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  formOperation(e: any) {
    e.preventDefault();
    console.log("edit",this.productId)

    if (this.productForm.status == 'VALID') {
      // console.log("edit",this.productId)

      if (this.productId != 0) {

        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });

      } else {

        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      }
      console.log(this.productForm.value);
    } else {
      console.log('Errors');
    }
  }

}
