import { Component, ViewEncapsulation } from '@angular/core';
import { NonechildComponent } from '../nonechild/nonechild.component';
import { NonegrandchildComponent } from '../nonegrandchild/nonegrandchild.component';

@Component({
  selector: 'app-nonecompo',
  standalone: true,
  imports: [NonegrandchildComponent,NonechildComponent],
  templateUrl: './nonecompo.component.html',
  styleUrl: './nonecompo.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class NonecompoComponent {

}


/*
case 1:
parent component : None
child component :  no None, no css

i have component parent and some child when we use ShadowDom in parent component than 
the css which is written in parent component will apply for all it's child component and global
style will not work for it
*/

/*
case2:
parent component : no None,css
child component : None

the css of child componenet will work for child component, global style (style.css file) 
and parent component css  will not work for it ,also parent component css  will  work for parent component

*/

/*
case3:
parent component : no None,no css
child component : None

the css of child componenet will work for child component, global style (style.css file)
 will not work for child component and also child class css will work for parent component 
 */