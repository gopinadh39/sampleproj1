import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{  
     path: 'login', component: LoginComponent

 },
 {  
     path: 'success', component: SuccessComponent

 }
];