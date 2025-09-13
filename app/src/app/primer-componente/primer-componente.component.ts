import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [NgIf],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})
export class PrimerComponenteComponent {
  mensaje1: string = "Hola Angular";
  mensaje2: boolean = false;
  condition: boolean = false;
}
