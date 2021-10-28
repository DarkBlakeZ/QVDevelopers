import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListPedidosComponent } from './components/Pedidos/listPedidos/listPedidos.component';
import { ProductosComponent } from './components/Productos/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  { path: 'pedidos', component: ListPedidosComponent, canActivate: [LoginGuard]},
  { path: 'productos', component: ProductosComponent, canActivate: [LoginGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
