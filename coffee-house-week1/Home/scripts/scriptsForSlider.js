// Connecting components
let leftBtnSlider = document.querySelector('.leftBtnSlider');
let rigthBtnSlider = document.querySelector('.rigthBtnSlider');
let sliderLine = document.querySelector('.sliderLine');

let control1 = document.querySelector('.control1');
let control2 = document.querySelector('.control2');
let control3 = document.querySelector('.control3');
let controls = [control1, control2, control3];

let controlProgress1 = document.querySelector('.controlProgress1');
let controlProgress2 = document.querySelector('.controlProgress2');
let controlProgress3 = document.querySelector('.controlProgress3');
let controlProgresSS = [controlProgress1, controlProgress2, controlProgress3];

let sliderContainer = document.querySelector('.sliderContainer');

// Initialization

let positionSlider = 0;
let second = 0;
let widthImage = '480px';
let timerForSlider;
initWidthImage();

// Functions

function initWidthImage() {
    if (window.innerWidth < 768) {
        widthImage = '348px';
    }
    if (window.innerWidth >= 768) {
        widthImage = '480px';
    }
}

function clearControlProgressAll() {
    controlProgresSS.map((conProg) => {
        conProg.style.width = '0%';
    });
}

function activeProgress() {
    clearControlProgressAll();

    controlProgresSS.map((conProg, index) => {
        if (index === positionSlider) {
            conProg.style.width = '100%';
        }
    });
}

function nextSlide() {
    if (positionSlider === 2) {
        positionSlider = 0;
    } else {
        positionSlider += 1;
    };
    sliderLine.style.right = `calc(${widthImage}*${positionSlider})`;
    clearControlProgressAll();
    timerReset();
}

function previousSlide() {
    if (positionSlider === 0) {
        positionSlider = 2;
    } else {
        positionSlider -= 1;
    };
    sliderLine.style.right = `calc(${widthImage}*${positionSlider})`;
    clearControlProgressAll();
    timerReset();
}

function timerReset() {
    second = 0;
};

//Listeners
controls.map((control, index) => {
    control.addEventListener('click', () => {
        positionSlider = index;
        sliderLine.style.right = `calc(${widthImage}*${positionSlider})`;
        clearControlProgressAll();
        timerReset();
    });
});

rigthBtnSlider.addEventListener('click', () => {
    nextSlide();
});

leftBtnSlider.addEventListener('click', () => {
    previousSlide();
});

window.addEventListener('resize', () => {
    initWidthImage();
});


function fuForTimer() {
    second += 1;
    controlProgresSS.map((conProg, index) => {
        if (positionSlider === index) {
            conProg.style.width = `${second * 20 / 4}%`;
        }
    });
    if (second === 100 / 5) {
        second = 0;
        nextSlide();
    }
}

sliderContainer.addEventListener('mouseover', () => {
    clearInterval(timerForSlider);
});
sliderContainer.addEventListener('mouseout', () => {
    timerForSlider = setInterval(() => {
        fuForTimer();
    }, 250);
});



timerForSlider = setInterval(() => {
    fuForTimer();
}, 250);