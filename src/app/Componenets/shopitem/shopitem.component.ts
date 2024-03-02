import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrl: './shopitem.component.css'
})
export class ShopitemComponent {
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: string = '';
  @Input() buyButtonText: string = '';
  @Input() productImageUrl: string = '';
  @Input() productInfoTitle: string = '';
  @Input() sunNeeds: string = '';
  @Input() soilNeeds: string = '';
  @Input() zones: string = '';
  @Input() height: string = '';
  @Input() bloomPeriod: string = '';
  @Input() features: string = '';
}
