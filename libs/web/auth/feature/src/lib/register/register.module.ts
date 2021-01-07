import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@app-core/web/auth/data-access'
import { AuthPageModule } from '@app-core/web/auth/ui'
import { RegisterComponent } from './register.component'

const routes: Routes = [{ path: '', component: RegisterComponent }]

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthPageModule, WebAuthDataAccessModule],
})
export class RegisterModule {}
