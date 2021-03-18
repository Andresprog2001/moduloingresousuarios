import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-funcionario',
  templateUrl: './actualizar-funcionario.component.html',
  styleUrls: ['./actualizar-funcionario.component.css']
})
export class ActualizarFuncionarioComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    /*if (this.form.valid) {
      
      this.client.postRequestSendForm('http://localhost:5000/actualizardatosfuncionario', {
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
