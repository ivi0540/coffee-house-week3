let burgerBtn = document.querySelector('#burgerBtn');
let iconBurger = document.querySelector('#iconBurger');
let burgerMenu = document.querySelector('.burgerMenu');
let isShowBurgerMenu = false;

function showBurgerMenu() {
    burgerMenu.style.display = 'block';

    let left = window.innerWidth;
    let timerShowBurger = setInterval(() => {
        left -= 15;
        burgerMenu.style.left = `${left}px`;
        if (left <= 0) {
            clearInterval(timerShowBurger);
            burgerMenu.style.left = '0px';
        }
    }, 25);

    isShowBurgerMenu = !isShowBurgerMenu;
    animIconBurgerClose();
}
function closeBurgerMenu() {
    let left = 0;
    let timerCloseBurger = setInterval(() => {
        left += 15;
        burgerMenu.style.left = `${left}px`;
        if (left >= window.innerWidth) {
            clearInterval(timerCloseBurger);
            burgerMenu.style.left = `${window.innerWidth}px`;
            burgerMenu.style.display = 'none';
        }
    }, 25);

    isShowBurgerMenu = !isShowBurgerMenu;
    animIconBurgerShow();
}
function animIconBurgerClose() {
    iconBurger.style.borderTop = 'none';
    iconBurger.style.borderBottom = 'none';
    iconBurger.style.width = '14px';
    iconBurger.style.height = '14px';
    iconBurger.style.backgroundImage = 'url(images/iconClose.png)';
}
function animIconBurgerShow() {
    iconBurger.style.borderTop = '2px solid var(--borderDark)';
    iconBurger.style.borderBottom = '2px solid var(--borderDark)';
    iconBurger.style.width = '16px';
    iconBurger.style.height = '9px';
    iconBurger.style.backgroundImage = 'none';
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
        burgerMenu.style.left = `${window.innerWidth}px`;
        burgerMenu.style.display = 'none';
    } else if ((window.innerWidth < 1440) && (isShowBurgerMenu)) {
        burgerMenu.style.left = '0px';
        burgerMenu.style.display = 'block';
    }
});

burgerBtn.addEventListener('click', () => {
    if (!isShowBurgerMenu) {
        showBurgerMenu();
    } else {
        closeBurgerMenu();
    }
});

burgerMenu.addEventListener('click', () => {
    closeBurgerMenu();
});

burgerMenu.style.left = `${window.innerWidth}px`;
burgerMenu.style.display = 'none';


