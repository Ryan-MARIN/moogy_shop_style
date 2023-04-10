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
  filteredProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('../../assets/data/products.json').subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes[this.searchQuery]) {
      this.filterProducts();
    }
  }
  private _searchQuery: string = '';
}
