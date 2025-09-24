import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from "./primer-componente/primer-componente.component";
import { ObjetoComponent } from "./objeto/objeto.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ChildComponent } from "./child/child.component";
import { MovieListComponent } from "./movie-list-component/movie-list-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerComponenteComponent, ObjetoComponent, HeaderComponent, FooterComponent, ChildComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: string;
  title = 'app';
}
