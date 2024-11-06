//YOUR CODE HERE
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


// Part 3: Name All 7 Continents
const textInput = document.getElementById('text-input');
const continentAlert = document.getElementById('sr-continent-alert');
const continents = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia', 'Antarctica'];
let enteredContinents = [];

textInput.addEventListener('input', () => {
  const userInput = textInput.value.trim().toLowerCase();
  const userContinents = userInput.split(',').map(item => item.trim().toLowerCase());

  // Check for Canada
  if (userContinents.includes('canada')) {
    continentAlert.textContent = 'Canada is not a continent.';
    return;
  }

  // Track entered continents and provide feedback
  userContinents.forEach(continent => {
    if (continents.map(c => c.toLowerCase()).includes(continent)) {
      if (!enteredContinents.includes(continent)) {
        enteredContinents.push(continent);
        const count = enteredContinents.length;
        continentAlert.textContent = `Yes! ${continent.charAt(0).toUpperCase() + continent.slice(1)} is a continent. ${count} out of 7`;
      } else {
        continentAlert.textContent = `${continent.charAt(0).toUpperCase() + continent.slice(1)} has already been selected.`;
      }
    } else {
      continentAlert.textContent = `${continent.charAt(0).toUpperCase() + continent.slice(1)} is not a continent.`;
    }
  });

  // Check if all continents have been named
  if (enteredContinents.length === continents.length) {
    continentAlert.textContent = 'Congratulations! You named all 7 continents.';
  }
});

// Section 4: Change Background Color

const colorInput = document.getElementById('color');
const checkbox = document.getElementById('human');
const submitButton = document.getElementById('submit');
const srOutput = document.getElementById('sr-output');

submitButton.addEventListener('click', changeBackground);

function changeBackground(e) {
    e.preventDefault(); // Prevent the page from reloading

    if (checkbox.checked) {
        const selectedColor = colorInput.value;
        document.body.style.background = selectedColor; // Change background color
        srOutput.textContent = `Background color changed to ${selectedColor}`; // Update output
    } else {
        srOutput.textContent = "Background color not changed. Please, select 'I'm not a robot'."; // Update output
    }
}
};

continentInput.addEventListener('change', checkContinent);
