import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';  




@Component({
  selector: 'app-actualizar-aprendiz',
  templateUrl: './actualizar-aprendiz.component.html',
  styleUrls: ['./actualizar-aprendiz.component.css']
})
export class ActualizarAprendizComponent implements OnInit {
  form: FormGroup;

  constructor(private client: ClientService, private route: Router, 
    private fb: FormBuilder, 
    
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
      peso: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(5)]],
      altura: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(4)]],
      documento: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      ficha: ['', [Validators.minLength(4),Validators.maxLength(10)]],
      programa: ['', [Validators.minLength(4),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z ]+$/)]],
      telefono: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      edad: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(2)],Validators.min(14),Validators.max(60)],
      jornada: ['', [Validators.required]],
      persona: ['', [Validators.required]],
      tipoUser: ['', [Validators.required]],
      correo: ['', [Validators.email,Validators.maxLength(20),Validators.required]],
      
     
      
    });
  }
  onSubmit(){
    /*if (this.form.valid) {
      
      this.client.postRequestSendForm('http://localhost:5000/actualizardatosaprendiz', {
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        telefono: this.form.value.telefono,
        correo: this.form.value.correo,
        ficha: this.form.value.programa,
        programa: this.form.value.programa,
        altura: this.form.value.altura,
        peso: this.form.value.peso,
        jornada: this.form.value.jornada,
        documento:this.form.value.documento,
        edad: this.form.value.edad,
        contraseña:this.form.value.documento

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

  consultarUsuario(){
    let data={
      documento:this.form.value.documento
    }
    
    this.client.postRequest('http://localhost:5000/consult', data).subscribe(

      (response: any) => {
        
        Swal.fire(
          'Ok'
        ).then(() => {
          /* Read more about isConfirmed, isDenied below */
          
            
            console.log(response);
          
        })
        //this.route.navigate( ['/registerok']);
        
    },
    (error) => {
      console.log(error.status);
    })
  }
 

}
