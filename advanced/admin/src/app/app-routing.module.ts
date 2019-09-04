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
import { ButtonsComponent } from './buttons/buttons/buttons.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
        // loadChildren: './buttons/buttons.module#ButtonModule'
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
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
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
export class AppRoutingModule {}
