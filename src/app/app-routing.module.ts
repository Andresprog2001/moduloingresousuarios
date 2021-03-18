import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarAprendizComponent} from './actualizar-aprendiz/actualizar-aprendiz.component';
import { ActualizarFuncionarioComponent} from './actualizar-funcionario/actualizar-funcionario.component';
import { FormularioAprendizComponent} from './formulario-aprendiz/formulario-aprendiz.component';
import { FormularioFuncionarioComponent} from './formulario-funcionario/formulario-funcionario.component';
import { TablaIngresoComponent } from './tabla-ingreso/tabla-ingreso.component';
import { TablaRegistroComponent } from './tabla-registro/tabla-registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterokComponent } from './registerok/registerok.component';
import { IngresogymComponent } from './ingresogym/ingresogym.component';



const routes: Routes = [
  {path: 'formularioaprendiz', component: FormularioAprendizComponent},
  {path: 'formulariofuncionario', component: FormularioFuncionarioComponent},
  {path: 'actualizardatosaprendiz', component: ActualizarAprendizComponent},
  {path: 'actualizardatosfuncionario', component: ActualizarFuncionarioComponent},
  {path: 'tablaingreso', component: TablaIngresoComponent},
  {path: 'tablaregistro', component: TablaRegistroComponent},
  {path: 'ingreso', component:InicioComponent },
  {path: '', component: IngresoComponent},
  {path: 'registerok', component: RegisterokComponent},
  {path: 'ingresogym', component: IngresogymComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
