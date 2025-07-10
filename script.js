document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('The elements of the form do not exist.');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        alert('Please, enter a valid name and a valid age.');
    }
});

function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
        outputDiv.textContent = `Hello ${name}, you has ${age} years old 😎. `;
    } else {
        outputDiv.textContent = `No data stored.`;
    }
}

window.onload = displayData;

if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interaction Count', 0);
}

function uptadeInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`Interactions in this session: ${count}`);
}

document.getElementById('saveButton').addEventListener('click', uptadeInteractionCount);
document.getElementById('clearButton').addEventListener('click', uptadeInteractionCount);

document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});