import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categoria: string = "1";
  productos: any;
  tipo: string = "1";
  abrirCarrito: boolean = false;
  totalcarrito: any = [];
  count: number = 0;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.tipo = this.productsService.categoria;
    this.productsService.getProducts().subscribe(resp => {
      if (Array.isArray(resp) && this.tipo !== "1") {
        let productoss
        productoss = resp.filter(depas => depas.tipo == this.tipo)
        this.productos = productoss;
      } else {
        this.productos = resp;
      }
    })
  }

  clicked(item) {
    this.count++
    this.totalcarrito.push(item);
    this.productsService.itemscarrito = this.totalcarrito;

  }

  seleccionar(categoria) {
    this.productsService.getProducts().subscribe(resp => {
      if (Array.isArray(resp) && categoria !== "1") {
        let productoss
        productoss = resp.filter(depas => depas.tipo == categoria)
        this.productos = productoss;
      } else {
        this.productos = resp;
      }
    })
  }

  AbrirDetalle() {
    this.abrirCarrito = true;
  }

  CerrarDetalle() {
    this.abrirCarrito = false;
  }
}
