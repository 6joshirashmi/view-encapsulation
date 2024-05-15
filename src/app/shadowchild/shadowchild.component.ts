import { Component } from '@angular/core';
import { ShadowgrandchildComponent } from '../shadowgrandchild/shadowgrandchild.component';

@Component({
  selector: 'app-shadowchild',
  standalone: true,
  imports: [ShadowgrandchildComponent],
  templateUrl: './shadowchild.component.html',
  styleUrl: './shadowchild.component.css'
})
export class ShadowchildComponent {

}
