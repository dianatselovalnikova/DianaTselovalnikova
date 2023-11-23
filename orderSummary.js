function printOrderDetails(order) {
  let totalSum = 0;

  for (let i = 0; i < order.rows.length; i++) {
    const item = order.rows[i];

    const itemName = item.name;
    const quantity = item.amount;
    const pricePerItem = item.price;
    const vat = item.vat;
    const vatAmount = pricePerItem * vat; // KM summa
    const itemSum = quantity * (pricePerItem + vatAmount); // hind koos KMiga

    console.log(`Nimi: ${itemName}`);
    console.log(`Kogus: ${quantity}`);
    console.log(`Hind: ${pricePerItem.toFixed(2)} €`);
    console.log(`Käibemaks: ${vatAmount.toFixed(2)} €`);
    console.log(`Summa: ${itemSum.toFixed(2)} €`);
    console.log('   '); 

    totalSum += itemSum;
  }

  // tellimuse kogusumma
  console.log(`Tellimuse kogusumma: ${totalSum.toFixed(2)} €`);
}

// test
var tellimus = { 
  "id": 2113, 
  "orderNumber": "E210126001", 
  "createdAt": "2021-01-26 16:04:24", 
  "clientName": "Kalle Tali", 
  "deliveryType": "Omniva smartpost", 
  "deliveryValue": 178, 
  "rows": [ 
    { 
      "article_id": 31, 
      "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
      "product_code": "257549", 
      "price": 49.1666666667, 
      "amount": 1, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23420, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
      "product_code": "355836", 
      "price": 5.0666666667, 
      "amount": 2, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23421, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
      "product_code": "000000000501267301", 
      "price": 5.825, 
      "amount": 1, 
      "vat": 0.2 
    } 
  ] 
};

printOrderDetails(tellimus);
