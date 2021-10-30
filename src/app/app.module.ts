import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSingleComponent } from './order-single/order-single.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    OrderContainerComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
