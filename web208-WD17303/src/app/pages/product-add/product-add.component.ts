import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    img: [''],
  })
          constructor(private productService: ProductService,
          private formBuilder: FormBuilder,
          private router: Router){}

    onHandleSubmit(){
      if (this.productForm.valid) {
        const product : IProduct = {
          name : this.productForm.value.name || "",
          price: this.productForm.value.price || 0,
          img: this.productForm.value.img || "",
        }
        this.productService.getProductAdd(product).subscribe(product =>{
          console.log('Thêm thành công', product);
          this.router.navigate(['/admin/product'])
        })
      }
    }
}
