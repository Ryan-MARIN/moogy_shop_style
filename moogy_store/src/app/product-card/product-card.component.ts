import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() title: string = '<titre>';
  @Input() image: string = '';
  @Input() date: string = '0/0/2000';
  @Input() type: string = '';
  @Input() price: number = 0;

  @Input() rating: number = 4;
  @Input() favorite: boolean = true;
}
