import { Component, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent {
  @Input() searchQuery: string = '';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('../../assets/data/products.json').subscribe((data) => {
      this.products = data;
    });
  }


  private _searchQuery: string = '';
}
