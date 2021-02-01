import { HttpserviceService } from './httpservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetempComponent } from './getemp/getemp.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    GetempComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
