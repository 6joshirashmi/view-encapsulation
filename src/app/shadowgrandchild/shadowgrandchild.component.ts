import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowgrandchild',
  standalone: true,
  imports: [],
  templateUrl: './shadowgrandchild.component.html',
  styleUrl: './shadowgrandchild.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowgrandchildComponent {

}
