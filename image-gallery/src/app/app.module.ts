import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginationNextComponent } from './components/pagination-next/pagination-next.component';

import { ReqresService } from './reqres.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginationNextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReqresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
