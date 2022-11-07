import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productoClicked: EventEmitter<any> = new EventEmitter();
  count: number = 0
  disable: boolean = true;
  constructor(private productsService: ProductsService) {
  }

  agregar() {

    if (this.count != 0) {
      for (var i = 0; i < this.count; i++) {
        this.productoClicked.emit(this.product);
      }
    }
    this.count = 0;
    this.disable = true;
  }

  add() {
    this.count++;
    this.disable = false;
  }

  remove() {
    if (this.count > 1) {
      this.count = this.count - 1;
    } else {
      this.disable = true;
      this.count = 0;
    }
  }

  verDetalle(product) {
    this.productsService.dataProducts = product;
  }

}