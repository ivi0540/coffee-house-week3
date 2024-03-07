// Connecting components
let itemCoffee = document.querySelector('.itemCoffee');
let itemTea = document.querySelector('.itemTea');
let itemDessert = document.querySelector('.itemDessert');
let menuCategories = [itemCoffee, itemTea, itemDessert];

let titleCoffee = document.querySelector('.titleCoffee');
let titleTea = document.querySelector('.titleTea');
let titleDessert = document.querySelector('.titleDessert');
let titlesCategories = [titleCoffee, titleTea, titleDessert];

let scrollButton = document.querySelector('.scrollButton');
let currentCategory = 'Coffee';
let dataFillModalWindow = {};
const dataBaseForMenu = [
    {
        "name": "Irish coffee",
        "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Kahlua coffee",
        "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Honey raf",
        "description": "Espresso with frothed milk, cream and aromatic honey",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Ice cappuccino",
        "description": "Cappuccino with soft thick foam in summer version with ice",
        "price": "5.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Espresso",
        "description": "Classic black coffee",
        "price": "4.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Latte",
        "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Latte macchiato",
        "description": "Espresso with frothed milk and chocolate",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Coffee with cognac",
        "description": "Fragrant black coffee with cognac and whipped cream",
        "price": "6.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Moroccan",
        "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        "price": "4.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Ginger",
        "description": "Original black tea with fresh ginger, lemon and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Cranberry",
        "description": "Invigorating black tea with cranberry and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Sea buckthorn",
        "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        "price": "5.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Marble cheesecake",
        "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        "price": "3.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Red velvet",
        "description": "Layer cake with cream cheese frosting",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Cheesecakes",
        "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Creme brulee",
        "description": "Delicate creamy dessert in a caramel basket with wild berries",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Pancakes",
        "description": "Tender pancakes with strawberry jam and fresh strawberries",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Honey cake",
        "description": "Classic honey cake with delicate custard",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Chocolate cake",
        "description": "Cake with hot chocolate filling and nuts with dried apricots",
        "price": "5.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Black forest",
        "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        "price": "6.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    }
];

// Initialization
updateMenu(currentCategory, checkScreen());

menuCategories.map((category, categoryId) => {
    category.addEventListener('click', () => {
        noActiveAllCategories();
        category.classList.add('actionCoffee');
        titlesCategories.map((title, titleId) => {
            if (titleId === categoryId) {
                currentCategory = title.innerHTML.trim();
                title.classList.add('actionTitleCoffee');
                updateMenu(currentCategory, checkScreen());
            }
        });
    });
});

function noActiveAllCategories() {
    function noActiveAllTitlesForCategories() {
        titlesCategories.map((title) => {
            title.classList.remove('actionTitleCoffee');
        });
    };
    noActiveAllTitlesForCategories();
    menuCategories.map((category) => {
        category.classList.remove('actionCoffee');
    });
}

function searchCategoryInDatabase(category) {
    return dataBaseForMenu.filter((elemMenu) => {
        if (elemMenu.category === category.toLowerCase()) {
            return true;
        }
    })
}

function updateMenu(categoryName, fullDisplay = true) {
    dataBase = searchCategoryInDatabase(categoryName);

    //Если Кол-во товаров больше 4 то нужно отобразить кнопку обновления
    if (dataBase.length < 8) {
        scrollButton.style.display = 'none';
    } else {
        scrollButton.style.display = 'flex';
    }

    //Убрать последние 4 товара если разрешение меньшн 1440
    if ((!fullDisplay) && (dataBase.length > 4)) {
        for (let i = 0; i <= 3; i += 1) {
            dataBase.pop();
        };
    }

    let coffeeMemu = document.querySelector('.coffeeMemu');
    coffeeMemu.remove();

    let newCoffeeMenu = document.createElement('div');
    newCoffeeMenu.classList.add('coffeeMemu');

    //Изменение размеров сетки если кол-во товатор меньше 8
    if (checkScreen() && (dataBase.length < 8)) {
        newCoffeeMenu.style.gridTemplateRows = 'repeat(1, 506px)';
    }

    dataBase.map((elemMenu, index) => {
        let blockMenuCoffee = document.createElement('div');
        blockMenuCoffee.classList.add('blockMenuCoffee');
        newCoffeeMenu.append(blockMenuCoffee);

        blockMenuCoffee.addEventListener('click', () => {
            dataFillModalWindow = elemMenu;
            fillModalWindowData(dataFillModalWindow, categoryName, index + 1);
            body.style.overflow = 'hidden';
            dimScreen();
        });

        let imageCoffee = document.createElement('div');
        imageCoffee.classList.add('imageCoffee');
        imageCoffee.classList.add(`image${categoryName}${index + 1}`);
        blockMenuCoffee.append(imageCoffee);

        let deliciousContainer = document.createElement('div');
        deliciousContainer.classList.add('deliciousContainer');
        blockMenuCoffee.append(deliciousContainer);

        let titleCoffeeInMenu = document.createElement('h2');
        titleCoffeeInMenu.classList.add('titleCoffeeInMenu');
        titleCoffeeInMenu.innerHTML = elemMenu.name;
        deliciousContainer.append(titleCoffeeInMenu);

        let descriptionCoffeeInMenu = document.createElement('div');
        descriptionCoffeeInMenu.classList.add('descriptionCoffeeInMenu');
        descriptionCoffeeInMenu.innerHTML = elemMenu.description;
        deliciousContainer.append(descriptionCoffeeInMenu);

        let priceCoffee = document.createElement('div');
        priceCoffee.classList.add('priceCoffee');
        priceCoffee.innerHTML = `\$${elemMenu.price}`;
        deliciousContainer.append(priceCoffee);
    });
    scrollButton.before(newCoffeeMenu);
}

scrollButton.addEventListener('click', () => {
    updateMenu(currentCategory, true);
    scrollButton.style.display = 'none'
});

function checkScreen() {
    if (innerWidth < 1440) {
        return false;
    }
    if (innerWidth >= 1440) {
        return true;
    }
}

window.addEventListener('resize', () => {
    updateMenu(currentCategory, checkScreen());
    calculateModalWindowPosition();

    qwerty();
});