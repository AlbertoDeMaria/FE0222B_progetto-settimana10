import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDOComponent } from './components/to-do/to-do.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoneComponent } from './components/done/done.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: ToDOComponent
  },
  {
    path: 'done',
    component: DoneComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ToDOComponent,
    NavbarComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
