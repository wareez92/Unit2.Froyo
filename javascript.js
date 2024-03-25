
// Prompt User for froyo flavors

let chooseFlavors = prompt("What flavors do you want?", "vanilla, vanilla, vanilla, chocolate, strawberry");

// Parse the user input into an array of froyo flavors

const chosenFlavors = chooseFlavors.split(", ");




function froyoFlavors() {


    // Object that tracks how many flavors there are
    const checkFlavors = {};

    // For every flavor in the checkFlavors object increment the flavors by a value 
    //1 and if the same flavor is added multiple times keep incrementing its value 
    for (const flavor of chosenFlavors) {
        console.log(flavor)
        if (checkFlavors[flavor]) {
            checkFlavors[flavor]++;
        }
        else {
            checkFlavors[flavor] = 1;
        }

    }
    return checkFlavors;

}

// A table that shows how many of each flavor was ordered

console.table(froyoFlavors());