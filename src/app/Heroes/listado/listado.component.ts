import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  constructor() { }

    arregloHeroe: Heroes [] = [
     

    {nombre : 'Tony Stark', alias : 'Iron Man', poder:500},
    {nombre : 'Peter Parker', alias : 'Spiderman', poder:1500},
    {nombre : 'Bruce Banner', alias : 'Hulk', poder:10000},
  
  ];

  hborrado:any="";
  ocultarO:boolean=true;


  borrarHeroe(){

    this.hborrado = this.arregloHeroe.shift();
    console.log(this.hborrado);

  };

  ocultar(){

    if (this.ocultarO) {
      
      this.ocultarO=false;

    }else this.ocultarO=true;
    

  };

 /* mensajeEstado(b:string):String{

    if (b=="") {
      return 'No ha borrado nada'
    }else return ''

  };*/

}

 

 interface Heroes{

  nombre  : String,
  alias   : String,
  poder   : Number

}

