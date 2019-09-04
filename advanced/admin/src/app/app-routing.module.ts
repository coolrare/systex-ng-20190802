import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  // {
  //   path: 'tables',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'tables/:page',
    component: TablesComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent,
    children: [
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'borders',
        component: BordersComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
