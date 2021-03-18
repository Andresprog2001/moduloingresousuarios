import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-formulario-aprendiz',
  templateUrl: './formulario-aprendiz.component.html',
  styleUrls: ['./formulario-aprendiz.component.css']
})
export class FormularioAprendizComponent implements OnInit {

  form: FormGroup;
  //load: boolean = true;
  estado1: boolean = true;



  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService
  ) { }

 
  ngOnInit(): void {
    //console.log(this.tipopersona.nativeElement.value)

    this.form = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]+$/)]],
      peso: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      altura: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      ficha: ['', [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
      idprograma: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      edad: ['', [Validators.required, Validators.min(14), Validators.max(60)]],
      jornada: ['', [Validators.required]],
      tipopersona: ['', [Validators.required]],
      tipouser: ['', [Validators.required]],
      correo: ['', [Validators.email, Validators.maxLength(20), Validators.required]],



    });

  }
  //esta funcion activa o descativa campos de acuerdo al rol que se
  //este cambiando
  cambioRol() {
    //si al cambiar el selct el nuevo valor es Funcionario,
    //deshabilitamos el campo jornada
    if (this.form.value.tipopersona == "Funcionario") {
      this.form.controls['jornada'].disable()
      this.form.controls['idprograma'].disable()
      this.form.controls['ficha'].disable()

    } else {
      this.form.controls['jornada'].enable()
      this.form.controls['idprograma'].enable()
      this.form.controls['ficha'].enable()
    }

    //si, al cambiar el select el nuevo valor es Aprendiz,
    //hay que habilitar el campo jornada


  }

  onSubmit() {

    if (this.form.valid) {


      let data = {

        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        telefono: this.form.value.telefono,
        correo: this.form.value.correo,
        ficha: this.form.value.ficha,
        idprograma: this.form.value.idprograma,
        altura: this.form.value.altura,
        peso: this.form.value.peso,
        jornada: this.form.value.jornada,
        documento: this.form.value.documento,
        edad: this.form.value.edad,
        tipopersona: this.form.value.tipopersona,
        contraseña: this.form.value.documento,
        tipouser: this.form.value.tipouser,


      }

      console.log("datos a enviar:", data)

      //this.load = false;
      this.client.postRequest('http://localhost:5000/registerok', data).subscribe(

        (response: any) => {
          //this.load = true;
          console.log(response.status);
          


          if (response = "200") {
            Swal.fire(
              'El usuario ha sido registrado','success'
            )
            this.route.navigate(['/registerok'])
          }
          
          /* Read more about isConfirmed, isDenied below */

        },
        (error) => {
          if (error.status = 403) {
            Swal.fire(
              'El documento o correo ingresado ya esta registrado en el sistema', '', 'error'
            )
            
            console.log(error);
            
          }
          /*this.load = false;
          this.route.navigate(['/formularioaprendiz'])
          location.reload()*/
         
        })

    } else {
      console.log("Form error");
      Swal.fire(
        'Complete todos los campos correctamente antes presionar el boton de registrar', '', 'error'
      )
    }
  }
}


