(function () {
  function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function currentPage() {
    return document.body.dataset.page || "";
  }

  function resolveQuantity(trigger) {
    const inputId = trigger.dataset.quantityInput;
    if (!inputId) {
      return 1;
    }
    const input = document.getElementById(inputId);
    if (!input) {
      return 1;
    }
    return Math.max(Number(input.value) || 1, 1);
  }

  async function addToCart(productId, quantity = 1, silent = false) {
    const products = await ProductStore.loadProducts();
    const product = products.find((item) => item.id === Number(productId));
    if (!product) {
      EcomApp.showToast("Product not found.", "danger");
      return;
    }

    const cart = EcomApp.getCart();
    const existing = cart.find((item) => item.id === product.id);
    const nextQuantity = Math.min(quantity, product.stock);

    if (existing) {
      existing.quantity = Math.min(existing.quantity + nextQuantity, product.stock);
    } else {
      cart.push({ id: product.id, quantity: nextQuantity });
    }

    EcomApp.saveCart(cart);
    if (!silent) {
      EcomApp.showToast(`${product.title} added to cart.`, "success");
    }
  }

  function toggleWishlist(productId) {
    const id = Number(productId);
    const wishlist = EcomApp.getWishlist();
    const exists = wishlist.includes(id);
    const nextList = exists ? wishlist.filter((item) => item !== id) : [...wishlist, id];
    EcomApp.saveWishlist(nextList);
    EcomApp.showToast(exists ? "Removed from wishlist." : "Saved to wishlist.", exists ? "warning" : "success");
  }

  function removeCartItem(productId) {
    const cart = EcomApp.getCart().filter((item) => item.id !== Number(productId));
    EcomApp.saveCart(cart);
    EcomApp.showToast("Item removed from cart.", "warning");
  }

  function updateCartQuantity(productId, nextQuantity) {
    const cart = EcomApp.getCart();
    const item = cart.find((entry) => entry.id === Number(productId));
    if (!item) {
      return;
    }

    item.quantity = Math.max(nextQuantity, 1);
    EcomApp.saveCart(cart);
  }

  async function renderCartPage() {
    const tableBody = qs("#cartItemsBody");
    if (!tableBody) {
      return;
    }

    const products = await ProductStore.loadProducts();
    const cart = EcomApp.getCart();
    const cartItems = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter(Boolean);

    if (!cartItems.length) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5">
            <div class="empty-state">
              <h3 class="h5 fw-bold mb-2">Your cart is empty</h3>
              <p class="text-muted-custom mb-3">Add products from the catalog to preview the cart and checkout flow.</p>
              <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
          </td>
        </tr>
      `;
      updateCartSummary([]);
      return;
    }

    tableBody.innerHTML = cartItems
      .map(
        (item) => `
          <tr>
            <td>
              <div class="d-flex align-items-center gap-3">
                <img src="${item.image}" alt="${item.title}" class="rounded-4" width="82" height="82" style="object-fit: cover;">
                <div>
                  <a class="fw-semibold d-block mb-1" href="product-details.html?id=${item.id}">${item.title}</a>
                  <span class="text-muted-custom small">${item.brand} • ${item.category}</span>
                </div>
              </div>
            </td>
            <td>${EcomApp.formatCurrency(item.price)}</td>
            <td>
              <div class="quantity-box">
                <button type="button" data-cart-qty="${item.id}" data-cart-action="decrease"><i class="bi bi-dash"></i></button>
                <input type="number" value="${item.quantity}" min="1" readonly>
                <button type="button" data-cart-qty="${item.id}" data-cart-action="increase"><i class="bi bi-plus"></i></button>
              </div>
            </td>
            <td>${EcomApp.formatCurrency(item.price * item.quantity)}</td>
            <td class="text-end">
              <button class="btn btn-sm btn-outline-danger" type="button" data-remove-cart="${item.id}">
                <i class="bi bi-trash3 me-1"></i>Remove
              </button>
            </td>
          </tr>
        `
      )
      .join("");

    updateCartSummary(cartItems);
  }

  function updateCartSummary(items) {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const savings = items.reduce((total, item) => total + (item.oldPrice - item.price) * item.quantity, 0);
    const shipping = items.length ? (subtotal >= 200 ? 0 : 18) : 0;
    const total = subtotal + shipping;

    const mappings = {
      cartSubtotal: subtotal,
      cartSavings: savings,
      cartShipping: shipping,
      cartTotal: total,
      checkoutSubtotal: subtotal,
      checkoutShipping: shipping,
      checkoutTotal: total,
    };

    Object.entries(mappings).forEach(([id, value]) => {
      const target = qs(`#${id}`);
      if (target) {
        target.textContent = value === 0 && id.toLowerCase().includes("shipping") ? "Free" : EcomApp.formatCurrency(value);
      }
    });

    const checkoutButton = qs("#checkoutButton");
    if (checkoutButton) {
      checkoutButton.classList.toggle("disabled", !items.length);
      checkoutButton.setAttribute("aria-disabled", String(!items.length));
    }
  }

  async function renderCheckoutPage() {
    const summary = qs("#checkoutSummary");
    if (!summary) {
      return;
    }

    const products = await ProductStore.loadProducts();
    const cart = EcomApp.getCart();
    const items = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter(Boolean);

    if (!items.length) {
      summary.innerHTML = `
        <div class="empty-state">
          <h3 class="h5 fw-bold mb-2">No items ready for checkout</h3>
          <p class="text-muted-custom mb-3">Add a few products first, then return here to preview the checkout interface.</p>
          <a href="products.html" class="btn btn-primary">Browse Products</a>
        </div>
      `;
      updateCartSummary([]);
      const placeOrder = qs("#placeOrderButton");
      if (placeOrder) {
        placeOrder.disabled = true;
      }
      return;
    }

    summary.innerHTML = items
      .map(
        (item) => `
          <div class="summary-row">
            <div class="d-flex align-items-center gap-3">
              <img src="${item.image}" alt="${item.title}" class="rounded-4" width="54" height="54" style="object-fit: cover;">
              <div>
                <strong class="d-block">${item.title}</strong>
                <span class="text-muted-custom small">Qty ${item.quantity}</span>
              </div>
            </div>
            <strong>${EcomApp.formatCurrency(item.price * item.quantity)}</strong>
          </div>
        `
      )
      .join("");

    updateCartSummary(items);
  }

  async function renderWishlistPage() {
    const grid = qs("#wishlistGrid");
    if (!grid) {
      return;
    }

    const products = await ProductStore.loadProducts();
    const wishlist = EcomApp.getWishlist();
    const items = products.filter((item) => wishlist.includes(item.id));

    const countLabel = qs("#wishlistCountLabel");
    if (countLabel) {
      countLabel.textContent = `${items.length} saved items`;
    }

    if (!items.length) {
      grid.innerHTML = `
        <div class="col-12">
          <div class="empty-state">
            <h3 class="h5 fw-bold mb-2">Your wishlist is still empty</h3>
            <p class="text-muted-custom mb-3">Save a few products to preview the wishlist experience and quick actions.</p>
            <a href="products.html" class="btn btn-primary">Explore Products</a>
          </div>
        </div>
      `;
      return;
    }

    grid.innerHTML = items
      .map(
        (product) => `
          <div class="col-sm-6 col-xl-4" data-reveal>
            <article class="product-card">
              <div class="product-thumb">
                <span class="discount-badge">-${product.discount}%</span>
                <img src="${product.image}" alt="${product.title}" style="height:260px; object-fit:cover;">
              </div>
              <div class="product-body">
                <div class="product-meta mb-2">
                  <span>${product.category}</span>
                  <span>${product.brand}</span>
                </div>
                <h3 class="product-title"><a href="product-details.html?id=${product.id}">${product.title}</a></h3>
                <div class="d-flex align-items-center justify-content-between gap-2 my-3">
                  <div class="review-stars">${EcomApp.renderStars(product.rating)}</div>
                  <small class="text-muted-custom">${product.reviewCount} reviews</small>
                </div>
                <div class="price-line mb-3">
                  <span class="current">${EcomApp.formatCurrency(product.price)}</span>
                  <span class="old">${EcomApp.formatCurrency(product.oldPrice)}</span>
                </div>
                <div class="d-flex gap-2">
                  <button class="btn btn-primary flex-grow-1" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
                  <button class="btn btn-outline-danger flex-grow-1" type="button" data-remove-wishlist="${product.id}">Remove</button>
                </div>
              </div>
            </article>
          </div>
        `
      )
      .join("");

    EcomApp.initRevealObserver();
  }

  function bindCheckoutForm() {
    const form = qs("#checkoutForm");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!EcomApp.getCart().length) {
        EcomApp.showToast("Add products before placing an order.", "warning");
        return;
      }
      EcomApp.showToast("Order placed successfully in demo mode.", "success");
      EcomApp.saveCart([]);
      window.setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 900);
    });
  }

  function bindCartCoupon() {
    const form = qs("#couponForm");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      EcomApp.showToast("Coupon applied visually. Pricing stays static in this demo.", "info");
    });
  }

  function bindInteractions() {
    document.body.addEventListener("click", async (event) => {
      const qtyButton = event.target.closest("[data-qty-target]");
      if (qtyButton) {
        const input = qs(`#${qtyButton.dataset.qtyTarget}`);
        if (!input) {
          return;
        }
        const min = Number(input.min || 1);
        const max = Number(input.max || 99);
        const current = Number(input.value || 1);
        const next = qtyButton.dataset.qtyAction === "increase" ? current + 1 : current - 1;
        input.value = String(Math.min(Math.max(next, min), max));
      }

      const addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        await addToCart(addButton.dataset.addToCart, resolveQuantity(addButton));
        if (currentPage() === "cart") {
          renderCartPage();
        }
        if (currentPage() === "checkout") {
          renderCheckoutPage();
        }
      }

      const buyButton = event.target.closest("[data-buy-now]");
      if (buyButton) {
        await addToCart(buyButton.dataset.buyNow, resolveQuantity(buyButton), true);
        window.location.href = "checkout.html";
      }

      const wishlistButton = event.target.closest("[data-wishlist-toggle]");
      if (wishlistButton) {
        toggleWishlist(wishlistButton.dataset.wishlistToggle);
        ProductStore.renderWishlistButtons();
        if (currentPage() === "wishlist") {
          renderWishlistPage();
        }
      }

      const removeCartButton = event.target.closest("[data-remove-cart]");
      if (removeCartButton) {
        removeCartItem(removeCartButton.dataset.removeCart);
        renderCartPage();
        renderCheckoutPage();
      }

      const cartQtyButton = event.target.closest("[data-cart-qty]");
      if (cartQtyButton) {
        const productId = Number(cartQtyButton.dataset.cartQty);
        const cartItem = EcomApp.getCart().find((item) => item.id === productId);
        if (!cartItem) {
          return;
        }
        const delta = cartQtyButton.dataset.cartAction === "increase" ? 1 : -1;
        updateCartQuantity(productId, cartItem.quantity + delta);
        renderCartPage();
        renderCheckoutPage();
      }

      const removeWishlistButton = event.target.closest("[data-remove-wishlist]");
      if (removeWishlistButton) {
        const nextList = EcomApp.getWishlist().filter((item) => item !== Number(removeWishlistButton.dataset.removeWishlist));
        EcomApp.saveWishlist(nextList);
        EcomApp.showToast("Wishlist item removed.", "warning");
        renderWishlistPage();
        ProductStore.renderWishlistButtons();
      }
    });
  }

  const CartUI = {
    init() {
      bindInteractions();
      bindCheckoutForm();
      bindCartCoupon();
      if (currentPage() === "cart") {
        renderCartPage();
      }
      if (currentPage() === "checkout") {
        renderCheckoutPage();
      }
      if (currentPage() === "wishlist") {
        renderWishlistPage();
      }
    },
  };

  window.CartUI = CartUI;

  document.addEventListener("DOMContentLoaded", () => {
    CartUI.init();
  });

  document.addEventListener("ecom:cart-updated", () => {
    if (currentPage() === "cart") {
      renderCartPage();
    }
    if (currentPage() === "checkout") {
      renderCheckoutPage();
    }
  });

  document.addEventListener("ecom:wishlist-updated", () => {
    if (currentPage() === "wishlist") {
      renderWishlistPage();
    }
  });
})();
