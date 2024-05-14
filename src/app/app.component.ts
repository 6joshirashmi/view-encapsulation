import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShadowdomcompoComponent } from './shadowdomcompo/shadowdomcompo.component';
import { NonecompoComponent } from './nonecompo/nonecompo.component';
import { EmulatedcompoComponent } from './emulatedcompo/emulatedcompo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShadowdomcompoComponent,NonecompoComponent,EmulatedcompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'viewencapsulation';
}
