interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  // need a variable to track the loop outside the loop to keep going
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight = mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });

  return nameOfTallestMountain;
};

console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Jordans", price: 250 },
  { name: "Polo", price: 100 }
];

let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let productName: string = "";
  let totalPrice: number = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });

  return totalPrice / 2;
};

console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let totalValueOfProducts: number = 0;

  arrayOfInventoryItems.forEach(item => {
    totalValueOfProducts += item.product.price * item.quantity;
  });
  return totalValueOfProducts;
};

console.log(calcInventoryValue(inventory));
