import { Component, ViewEncapsulation } from '@angular/core';
import { ShadowchildComponent } from '../shadowchild/shadowchild.component';

@Component({
  selector: 'app-shadowdomcompo',
  standalone: true,
  imports: [ShadowchildComponent],
  templateUrl: './shadowdomcompo.component.html',
  styleUrl: './shadowdomcompo.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowdomcompoComponent {

}

/*
case 1:
parent component : ShadowDom
child component :  no ViewEncapsulation, no css

i have component parent and some child when we use ShadowDom in parent component than 
the css which is written in parent component will apply for all it's child component and global
style will not work for it when i did not use ViewEncapsulation in child component 
*/

/*
case2:
parent component : no ViewEncapsulation,css
child component : ShadowDom

the css of child componenet will work for child component, global style (style.css file)
and also parent component style(css file) will not work for child component

*/

/*
case3:
parent component : no ViewEncapsulation,no css
child component : ShadowDom

the css of child componenet will work for child component, global style (style.css file)
 will not work for child component and also style(css file) will work for parent component 
 */