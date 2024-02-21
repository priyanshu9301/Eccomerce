

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
    }
});
goBack.addEventListener("click", () => {
    hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
    toggleMenu();
})
closeMenu.addEventListener("click", () => {
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
})
function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }

    }
}


$(document).ready(function () {
    $('.my-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.my-slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,

        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


});
//   
// 
// 

const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue =
    document.querySelectorAll(".range-input input");
let priceGap = 500;

const priceInputvalue =
    document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }
        if (maxp > 10000) {
            alert("maximum price cannot be greater than 10000");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            }
            else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right =
                    `${100 - (maxp / value2) * 100}%`;
            }
        }
    });
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal =
                parseInt(rangeInputvalue[0].value);
            let maxVal =
                parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal
            if (diff < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left =
                    `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right =
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}
function toggleDropDown(event) {
    const parent = event.currentTarget.parentElement;
    const dropdown = parent.querySelector('.navDrop');
    const arrowUpDown = parent.querySelector('.arrowupdown');

    dropdown.classList.toggle('activee');
    arrowUpDown.classList.toggle('downsPg');
}

// Ensure that toggleDropDown() is called within an event listener
document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('.your-dropdown-button-selector');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', toggleDropDown);
    });
});
$(document).ready(function () {
    updateProductCount($('.card').length);
});

function updateSelectedItems() {
    const selectedItemDiv = document.getElementById('selectedItems');
    selectedItemDiv.innerHTML = '';

    const checkboxes = document.querySelectorAll('.navDrop input[type="checkbox"]');
    const selectedCategories = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.dataset.category);
        }
    });

    if (selectedCategories.length === 0) {
        // If no checkboxes are checked, set padding to zero and update product count
        selectedItemDiv.style.padding = '0';
        $('.card').removeClass('hidden');
        updateProductCount($('.card:not(.hidden)').length);
    } else {
        // Otherwise, filter cards based on selected categories and update product count
        filterProducts(selectedCategories);
        updateProductCount($('.card:not(.hidden)').length);
    }

    // Update the selected items display
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItemDiv.style.padding = ' 20px 10px';
            const listItem = document.createElement('li');
            listItem.style.background = 'rgb(0 46 73)';
            listItem.style.padding = '5px 10px';
            listItem.style.margin = '2px';
            listItem.style.fontSize = '13px';
            listItem.style.color = 'white';
            listItem.style.display = 'flex';
            listItem.style.flexWrap = 'wrap';
            const checkIcon = document.createElement('i');
            checkIcon.className = 'fa-solid fa-check';
            checkIcon.style.margin = '3px 5px 0px 0px';
            listItem.appendChild(checkIcon);
            listItem.appendChild(document.createTextNode(checkbox.parentNode.textContent.trim()));
            const xMarkIcon = document.createElement('i');
            xMarkIcon.className = 'fa-solid fa-xmark';
            xMarkIcon.style.margin = '3px 0px 0px 5px';
            xMarkIcon.addEventListener('click', () => {
                listItem.remove();
                checkbox.checked = false;
                updateSelectedItems();
            });
            listItem.appendChild(xMarkIcon);
            selectedItemDiv.appendChild(listItem);
        }
    });
}


// function addToWishlist() {
//     // Get the product information (you can replace this with your own logic)
//     var productName = "Product Name";
//     var productImage = "path/to/product/image.jpg";
//     var productPrice = "Product Price"; // Assuming you have the price stored somewhere

//     // Create a new element to represent the product in the wishlist dropdown
//     var wishlistItem = document.createElement("div");
//     wishlistItem.classList.add("wishlist-item");
//     wishlistItem.setAttribute("data-name", productName);

//     // Set the inner HTML of the wishlist item with the product information
//     wishlistItem.innerHTML = `
//       <img src="${productImage}" alt="${productName}" width="30" height="50">
//       <div class="wishlist-item-details">
//         <p>${productName}</p>
//         <p>${productPrice}</p>
//       </div>
//       <button class="remove-item" data-name="${productName}" onclick="removeFromWishlist(this)"><i class="fas fa-times"></i></button>
//     `;

//     // Append the wishlist item to the wishlist container
//     var wishlistContainer = document.getElementById("wishlistProduct");
//     wishlistContainer.appendChild(wishlistItem);
// }

// function removeFromWishlist(button) {
//     // Get the name of the product to remove
//     var productName = button.getAttribute("data-name");

//     // Find the corresponding wishlist item
//     var wishlistItem = button.closest('.wishlist-item');

//     // Remove the wishlist item from the container
//     wishlistItem.parentNode.removeChild(wishlistItem);
// }
function addToWishlist() {
    // Get the product information (you can replace this with your own logic)
    var productName = "Product Name";

    // Create a new element to represent the product in the wishlist dropdown
    var wishlistItem = document.createElement("div");
    wishlistItem.classList.add("wishlist-item");
    wishlistItem.setAttribute("data-name", productName);

    // Set the inner HTML of the wishlist item with the product information
    wishlistItem.innerHTML = `
      <p>${productName} added to wishlist!</p>
      <button class="remove-item" data-name="${productName}" onclick="removeFromWishlist(this)">Remove</button>
    `;

    // Append the wishlist item to the wishlist container
    var wishlistContainer = document.getElementById("wishlistProduct");
    wishlistContainer.appendChild(wishlistItem);

    // Show alert
    alert(productName + " added to wishlist!");
}

function removeFromWishlist(button) {
    // Get the name of the product to remove
    var productName = button.getAttribute("data-name");

    // Find the corresponding wishlist item
    var wishlistItem = button.closest('.wishlist-item');

    // Remove the wishlist item from the container
    wishlistItem.parentNode.removeChild(wishlistItem);

    // Show alert
    alert(productName + " removed from wishlist!");
}


function updateProductCount(count) {
    console.log("Total cards:", count);
    const productCountDiv = document.getElementById('getproductcount');
    productCountDiv.innerHTML = count + ' Products';
}


function clearAll(button) {
    var selectedItemDiv = document.getElementById('selectedItems');
    var productCountDiv = document.getElementById('getproductcount'); // Get the product count div

    // Clear the content of the selected items display
    selectedItemDiv.innerHTML = '';

    const dropdown = button.closest('.sidebarnav');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        selectedItemDiv.style.padding = '0';
    });

    // Clear the content of the product count display
    productCountDiv.innerHTML = '';

    updateSelectedItems();
}

function filterProducts() {
    var selectedCategories = [];
    var totalCount = 0;

    // Build the array of selected categories
    $('.navDrop input[type="checkbox"]:checked').each(function () {
        var category = $(this).data('category');
        selectedCategories.push(category);
    });

    console.log("Selected categories:", selectedCategories); // Debugging

    // Show all cards if no categories are selected
    if (selectedCategories.length === 0) {
        $('.card').removeClass('hidden');
        updateProductCount(totalCount); // Update product count display
        return totalCount; // Return total count
    }

    // Hide all cards by default
    $('.card').addClass('hidden');

    // Show cards that belong to selected categories
    selectedCategories.forEach(function (category) {
        $('.card[data-category="' + category + '"]').removeClass('hidden');
        // Increment the total count for each card shown
        totalCount++;
    });

    updateProductCount(totalCount); // Update product count display
    return totalCount; // Return total count
}

function updateProductCount(totalCount) {
    $('#getproductcount').text('Total Products: ' + totalCount);
}
//
//
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var togglerbtn = document.getElementById("sidenavtoggler");
    var toggleme = document.getElementById("toggleme");
    var toggleleft = document.getElementById("toggleleft");
    var mainContent = document.getElementById("bodyMainContent");
    var bodyMainContentleft = document.getElementById("bodyMainContentleft");
    sidebar.classList.toggle("hide");

    if (sidebar.classList.contains("hide")) {
        togglerbtn.classList.remove("toggleme");
        togglerbtn.classList.add("toggleleft");
        mainContent.classList.add("bodyMainContentleft");
        toggleleft.style.height = "30px"
    } else {
        togglerbtn.classList.add("toggleme");
        togglerbtn.classList.remove("toggleleft");
        mainContent.classList.remove("bodyMainContentleft");
    }

    // Toggle the visibility of toggleme based on the sidebar's visibility
    toggleme.classList.toggle("hide", !sidebar.classList.contains("hide"));
}

//

document.addEventListener('DOMContentLoaded', function () {
    // Initialize count
    let wishlistCount = 0;

    const addToWishlistButtons = document.querySelectorAll('.addtowishlistt');
    const wishlistCountElement = document.querySelector('#wishlistDropdown i.fa-heart');
    const wishlistContent = document.querySelector('.dropdown-content');

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const product = getProductDetails(button);
            addToWishlist(product);
        });
    });

    function addToWishlist(product) {
        const wishlistProduct = document.getElementById('wishlistProduct');
        const wishlistDropdown = document.getElementById('wishlistDropdown');

        wishlistProduct.innerHTML += `
            <div class="wishlist-item" data-name="${product.name}">
                <img src="${product.image}" alt="${product.name}" width="30" height="50">
                <div class="wishlist-item-details">
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                </div>
                <button class="remove-item" data-name="${product.name}"><i class="fas fa-times"></i></button>
            </div>
        `;

        wishlistCount++; // Increase count
        updateWishlistCount(); // Update count in the dropdown

        wishlistDropdown.style.display = 'block';

        // Add event listener to remove button
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation(); // Prevent event from propagating to the parent element
                const itemName = button.dataset.name;
                console.log('Removing item:', itemName); // Debugging statement
                removeItemFromWishlist(itemName);
            });
        });
    }

    function removeItemFromWishlist(itemName) {
        const wishlistItem = document.querySelector(`.wishlist-item[data-name="${itemName}"]`);
        if (wishlistItem) {
            wishlistItem.remove();
            wishlistCount--; // Decrease count
            updateWishlistCount(); // Update count in the dropdown
            console.log('Item removed successfully:', itemName); // Debugging statement
        } else {
            console.log('Item not found in wishlist:', itemName); // Debugging statement
        }
    }

    function updateWishlistCount() {
        wishlistCountElement.dataset.count = wishlistCount;
    }

    // Function to get product details from the card
    function getProductDetails(button) {
        const productCard = button.closest('.card');
        const productName = productCard.querySelector('.card-text').innerText;
        const productPrice = productCard.querySelector('.productPrice').innerText;
        const productImage = productCard.querySelector('img').src;

        return {
            name: productName,
            price: productPrice,
            image: productImage
        };
    }

    // Toggle the wishlist dropdown
    const wishlistDropdown = document.getElementById('wishlistDropdown');
    wishlistDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        wishlistContent.classList.toggle('show');
    });

    // Close the dropdown when clicking outside of it
    document.body.addEventListener('click', function (event) {
        if (!wishlistDropdown.contains(event.target) && !wishlistContent.contains(event.target)) {
            wishlistContent.classList.remove('show');
        }
    });
});


//
// 





