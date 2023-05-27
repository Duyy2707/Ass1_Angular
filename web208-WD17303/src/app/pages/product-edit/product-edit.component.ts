import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product! :IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    img: [''],
  })
      constructor(private productService: ProductService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute){
      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(product=>{
        this.product = product
        this.productForm.patchValue({
          name: this.product.name,
          price: this.product.price,
          img: this.product.img,
        })
      }, error =>console.log(error.message)
      )
      })
        }
        onHandleUpdate(){
          if (this.productForm.valid) {
            const product : IProduct = {
              id: this.product.id,
              name : this.productForm.value.name || "",
              price: this.productForm.value.price || 0,
              img: this.productForm.value.img || "",
            }
            this.productService.getProductUpdate(product).subscribe(product =>{
              console.log('Sửa thành công', product);
              this.router.navigate(['/admin/product'])
            })
          }
        }
}
