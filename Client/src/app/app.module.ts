import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { OktaAuthModule } from "@okta/okta-angular";
import { ArticleComponent } from './article/article.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AuthService} from './services/auth.service';

import{MatSliderModule} from '@angular/material/slider'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {  MatTabsModule } from "@angular/material/tabs";
import {MatIconModule} from '@angular/material/icon';


import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import {environment} from './../environments/environment';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ConfirmDeleteComponent } from './services/confirm-delete/confirm-delete.component';

const config = {
  issuer: 'https://dev-395608.okta.com/oauth2/default',
  redirectUri: environment.clientUrl+'implicit/callback',
  clientId: environment.oktaClientId,
  pkce: true,
  scopes:['openid','profile','email'],
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListItemComponent,
    CreateArticleComponent,
    UserListItemComponent,
    ProfileComponent,
    EditArticleComponent,
    ConfirmDeleteComponent,    
  ],


  imports: [  
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTabsModule,
    MatIconModule
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
