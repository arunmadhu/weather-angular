import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SourceComponent} from './sources/sources.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  {
    path: 'home',
    component: WeatherComponent
  },
  {
    path: 'sources',
    component: SourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
