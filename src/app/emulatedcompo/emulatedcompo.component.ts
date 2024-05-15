import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedgrandchildComponent } from '../emulatedgrandchild/emulatedgrandchild.component';
import { EmulatedchildComponent } from '../emulatedchild/emulatedchild.component';

@Component({
  selector: 'app-emulatedcompo',
  standalone: true,
  imports: [EmulatedchildComponent,EmulatedgrandchildComponent],
  templateUrl: './emulatedcompo.component.html',
  styleUrl: './emulatedcompo.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedcompoComponent {

}
