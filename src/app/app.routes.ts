import { Routes } from '@angular/router';
import { ShadowdomcompoComponent } from './shadowdomcompo/shadowdomcompo.component';
import { EmulatedcompoComponent } from './emulatedcompo/emulatedcompo.component';
import { NonecompoComponent } from './nonecompo/nonecompo.component';

export const routes: Routes = [
   
    {path:'none', component:NonecompoComponent},
    {path:'emulated', component:EmulatedcompoComponent},
    {path:'Shadowdom', component:ShadowdomcompoComponent},
    
];
