import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ListPedidosComponent } from './components/Pedidos/listPedidos/listPedidos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/Productos/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { NavBarComponent } from './components/shared/navBar/navBar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalEditProductComponent } from './components/Productos/modalEditProduct/modalEditProduct.component';
import { ModalCreateProductComponent } from './components/Productos/modalCreateProduct/modalCreateProduct.component';
import { ModalEditUserComponent } from './components/usuarios/modalEditUser/modalEditUser.component';
import { ModalCreateUserComponent } from './components/usuarios/modalCreateUser/modalCreateUser.component';
import { ModalCreatePedidoComponent } from './components/Pedidos/modalCreatePedido/modalCreatePedido.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListPedidosComponent,
    ProductosComponent,
    UsuariosComponent,
    NavBarComponent,
    ModalEditProductComponent,
    ModalCreateProductComponent,
    ModalEditUserComponent,
    ModalCreateUserComponent,
    ModalCreatePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
