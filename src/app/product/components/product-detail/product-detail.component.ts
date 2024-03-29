import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product[] = [];
  dataProducts: any;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.dataProducts = this.productsService.dataProducts;
  }

  ngOnInit() {
  }

}
