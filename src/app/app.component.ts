import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopnavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
  title = 'ihome_angular';
}
