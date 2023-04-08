class CQuote {
    companyName:string;
    objectDesc:string;
    objectPrice:number;

    name:string;
    url: string;
    products: []

    constructor() {
      this.companyName = "";
      this.objectDesc = "";
      this.objectPrice = 0;
      this.name = "";
      this.url = "";
      this.products = [];
    }
  }

  export default CQuote