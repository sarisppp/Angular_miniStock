import { ContactComponent } from './pages/frontend/contact/contact.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Route สำหรับเรียกหน้า Frontend
    path:"",
    component:FrontendLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent,
        pathMatch:'full'  //แก้ปัญหา '/' ต่อท้าย
      },
      {
        path:"about",
        component:AboutComponent,
      },
      {
        path:"contact",
        component:ContactComponent,
      }

        
    ]
  },
       // Route สำหรับเรียกหน้า Backend
  {
    path:'backend',
    component:BackendLayoutComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Login/Register Layout
  {
    path:"login",
    component:LoginRegisterLayoutComponent,
    children:[
      {
        path:"",
        component:LoginRegisterComponent  
      }
    ]
  }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
