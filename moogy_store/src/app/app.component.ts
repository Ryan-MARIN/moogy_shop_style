import { Component } from '@angular/core';
import typesJSON from '../assets/data/types.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  types = typesJSON;
  searchQuery: string = '';
  orderQuery: string = 'date';

  onQueryChange(event: any) {
    console.log("selectedFilter >>> " + this.orderQuery);
  }
}
