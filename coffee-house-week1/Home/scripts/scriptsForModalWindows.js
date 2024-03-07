let body = document.querySelector('body');
let bgBlack = document.querySelector('.bgBlack');

let modalWindow = document.querySelector('.modalWindow');
let titleCoffeeInMenu = document.querySelector('#titleCoffeeInMenu');
let descriptionInModalWindow = document.querySelector('#descriptionInModalWindow');
let imageForMenu = document.querySelector('.imageForMenu');
let priceTotal = document.querySelector('.priceTotal');

let sizeOfElem1 = document.querySelector('#sizeOfElem1');
let sizeOfElem2 = document.querySelector('#sizeOfElem2');
let sizeOfElem3 = document.querySelector('#sizeOfElem3');
let sizeOfElemAll = [sizeOfElem1, sizeOfElem2, sizeOfElem3];

let numBtnElem1 = document.querySelector('#numBtnElem1');
let numBtnElem2 = document.querySelector('#numBtnElem2');
let numBtnElem3 = document.querySelector('#numBtnElem3');
let numBtnElemAll = [numBtnElem1, numBtnElem2, numBtnElem3];

let btnSize1 = document.querySelector('.btnSize1');
let btnSize2 = document.querySelector('.btnSize2');
let btnSize3 = document.querySelector('.btnSize3');
let btnSizeAll = [btnSize1, btnSize2, btnSize3];

let btnOption1 = document.querySelector('.btnOption1');
let btnOption2 = document.querySelector('.btnOption2');
let btnOption3 = document.querySelector('.btnOption3');
let btnOptionAll = [btnOption1, btnOption2, btnOption3];

let bntClose = document.querySelector('.bntClose');
let priceOptionSize = 0.00;
let option1 = 0.00;
let option2 = 0.00;
let option3 = 0.00;

function orderСancellation() {
    titleCoffeeInMenu.innerHTML = '';
    descriptionInModalWindow.innerHTML = '';

    for (let i = 1; i <= imageForMenu.classList.length; i += 1) {
        imageForMenu.classList.remove(imageForMenu.classList[i]);
    }

    priceTotal.innerHTML = `\$0.00`;

    sizeOfElemAll.map((sizeOfElem) => {
        sizeOfElem.innerHTML = '';
    });

    numBtnElemAll.map((numBtnElem) => {
        numBtnElem.innerHTML = '';
    });
}

function calculateModalWindowPosition() {
    if (innerWidth < 1440) {
        modalWindow.style.left = 'auto';
    } else {
        modalWindow.style.left = `${(innerWidth / 2) - (modalWindow.offsetWidth / 2)}px`;
    }
    modalWindow.style.top = `${(innerHeight / 2) - (modalWindow.offsetHeight / 2) + window.scrollY}px`;
}

window.addEventListener('scroll', () => {
    calculateModalWindowPosition();
    qwerty();
});

function hideModalWindow() {
    orderСancellation();
    modalWindow.style.display = 'none';
    deactivateSizeOptions();
    btnSize1.classList.add('btnActiveState');
    priceOptionSize = 0.00;

    deactivateAdditionalOptions();
}
function showModalWindow() {
    modalWindow.style.display = 'flex';
    calculateModalWindowPosition();
}


function fillModalWindowData(date, category, id) {
    hideModalWindow();

    // console.log(date);
    // console.log(category);
    // console.log(id);

    titleCoffeeInMenu.innerHTML = date.name;
    descriptionInModalWindow.innerHTML = date.description;
    imageForMenu.classList.add(`image${category}${id}`);
    priceTotal.innerHTML = `\$${date.price}`;

    sizeOfElemAll.map((sizeOfElem, id) => {
        if (id === 0) {
            sizeOfElem.innerHTML = date.sizes.s.size;
        }
        if (id === 1) {
            sizeOfElem.innerHTML = date.sizes.m.size;
        }
        if (id === 2) {
            sizeOfElem.innerHTML = date.sizes.l.size;
        }
    });

    numBtnElemAll.map((numBtnElem, id) => {
        numBtnElem.innerHTML = date.additives[id].name;
    });
    showModalWindow();
};

bntClose.addEventListener('click', () => {
    hideModalWindow();
    removeBlackoutFromScreen();
    body.style.overflow = 'auto';
});

function deactivateSizeOptions() {
    btnSizeAll.map((btnSize) => {
        btnSize.classList.remove('btnActiveState');
    });
}
deactivateSizeOptions();

btnSizeAll.map((btnSize, id) => {
    btnSize.addEventListener('click', () => {
        deactivateSizeOptions();
        btnSize.classList.add('btnActiveState');

        if (id === 0) {
            priceOptionSize = dataFillModalWindow.sizes.s['add-price'];
        }
        if (id === 1) {
            priceOptionSize = dataFillModalWindow.sizes.m['add-price'];
        }
        if (id === 2) {
            priceOptionSize = dataFillModalWindow.sizes.l['add-price'];
        }
        totalCostCalculation();
        // console.log(priceOptionSize);
    });
});

function deactivateAdditionalOptions() {
    btnOptionAll.map((btnOption) => {
        btnOption.classList.remove('btnActiveState');
    });
};

btnOptionAll.map((btnOption, id) => {
    btnOption.addEventListener('click', () => {
        if (id === 0) {
            if (option1 === 0) {
                option1 = dataFillModalWindow.additives[id]['add-price'];
            } else {
                option1 = 0.00;
            }
        }
        if (id === 1) {
            if (option2 === 0) {
                option2 = dataFillModalWindow.additives[id]['add-price'];
            } else {
                option2 = 0.00;
            }
        }
        if (id === 2) {
            if (option3 === 0) {
                option3 = dataFillModalWindow.additives[id]['add-price'];
            } else {
                option3 = 0.00;
            }
        }
        btnOption.classList.toggle('btnActiveState');

        totalCostCalculation();
    });
});

function totalCostCalculation() {
    console.log('dataFillModalWindow.price - ', dataFillModalWindow.price);
    console.log('priceOptionSize - ', priceOptionSize);
    console.log('option1 - ', option1);
    console.log('option2 - ', option2);
    console.log('option3 - ', option3);
    priceTotal.innerHTML =
        `\$${(Number(dataFillModalWindow.price)
            + Number(priceOptionSize)
            + Number(option1)
            + Number(option2)
            + Number(option3)).toFixed(2)}`;
};


function qwerty() {
    bgBlack.style.width = `${innerWidth}px`;
    bgBlack.style.height = `${innerHeight}px`;

    bgBlack.style.top = `${window.scrollY}px`;
};

function dimScreen() {
    bgBlack.style.display = 'block';
}
function removeBlackoutFromScreen() {
    bgBlack.style.display = 'none';
}

removeBlackoutFromScreen();




