import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@app-core/web/auth/data-access'
import { WebCoreDataAccessModule } from '@app-core/web/core/data-access'
import { WebLayoutComponent } from '@app-core/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@app-core/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@app-core/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('@app-core/web/blog/feature').then((m) => m.WebBlogFeatureModule),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@app-core/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebCoreDataAccessModule, WebAuthDataAccessModule],
})
export class WebShellFeatureModule {}
