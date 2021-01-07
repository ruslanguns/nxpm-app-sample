import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebCoreFeatureModule } from '@app-core/web/core/feature'
import { WebShellFeatureModule } from '@app-core/web/shell/feature'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, WebCoreFeatureModule, WebShellFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
