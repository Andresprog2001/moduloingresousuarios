import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html',
  styleUrls: ['./formulario-funcionario.component.css']
})
export class FormularioFuncionarioComponent implements OnInit {

  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService
    ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        peso: ['', Validators.required],
        altura: ['', Validators.required],
        documento: ['', Validators.required],
        telefono: ['', Validators.required],
        edad: ['', Validators.required],
        correo: ['', Validators.email],
       
        
      });
    }

  
   onSubmit(){
     
    if (this.form.valid) {
      
       let data = {
         
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        telefono: this.form.value.telefono,
        correo: this.form.value.correo,
        altura: this.form.value.altura,
        peso: this.form.value.peso,
        jornada: this.form.value.jornada,
        documento:this.form.value.documento,
        edad: this.form.value.edad,
        contraseña:this.form.value.documento
      }
      console.log("datos a enviar:",data)

      this.load = false;
      this.client.postRequest('http://localhost:5000/registerok', data).subscribe(

        (response: any) => {
          this.route.navigate( ['/registerok']);
          console.log(response);
      },
      (error) => {
        console.log(error.status);
      })

    } else {
      console.log("Form error");
    }
  }
  }