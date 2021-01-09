import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@app-core/web/core/data-access'
import { environment } from '@app-core/web/core/feature'

@Component({
  template: `
    <div class="container mx-auto my-3 my-md-5">
      <div class="card">
        <div class="card-header">Blog</div>
        <pre>{{ environment | json }}</pre>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class WebBlogFeatureComponent {
  public environment = environment
  public uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
