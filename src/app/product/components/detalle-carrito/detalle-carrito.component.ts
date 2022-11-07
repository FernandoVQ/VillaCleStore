import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/core/services/products/products.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.scss']
})
export class DetalleCarritoComponent implements OnInit {

  @Output() cerrarDetalle = new EventEmitter<boolean>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  items: any = [];
  total: any = 0;
  total2: any = 0;
  displayedColumns: string[] =
    ['titulo', 'tipo', 'price', 'price2', 'opciones'];
  pageSizeOptions = [3, 5, 30, 50, 100, 200];

  constructor(private productsService: ProductsService) {

  }


  ngOnInit(): void {
    this.listado()
  }

  CerrarPopUp() {
    this.cerrarDetalle.emit();
  }

  eliminarItem(index: number, element) {
    this.items.data.splice(index, 1);
    this.listado();

  }

  listado() {
    this.items = this.productsService.itemscarrito;
    this.items = new MatTableDataSource(this.productsService.itemscarrito);
    this.items.sort = this.sort;
    this.items.paginator = this.paginator;
    this.total = 0;
    this.total2 = 0;
    if (this.items.data.length > 0) {
      this.items.data.forEach(element => {
        this.total = this.total + element.price
        this.total2 = this.total2 + element.price2
      });
    }
  }

  guardar() {
    Swal.fire({
      title: '¿Seguro de comprar ' + this.items.data.length + ' productos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Comprar en soles (s/' + this.total + ')',
      denyButtonText: 'Comprar en dolares ($' + this.total2 + ')',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Gracias por su compra!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Gracias por su compra', '', 'success')
        window.location.reload();
      }
    })

  }
}
