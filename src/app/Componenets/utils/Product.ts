export class Product{
    productName : string;
    productDescription: string;
    productPrice: string;
    buyButtonText: string;
    productImageUrl: string;
    productInfoTitle: string;
    sunNeeds: string;
    soilNeeds: string;
    zones: string;
    height: string;
    bloomPeriod: string;
    features: string;
  
    constructor(
      productName: string,
      productDescription: string,
      productPrice: string,
      buyButtonText: string,
      productImageUrl: string,
      productInfoTitle: string,
      sunNeeds: string,
      soilNeeds: string,
      zones: string,
      height: string,
      bloomPeriod: string,
      features: string
    ) {
      this.productName = productName;
      this.productDescription = productDescription;
      this.productPrice = productPrice;
      this.buyButtonText = buyButtonText;
      this.productImageUrl = productImageUrl;
      this.productInfoTitle = productInfoTitle;
      this.sunNeeds = sunNeeds;
      this.soilNeeds = soilNeeds;
      this.zones = zones;
      this.height = height;
      this.bloomPeriod = bloomPeriod;
      this.features = features;
    }
  }
  