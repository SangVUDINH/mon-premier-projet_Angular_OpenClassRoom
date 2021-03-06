import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate:[AuthGuardService] ,component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuardService] , component: SingleAppareilComponent },
  { path: 'edit', canActivate:[AuthGuardService] , component: EditAppareilComponent },

  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'notfound', component: RedirectComponent },

  { path: '**', redirectTo: '/notfound' },
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    ParentComponent,
    EnfantComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
