import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent{

  @Input() product:Product;
  @Output() productoClicked : EventEmitter<any> = new EventEmitter();
  agregar(price:number){
    console.log(price);
    this.productoClicked.emit(this.product.id);
  }

}