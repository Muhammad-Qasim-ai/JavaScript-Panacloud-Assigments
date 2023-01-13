function makeSandwich(...items) {
    console.log("Sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}

// Function calls:
makeSandwich("lettuce", "tomato", "mayo");
makeSandwich("ham", "cheese", "mustard");
makeSandwich("egg", "bacon", "avocado");
