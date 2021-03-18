import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-registro',
  templateUrl: './tabla-registro.component.html',
  styleUrls: ['./tabla-registro.component.css']
})
export class TablaRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arreglo: any[]=[{jornada:"Tarde", nombres:"Andrés", apellidos:"Pinzón", edad:"18", ficha:"1967102", fecha:"07/12/20", tipo: "Administrador"},
                  {jornada:"Tarde", nombres:"Diana", apellidos: "Gil", edad: "18", ficha:"1967102", fecha:"07/12/20", tipo: "Usuario"},
                  {jornada:"Tarde", nombres: "Fabián", apellidos: "Cano", edad: "43", ficha:"1967102", fecha:"07/12/20", tipo: "Usuario"}

];

  filtroBuscarPersonas(){
    /*if (this.form.valid) {
      
      this.client.postRequestSendForm('http://localhost:5000/tablaregistro', {
        
        ficha: this.form.value.programa,
        jornada: this.form.value.jornada,
        edad: this.form.value.edad,
        fecha: this.form.value.fecha,
        tipo: this.form.value.tipo


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
