import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Cliente } from '../services/cliente';


@Component({
  selector: 'app-tabla-ingreso',
  templateUrl: './tabla-ingreso.component.html',
  styleUrls: ['./tabla-ingreso.component.css']
})
export class TablaIngresoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  arreglo: Cliente[];

  constructor(private client: ClientService,private route: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };

    this.client.getRequest('http://localhost:5000/tablaingreso').subscribe(
        (data): any => {
          this.arreglo = data["consultaUser"]
        },
        error => console.log()
        
      )
  }
  filtroBuscarPersonas(){

  /*if (this.form.valid) {
      
      this.client.postRequestSendForm('http://localhost:5000/tablaingreso', {
       
        ficha: this.form.value.programa,
        jornada: this.form.value.jornada,
        edad: this.form.value.edad
        

      }).subscribe(

        (response: any) => {
          console.log(response);
         
          
      },
    
      (error) => {
    
        console.log(error.status);
      })
 
    } else {
      console.log("Form error");
    }**/
  }

  
}
