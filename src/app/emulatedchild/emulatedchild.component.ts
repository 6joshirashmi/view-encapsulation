import { Component } from '@angular/core';
import { EmulatedgrandchildComponent } from '../emulatedgrandchild/emulatedgrandchild.component';

@Component({
  selector: 'app-emulatedchild',
  standalone: true,
  imports: [EmulatedgrandchildComponent],
  templateUrl: './emulatedchild.component.html',
  styleUrl: './emulatedchild.component.css'
})
export class EmulatedchildComponent {

}
