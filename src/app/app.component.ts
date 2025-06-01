import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/smart/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
