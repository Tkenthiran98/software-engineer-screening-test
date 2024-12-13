/*
1.2 Please order by Total
Develop a program which produces ordered array of sales. Input: array of objects with the 
following structure {amount: 10000, quantity: 10}. Output: new array of ordered sales. Array
element structure should be: {amount: 10000, quantity: 10, Total: 100000}, 
where Total = amount * quantity. Please order by Total and note that input array shall remain intact.
*/


const orderSales = (sales) => {
    const salesWithTotal = sales.map((sale) => ({
      ...sale,
      Total: sale.amount * sale.quantity,
    }));
  
    salesWithTotal.sort((a, b) => a.Total - b.Total);
  
    return salesWithTotal;
  };
  
  const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 15 },
  ];
  
  const orderedSales = orderSales(sales);
  
  console.log("Original Sales Array: ", sales);
  console.log("Ordered  Sales Array: ", orderedSales);
