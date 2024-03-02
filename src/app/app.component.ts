import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shop';
  products = [
    {
      productName: 'Golden Sunflower',
      productDescription: 'Brighten up your garden with these vibrant sunflowers...',
      productPrice: '29 $',
      buyButtonText: 'Buy Now',
      productImageUrl: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/sunflower-3389867_960_720.jpg',
      productInfoTitle: 'Product Details',
      sunNeeds: 'Full Sun',
      soilNeeds: 'Well-drained',
      zones: '3 - 9',
      height: '4 - 6 feet',
      bloomPeriod: 'Summer - Early Fall',
      features: 'Attracts pollinators'
    },
    {
      productName: 'Lavender Bliss',
      productDescription: 'Add a touch of elegance and fragrance to your garden with lavender...',
      productPrice: '39 $',
      buyButtonText: 'Buy Now',
      productImageUrl: 'https://cdn.pixabay.com/photo/2018/06/24/23/13/lavender-3496867_960_720.jpg',
      productInfoTitle: 'Product Overview',
      sunNeeds: 'Full Sun',
      soilNeeds: 'Well-drained',
      zones: '5 - 9',
      height: '1 - 3 feet',
      bloomPeriod: 'Late Spring - Early Fall',
      features: 'Drought-tolerant'
    },
    {
      productName: 'Ruby Red Roses',
      productDescription: 'Classic beauty for your garden with these stunning red roses...',
      productPrice: '59 $',
      buyButtonText: 'Buy Now',
      productImageUrl: 'https://cdn.pixabay.com/photo/2018/07/02/22/10/rose-3511363_960_720.jpg',
      productInfoTitle: 'Product Information',
      sunNeeds: 'Full Sun',
      soilNeeds: 'Rich, well-drained',
      zones: '5 - 9',
      height: '3 - 6 feet',
      bloomPeriod: 'Late Spring - Fall',
      features: 'Fragrant blooms'
    }
    
    // Add more product objects here if needed
  ];
}
