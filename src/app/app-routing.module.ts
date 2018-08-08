import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MainComponent } from './modules/main/components/main/main.component';
import { NotFoundedComponent } from './modules/main/components/not-founded/not-founded.component';

const appRouter: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: '**', component: NotFoundedComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
