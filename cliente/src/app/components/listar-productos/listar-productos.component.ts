import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(
      private _productoService: ProductoService, 
      private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    });
  }

  eliminarProductos(id: any) {
    this._productoService.eliminarProductos(id).subscribe(data => {
      this._toastr.error('El producto fue eliminado correctamente', 'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    });
  }


}
