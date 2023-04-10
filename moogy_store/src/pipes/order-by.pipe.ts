import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(products: any[], orderQuery: string): any[] {
    if (!products) return [];

    switch (orderQuery) {
      case 'name':
        return products.sort((a: any, b: any) => a.name.localeCompare(b.name));
      case 'date':
        return products.sort((a: any, b: any) => a.date.localeCompare(b.date));
      case 'type':
        return products.sort((a: any, b: any) => a.type.localeCompare(b.type));
      case 'price':
        return products.sort((a: any, b: any) => a.price - b.price);
      default:
        return products;
    }
  }
}
