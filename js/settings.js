const value = document.getElementById('fontValue');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const previewText = document.getElementById('previewText');

const STEP = 0.1;
const MAX_STEPS = 4;
const MIN_STEPS = -3;

let scale = parseFloat(localStorage.getItem('hymnScale')) || 1;
let currentStep = parseInt(localStorage.getItem('hymnStep')) || 0;

function updateUI() {
    value.innerText = `${Math.round(scale * 100)}%`;

    localStorage.setItem('hymnScale', scale);
    localStorage.setItem('hymnStep', currentStep);

    document.documentElement.style.setProperty('--hymn-scale', scale);

    inc.disabled = currentStep >= MAX_STEPS;
    dec.disabled = currentStep <= MIN_STEPS;
}

inc.onclick = () => {
    if (currentStep < MAX_STEPS) {
        scale += STEP;
        currentStep++;
        updateUI();
    }
};

dec.onclick = () => {
    if (currentStep > MIN_STEPS) {
        scale -= STEP;
        currentStep--;
        updateUI();
    }
};

updateUI();