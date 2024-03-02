import { Component, Input } from '@angular/core';
import { Product } from '../utils/Product'; // Assuming Product is a class defined in Product.ts file

@Component({
  selector: 'app-itemsdisplay',
  templateUrl: './itemsdisplay.component.html',
  styleUrls: ['./itemsdisplay.component.css'] // corrected property name from styleUrl to styleUrls
})
export class ItemsdisplayComponent {
  @Input() products: Product[] = []; // Corrected syntax to define an array of Product objects
  constructor() { }
}
