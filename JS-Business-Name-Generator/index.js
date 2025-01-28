let combinations = {
    adjective: {
        0: "Fire",
        1: "Crazy",
        2: "Amazing",
    },

    shopName: {
        0: "Garment",
        1: "Engine",
        2: "Food",
    },

    suffix: {
        0: "Hub",
        1: "Bros",
        2: "Limited",
    }
}

/* a user defined function to generate a random number less than 3 */
function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function generateBusinessName() {
    let adj = combinations['adjective'][getRandomInt()];
    let shop = combinations['shopName'][getRandomInt()];
    let suff = combinations['suffix'][getRandomInt()];

    return `${adj} ${shop} ${suff}`;
}

function main() {
    console.log(generateBusinessName());
}

main();