import { Component,Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item-component',
  standalone: true,
  imports: [],
  templateUrl: './movie-item-component.component.html',
  styleUrl: './movie-item-component.component.css'
})
export class MovieItemComponentComponent {
  @Input() movie: object[] = [];
  

}
