import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LiteraryRouteComponent } from './literary-route/literary-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiteraryRouteDetailComponent } from './literary-route-detail/literary-route-detail.component';
import { LiteraryPointDetailComponent } from './literary-point-detail/literary-point-detail.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    LiteraryRouteComponent,
    LiteraryRouteDetailComponent,
    LiteraryPointDetailComponent
  ],
  imports: [
    GoogleMapsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }


