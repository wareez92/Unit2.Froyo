function froyoFlavors(){

    // Prompt User for froyo flavors
    let chooseFlavors = prompt("What flavors do you want?", "vanilla, vanilla, vanilla, chocolate, strawberry")
    
    // Parse the user input into an array of froyo flavors
    
    const chosenFlavors = chooseFlavors.split(",");
    
    // Object that tracks how many flavors there are
    
    const checkFlavors = {};
    
    // Loops thru the array and updates 
    
    for (let i = 0; i < chosenFlavors.length; i++) {
        if (chosenFlavors[i] === checkFlavors){
            chosenFlavors[i]++;
        }
        else (chosenFlavors[i] != checkFlavors){
            chosenFlavors[i] = 1;
        }
    }
    
    }
// A table that shows how many of each flavor was ordered

console.table(froyoFlavors)