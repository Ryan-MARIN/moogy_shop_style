import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(products: any[], searchQuery: string): any[] {
    if (!products) return [];
    if (!searchQuery) return products;

    searchQuery = searchQuery.toLowerCase();

    return products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery);
    });
  }
}
