const dishes = [
    { name: 'Italian pasta', price: 9.55 },
    { name: 'Rice with veggies', price: 8.65 },
    { name: 'Chicken with potatoes', price: 15.55 },
    { name: 'Vegetarian Pizza', price: 6.45 },
  ];
  
  
  // Function declaration
  function printDishPrices(includeTax) {
    console.log(includeTax ? 'Prices with 20% tax:' : 'Prices without tax:');
  
    // Calculate and print prices based on the argument
    dishes.forEach((dish) => {
      const taxRate = includeTax ? 0.2 : 0;
      const totalPrice = dish.price * (1 + taxRate);
  
      console.log(
        `Dish: ${dish.name} Price (incl.tax): $ ${totalPrice.toFixed(2)}`
      );
    });
  }
  
  // Example usage
  printDishPrices(true); // Output prices with 20% tax
  console.log('\n'); // Add a newline for better readability
  printDishPrices(false); // Output prices without tax