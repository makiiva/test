import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string ='Hola';
  @Output() childClick = new EventEmitter<string>();
  onClick() {
    this.childClick.emit('Hola desde el componente hijo');
  }
}
