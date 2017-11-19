import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PersonalDetailComponent } from '../../personal-detail/personal-detail.component';
import { PersonalHelloComponent } from '../../personal-hello/personal-hello.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/Personal-detail',
      pathMatch: 'full'
    },
    {
      path: 'Personal-detail',
      component: PersonalDetailComponent
    },
    {
      path: 'Personal-hello',
      component: PersonalHelloComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
