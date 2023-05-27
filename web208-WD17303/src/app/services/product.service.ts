import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(`http://localhost:3000/products`);
    }
    getProductById(id: any): Observable<IProduct>{
      return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
    }
    getProductAdd(product: IProduct): Observable<IProduct>{
      return this.http.post<IProduct>(`http://localhost:3000/products`, product)
    }
    getProductUpdate(product: IProduct): Observable<IProduct>{
      return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product)
    }
    getProductDelete(id: any): Observable<IProduct>{
      return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
    }
}
