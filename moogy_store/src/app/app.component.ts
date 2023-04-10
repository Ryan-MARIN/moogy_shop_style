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
  selectedFilter: string = '';

  onQueryChange(event: any) {
    console.log("selectedFilter >>> " + this.selectedFilter);
  }
}
