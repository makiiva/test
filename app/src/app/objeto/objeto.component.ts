import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-objeto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './objeto.component.html',
  styleUrl: './objeto.component.css'
})
export class ObjetoComponent {
  usuarios = [
    {nombre: "Macarena", curso: "Front" ,edad: 21 },
    {nombre: "Luis", curso: "Back" ,edad: 30 },
    {nombre: "Maricel", curso: "UX" ,edad: 26 },
    {nombre: "Marta", curso: "Bases de datos" ,edad: 22 }
  ];
Objeto: any;
  
}
