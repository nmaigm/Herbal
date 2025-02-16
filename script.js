document.addEventListener("DOMContentLoaded", function () {
    const menuData = {
        "en": {
            "categories": [
                {
                    "name": "Flowers",
                    "subcategories": [
                        {
                            "name": "Roses",
                            "subcategories": [
                                {
                                    "name": "Red Rose",
                                    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Rose_Red_Pink_Orange_Yellow_White_Blue_Purple_24HD.jpg",
                                    "description": "The red rose symbolizes love and romance."
                                },
                                {
                                    "name": "White Rose",
                                    "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/White_Rose.JPG",
                                    "description": "The white rose represents purity."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "ar": {
            "categories": [
                {
                    "name": "الزهور",
                    "subcategories": [
                        {
                            "name": "الورود",
                            "subcategories": [
                                {
                                    "name": "وردة حمراء",
                                    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Rose_Red_Pink_Orange_Yellow_White_Blue_Purple_24HD.jpg",
                                    "description": "الوردة الحمراء ترمز إلى الحب والرومانسية."
                                },
                                {
                                    "name": "وردة بيضاء",
                                    "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/White_Rose.JPG",
                                    "description": "الوردة البيضاء تمثل النقاء."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    const menu = document.getElementById("menu");
    const content = document.getElementById("content");
    let currentLang = "en";

    function buildMenu(language, parentElement, items) {
        parentElement.innerHTML = ""; // Clear previous menu

        items.forEach(item => {
            let menuItem = document.createElement("li");
            let menuLink = document.createElement("span");
            menuLink.textContent = item.name;
            menuItem.appendChild(menuLink);

            if (item.subcategories) {
                let subMenu = document.createElement("ul");
                buildMenu(language, subMenu, item.subcategories);
                menuItem.appendChild(subMenu);
            } else if (item.image && item.description) {
                menuLink.addEventListener("click", function () {
                    loadPage(item);
                });
            }

            parentElement.appendChild(menuItem);
        });
    }

    function loadPage(page) {
        content.innerHTML = `
            <h1>${page.name}</h1>
            <img src="${page.image}" alt="${page.name}">
            <p>${page.description}</p>
        `;
    }

    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Language Switcher
    document.getElementById("lang-en").addEventListener("click", function () {
        currentLang = "en";
        buildMenu(currentLang, menu, menuData[currentLang].categories);
    });

    document.getElementById("lang-ar").addEventListener("click", function () {
        currentLang = "ar";
        buildMenu(currentLang, menu, menuData[currentLang].categories);
    });

    // Initialize menu
    buildMenu(currentLang, menu, menuData[currentLang].categories);
});
