import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebBlogFeatureComponent } from './web-blog-feature.component'
import { WebCoreDataAccessModule } from '@app-core/web/core/data-access'

@NgModule({
  declarations: [WebBlogFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebBlogFeatureComponent }]),
  ],
})
export class WebBlogFeatureModule {}
