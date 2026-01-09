console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6

const helper = (bird, spot) => (spot <= 6 ? bird.style.setProperty("grid-column", spot) : null);

// Create position variables for each penguin and set them all to 1

let tux_spot = 1;
let daisy_spot = 1;
let rocky_spot = 1;

// Query selectors for all buttons and penguins go here

const tuxBtn = document.querySelector("#tux-button");
const tuxPenguin = document.querySelector("#tux-penguin");
const daisyBtn = document.querySelector("#daisy-button");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyBtn = document.querySelector("#rocky-button");
const rockyPenguin = document.querySelector("#rocky-penguin");

// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function

const moveTux = (e) => {
    tux_spot += 1;
    helper(tuxPenguin, tux_spot);
    winnerBox(tux_spot, "Tux");
};

// Write the function that moves Daisy forward

const moveDaisy = (e) => {
    tux_spot += 1;
    helper(daisyPenguin, daisy_spot);
    winnerBox(daisy_spot, "Daisy");
};

// Write the function that moves Rocky forward

const moveRocky = (e) => {
    tux_spot += 1;
    helper(tuxPenguin, rocky_spot);
    winnerBox(rocky_spot, "Rocky");
};

// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found

const disableAllBtns = () => {
    tuxBtn.disabled = true;
    daisyBtn.disabled = true;
    rockyBtn.disabled = true;
};

const winnerBox = (spot, penguin) => {
    if (spot > 6) {
        document.getElementById("winner").innerHTML = `<h2>${penguin} got the fish!</h2>`;
        disableAllBtns();
    };
};

// Add event listeners for each button
// Each button should trigger its own movement function

tuxBtn.addEventListener("click", moveTux);
daisyBtn.addEventListener("click", moveDaisy);
rockyBtn.addEventListener("click", moveRocky);
