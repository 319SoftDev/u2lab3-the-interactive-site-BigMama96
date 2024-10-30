//YOUR CODE HERE
// getRandomInt() - gets a random number between 1 and 100
const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1; // Returns a random integer between 1 and 100
};

// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
const is_dark = (hex) => {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate the brightness
    let brightness = (r * 0.299 + g * 0.587 + b * 0.114);
    return brightness < 128; // Returns true if dark
};

// Section 1: What's Your Favorite Color?
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    // the color that was selected
    const color = e.target.value;

    // Set the innerHTML based on the selected color
    if (color === "blue") {
        radioOutput.innerHTML = "You picked blue 💙";
    } else if (color === "green") {
        radioOutput.innerHTML = "You picked green 💚";
    } else if (color === "pink") {
        radioOutput.innerHTML = "You picked pink 💕";
    } else if (color === "black") {
        radioOutput.innerHTML = "You picked black 🖤";
    }
};

radioInput.addEventListener('change', displayColor);

// Section 2: Guess the Number (1 to 100)
const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
    // the inputted number (as an integer not as a string)
    const value = e.target.valueAsNumber;

    if (value < randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess higher!`;
    } else if (value > randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess lower!`;
    } else {
        numOutput.innerHTML = `Hurray! You got it! It's ${value}`;
    }

    // Select the input for easier re-entry
    e.target.select();
};

numInput.addEventListener('change', checkNumber);

// Section 3: Name All 7 Continents
const continents = ["asia", "africa", "north america", "south america", "antarctica", "europe", "australia"];
const continentInput = document.querySelector("#continent-input");
const srContinentAlert = document.querySelector("#sr-continent-alert");
let guessedContinents = [];

const checkContinent = (e) => {
    const input = e.target.value.toLowerCase();
    if (continents.includes(input)) {
        if (!guessedContinents.includes(input)) {
            guessedContinents.push(input);
            srContinentAlert.innerHTML = `Yes, ${input.charAt(0).toUpperCase() + input.slice(1)} is a continent. ${guessedContinents.length} out of 7`;
            document.querySelector(`#${input.replace(" ", "-")}`).classList.remove("hidden"); // Assuming images have corresponding IDs
        } else {
            srContinentAlert.innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1)} has already been selected.`;
        }
    } else {
        srContinentAlert.innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1)} is not a continent.`;
    }

    // Select the input for easier re-entry
    e.target.select();
};

continentInput.addEventListener('change', checkContinent);

// Section 4: Change Background Color
const colorInput = document.querySelector("#color-input");
const checkbox = document.querySelector("#robot-checkbox");
const submitButton = document.querySelector("#submit-button");
const body = document.body;
const srBackgroundAlert = document.querySelector("#sr-background-alert");

const changeBackground = (e) => {
    e.preventDefault();

    if (checkbox.checked) {
        const color = colorInput.value;
        body.style.background = color;
        srBackgroundAlert.innerHTML = `Background color changed to ${color}`;
    } else {
        srBackgroundAlert.innerHTML = "Background color not changed. Please, select 'I'm not a robot'.";
    }
};

submitButton.addEventListener('click', changeBackground);
    e.target.select();
};

continentInput.addEventListener('change', checkContinent);
