const sortingForm = document.getElementById('sortingForm');
const stepsDiv = document.getElementById('steps');

sortingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const arrayInput = document.getElementById('array');
    const sortMethodSelect = document.getElementById('sortMethod');

    const array = arrayInput.value.split(',').map(Number);
    const sortMethod = sortMethodSelect.value;

    const response = await fetch('/sort', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ array, sortMethod }),
    });

    if (response.ok) {
        const data = await response.json();
        displaySteps(data.steps);
    } else {
        stepsDiv.textContent = 'Error sorting array.';
    }
});

function displaySteps(steps) {
    stepsDiv.textContent = '';

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.textContent = `Step ${index + 1}: ${step}`;
        stepsDiv.appendChild(stepDiv);
    });
}
