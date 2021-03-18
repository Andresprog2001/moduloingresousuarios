import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingresogym',
  templateUrl: './ingresogym.component.html',
  styleUrls: ['./ingresogym.component.css']
})
export class IngresogymComponent implements OnInit {

  form: FormGroup;
  load: boolean = true;
  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({

      documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],

    });
    
  }


  async onSubmit() {


    if (this.form.valid) {

      let data = {
        documento: this.form.value.documento
      }

      
      this.client.postRequest('http://localhost:5000/registroingreso', data).subscribe(

        (response: any) => {
          console.log(response);
          this.load = true
          Swal.fire(
            'Ingreso exitoso','Bienvenido al gym','success'
          )
          
        },
        (error) => {
          Swal.fire(
            'Por favor registre a la persona antes de ingresar al gimnasio', '', 'error'
          )
          console.log(error.status);
        }
      )
    } else {

      console.log("Form error");
    }

  }


  salirgym(){
    if (this.form.valid) {

      let data = {
        documento: this.form.value.documento
      }
      console.log(data.documento)
      
      this.client.putRequest('http://localhost:5000/registrosalida' , data).subscribe(

        (response: any) => {
          console.log(response);
          this.load = true
          Swal.fire(
            'salida exitosa del gym','success'
          )
          
        },
        (error) => {
          Swal.fire(
            'Por favor ingrese primero al gimnasio', '', 'error'
          )
          
          console.log(error.status);
        }
      )
    } else {
      Swal.fire(
        'Ingreseel documento antes de oprimir la opcion "Ingresar al gimnasio" o "salir del gimnasio"', '', 'error'
      )
      console.log("Form error");
    }

  }

}



