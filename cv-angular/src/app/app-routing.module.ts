import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './pages/cv/cv.component';

export const routes: Routes = [
  {
    path: 'about',
    component: CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
