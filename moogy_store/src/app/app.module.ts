import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/pipes/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsGridComponent,
    SearchFilterPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
