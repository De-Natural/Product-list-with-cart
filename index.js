document.addEventListener("DOMContentLoaded", () => {
  const mediaBox = document.querySelector("main");
  const pictureDisplay = document.querySelector(".picture img");
  const cartDisplay = document.querySelector("figure .part");
  const confirmOrderButton = document.querySelector("button.confirm-order");
  const startNewOrderButton = document.querySelector(".cover button");
  const coverDiv = document.querySelector(".cover");

  const arrays = [
    {
      bg: "/assets/images/image-baklava-thumbnail.jpg",
      id: 1,
      name: "Waffle with Berries",
      categories: "Waffle",
      price: 5.5,
    },
    {
      bg: "/assets/images/image-brownie-desktop.jpg",
      id: 2,
      name: "Chocolate Tea",
      categories: "Coco",
      price: 5.5,
    },
    {
      bg: "/assets/images/image-cake-desktop.jpg",
      id: 3,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.5,
    },
    {
      bg: "/assets/images/image-waffle-desktop.jpg",
      id: 4,
      name: "chocolate cookies",
      categories: "cookies",
      price: 7.5,
    },
    {
      bg: "/assets/images/image-creme-brulee-desktop.jpg",
      id: 5,
      name: "Milky bugar",
      categories: "bugar",
      price: 5.9,
    },
    {
      bg: "/assets/images/image-macaron-desktop.jpg",
      id: 6,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.10,
    },
    {
      bg: "/assets/images/image-meringue-desktop.jpg",
      id: 7,
      name: "Milk Candle",
      categories: "Milk",
      price: 9.5,
    },
    {
      bg: "/assets/images/image-panna-cotta-desktop.jpg",
      id: 8,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.50,
    },
    {
      bg: "/assets/images/image-tiramisu-desktop.jpg",
      id: 9,
      name: "Milk Candle",
      categories: "Milk",
      price: 33.5,
    },
    {
      bg: "/assets/images/image-tiramisu-tablet.jpg",
      id: 10,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.90,
    },
    {
      bg: "/assets/images/image-tiramisu-tablet.jpg",
      id: 10,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.90,
    },
    {
      bg: "/assets/images/image-waffle-desktop.jpg",
      id: 11,
      name: "Milk Candle",
      categories: "Milk",
      price: 5.43,
    },
    {
      bg: "/assets/images/image-baklava-desktop.jpg",
      id: 12,
      name: "Milk Candle",
      categories: "Milk",
      price: 12.5,
    },
    {
      bg: "/assets/images/image-baklava-desktop.jpg",
      id: 12,
      name: "Milk Candle",
      categories: "Milk",
      price: 12.5,
    },
    {
      bg: "/assets/images/image-baklava-desktop.jpg",
      id: 12,
      name: "Milk Candle",
      categories: "Milk",
      price: 12.5,
    },
  ];

  let cartItems = {}; // Object to track items in the cart by ID

  // Render items in the main section
  mediaBox.innerHTML = arrays
    .map(
      (item) => `
    <section>
      <picture>
        <img src="${item.bg}" alt="${item.name}" data-id="${item.id}">
      </picture>
      <i>${item.categories}</i>
      <p>${item.name}</p>
      <p>$${item.price.toFixed(2)}</p>
      <div class="contain">
        <div class="btn">
          <div class="cart">
            <img src="/assets/images/icon-add-to-cart.svg" alt="" data-id="${item.id}">
          </div>
          <span>Add to Cart</span>
        </div>
        <div class="btn_2">
          <img src="/assets/images/icon-decrement-quantity.svg" alt="" data-id="${item.id}" class="decrement">
          <img src="/assets/images/icon-increment-quantity.svg" alt="" data-id="${item.id}" class="increment">
        </div>
      </div>
    </section>`
    )
    .join("");
    function updateCart() {
      console.log("Cart updated!");

      // Function to handle adding an article
      function handleSectionClick(sectionIndex, item) {
        const figureDiv = document.querySelector("figure");
        const referenceElement = figureDiv.querySelector(".part");

        if (!figureDiv || !referenceElement) {
          console.error("Figure div or reference element not found in the DOM!");
          return;
        }

        const article = document.createElement("article");
        article.dataset.id = sectionIndex;
        article.innerHTML = `
          <p>${item.name}</p>
          <p><span>${item.quantity}x</span> @ $${item.price.toFixed(2)}</p>
          <span>$${(item.quantity * item.price).toFixed(2)}</span>
          <i class="fa fa-times-circle-o disappear" aria-hidden="true"></i>
        `;

        // Check if article already exists
        const existingArticle = figureDiv.querySelector(`article[data-id="${sectionIndex}"]`);
        if (!existingArticle) {
          figureDiv.insertBefore(article, referenceElement);
          console.log("Article inserted successfully!");
        } else {
          console.log("Article already exists, not inserting.");
        }
      }

      // Event delegation for removing articles
      document.querySelector("figure").addEventListener("click", (e) => {
        if (e.target.classList.contains("fa-times-circle-o")) {
          const articleElement = e.target.closest("article");
          if (articleElement) {
            articleElement.remove();
            console.log("Article removed successfully!");
          }
        }
      });

      // Example to trigger the addition of articles
      document.querySelectorAll("section").forEach((section, index) => {
        section.addEventListener("click", () => {
          const item = {
            name: "item" + (index + 1),
            quantity: 1,
            price: 6.8,
          };
          handleSectionClick(index, item);
        });
      });
    }
  
      // Select elements
      const incrementButton = document.querySelector('.increment');
      const decrementButton = document.querySelector('.decrement');
      const quantitySpan = document.getElementById('quantity');

      // Initial quantity value
      let quantity = 1;

      // Function to update the quantity display
      const updateQuantityDisplay = () => {
        quantitySpan.textContent = `${quantity}x`;
      };

      // Event listeners
      incrementButton.addEventListener('click', () => {
        quantity += 1;
        updateQuantityDisplay();
      });

      decrementButton.addEventListener('click', () => {
        if (quantity > 1) {
          quantity -= 1;
          updateQuantityDisplay();
        }
      });


  // Handle click on <picture> to update the displayed image
  document.querySelectorAll("picture img").forEach((img) => {
    img.addEventListener("click", () => {
      const itemId = parseInt(img.dataset.id);
      const selectedItem = arrays.find((item) => item.id === itemId);

      if (selectedItem) {
        pictureDisplay.src = selectedItem.bg;
        if (!cartItems[itemId]) {
          cartItems[itemId] = { ...selectedItem, quantity: 1 };
        } else {
          cartItems[itemId].quantity++;
        }
        updateCart();
      }
    });
  });

  document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("click", () => {
      const imgSrc = section.querySelector("picture img").src;
      const category = section.querySelector("i").textContent;
      const name = section.querySelectorAll("p")[0].textContent;
      const price = section.querySelectorAll("p")[1].textContent;
  
      const targetSection = document.querySelector(".section");
      if (targetSection) {
        // Update the image
        const targetImg = targetSection.querySelector(".picture img");
        if (targetImg) targetImg.src = imgSrc;
  
        // Update the span (category)
        const targetSpan = targetSection.querySelector("span");
        if (targetSpan) targetSpan.textContent = category;
  
        // Update the first <p> (name)
        const targetName = targetSection.querySelectorAll("p")[0];
        if (targetName) targetName.textContent = name;
  
        // Update the second <p> (price)
        const targetPrice = targetSection.querySelectorAll("p")[1];
        if (targetPrice) targetPrice.textContent = price;
      }
    });
  });

  // updating the position of the section
  const sections = document.querySelectorAll("main > section");
  console.log(sections);
  const cartPositionSpan = document.querySelector(".card figure p span");

  // Add click event listener to each section
  sections.forEach((section, index) => {
    section.addEventListener("click", () => {
      cartPositionSpan.innerText = index + 1;
    });
  });
  
  
  // Handle "add to cart" functionality
  document.querySelectorAll(".cart img").forEach((cartIcon) => {
    cartIcon.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const item = arrays.find((item) => item.id === id);

      if (!cartItems[id]) {
        cartItems[id] = { ...item, quantity: 1 };
      } else {
        cartItems[id].quantity++;
      }

      updateCart();
    });
  });

  // Handle increment and decrement functionality
  // document.addEventListener("click", (event) => {
  //   const itemId = parseInt(event.target.dataset.id);
  //   if (!itemId || !cartItems[itemId]) return;

  //   if (event.target.classList.contains("increment")) {
  //     cartItems[itemId].quantity++;
  //   }

  //   if (event.target.classList.contains("decrement")) {
  //     cartItems[itemId].quantity--;
  //     if (cartItems[itemId].quantity <= 0) {
  //       delete cartItems[itemId];
  //     }
  //   }

  //   updateCart();
  // });

  document.addEventListener("click", (event) => {
      const itemId = parseInt(event.target.dataset.id); // Get the item ID from the data-id attribute
      if (!itemId || !cartItems[itemId]) return; // If no valid item ID, do nothing
    
      if (event.target.classList.contains("increment")) {
        // Increment quantity
        cartItems[itemId].quantity++;
      }
    
      if (event.target.classList.contains("decrement")) {
        // Decrement quantity, but not below 1
        if (cartItems[itemId].quantity > 1) {
          cartItems[itemId].quantity--;
        } else {
          // Optionally, you can remove the item from the cart when quantity is 0
          delete cartItems[itemId];
        }
      }
    
      // Update the quantity display in the respective span
      const parentSection = event.target.closest("section");
      const quantitySpan = parentSection.querySelector(".btn span");
      if (quantitySpan) {
        quantitySpan.textContent = `${cartItems[itemId]?.quantity || 0}x`;
      }
    
      updateCart();
    })

  
  // Confirm order functionality
  confirmOrderButton.addEventListener("click", () => {
    coverDiv.style.display = "block";
    const figureDiv = coverDiv.querySelector(".figure");
  
    if (!figureDiv) {
      console.error("figureDiv not found in the DOM!");
      return;
    }
  
    figureDiv.innerHTML = "";
  
    // Confirmation message
    const goodDiv = document.createElement("div");
    goodDiv.className = "good";
    goodDiv.style.backgroundImage = "url('/assets/images/mark.png')";
    goodDiv.style.backgroundSize = "contain";
    goodDiv.style.backgroundPosition = "center"
      
    const confirmationHeader = document.createElement("h2");
    confirmationHeader.textContent = "Order Confirmed";
  
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "We hope you enjoy your food";
  
    figureDiv.appendChild(goodDiv);
    figureDiv.appendChild(confirmationHeader);
    figureDiv.appendChild(confirmationMessage);
  
    let totalCost = 0;
  
    Object.values(cartItems).forEach((item) => {
      const article = document.createElement("div");
      article.className = "article";
  
      const itemTotal = item.quantity * item.price;
      totalCost += itemTotal;
  
      article.innerHTML = `
        <div class="bg"><img src="${item.bg}" alt=""></div>
        <div class="pic">
          <p>${item.name}</p>
          <p style="font-size: 12px;">${item.quantity}x @ $${item.price.toFixed(2)}</p>
        </div>
        <span>$${itemTotal.toFixed(2)}</span>
      `;
  
      figureDiv.appendChild(article);
    });
  
    // Total cost part
    const partDiv = document.createElement("div");
    partDiv.className = "part";
    partDiv.innerHTML = `
      <i>Order Total</i>
      <div class="orders">$${totalCost.toFixed(2)}</div>
    `;
  
    console.log("Appending partDiv:", partDiv);
    figureDiv.appendChild(partDiv);
  
    // New order button
    const newOrderButton = document.createElement("button");
    newOrderButton.textContent = "Start New Order";
    newOrderButton.addEventListener("click", () => {
      coverDiv.style.display = "none";
      cartItems = {};
      updateCart();
    });
  
    figureDiv.appendChild(newOrderButton);
  });
  
  
  
  

  // Start new order functionality
  startNewOrderButton.addEventListener("click", () => {
    coverDiv.style.display = "none";
    cartItems = {};
    updateCart(); 
  });
});