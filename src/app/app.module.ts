import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormularioAprendizComponent } from './formulario-aprendiz/formulario-aprendiz.component';
import { FormularioFuncionarioComponent } from './formulario-funcionario/formulario-funcionario.component';
import { ActualizarFuncionarioComponent } from './actualizar-funcionario/actualizar-funcionario.component';
import { ActualizarAprendizComponent } from './actualizar-aprendiz/actualizar-aprendiz.component';
import { TablaRegistroComponent } from './tabla-registro/tabla-registro.component';
import { TablaIngresoComponent } from './tabla-ingreso/tabla-ingreso.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterokComponent } from './registerok/registerok.component';
import { IngresogymComponent } from './ingresogym/ingresogym.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormularioAprendizComponent,
    FormularioFuncionarioComponent,
    ActualizarFuncionarioComponent,
    ActualizarAprendizComponent,
    TablaRegistroComponent,
    TablaIngresoComponent,
    InicioComponent,
    IngresoComponent,
    FooterComponent,
    RegisterokComponent,
    IngresogymComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
