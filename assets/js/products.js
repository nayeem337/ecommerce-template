(function () {
  const fallbackProducts = [
    {
      id: 1,
      title: "Nova X Pro Wireless Headphones",
      price: 129,
      oldPrice: 169,
      discount: 24,
      rating: 4.8,
      category: "Electronics",
      brand: "NovaTech",
      stock: 18,
      image: "https://picsum.photos/seed/headphone-1/640/640",
      gallery: [
        "https://picsum.photos/seed/headphone-1/640/640",
        "https://picsum.photos/seed/headphone-2/640/640",
        "https://picsum.photos/seed/headphone-3/640/640",
      ],
      reviewCount: 186,
      badge: "Best Seller",
      description:
        "Over-ear wireless headphones with active noise cancellation, spatial audio, and a battery that comfortably handles daily commutes, calls, and late-night playlists.",
      shipping: "Free 2-day shipping on orders over $75.",
    },
    {
      id: 2,
      title: "Lumina Smart AMOLED Watch",
      price: 189,
      oldPrice: 229,
      discount: 17,
      rating: 4.7,
      category: "Electronics",
      brand: "Lumina",
      stock: 24,
      image: "https://picsum.photos/seed/watch-1/640/640",
      gallery: [
        "https://picsum.photos/seed/watch-1/640/640",
        "https://picsum.photos/seed/watch-2/640/640",
        "https://picsum.photos/seed/watch-3/640/640",
      ],
      reviewCount: 142,
      badge: "New",
      description:
        "A sharp AMOLED smartwatch with workout tracking, customizable faces, and a lightweight build designed for everyday wear.",
      shipping: "Ships next business day with insured delivery.",
    },
    {
      id: 3,
      title: "UrbanWeave Classic Denim Jacket",
      price: 72,
      oldPrice: 96,
      discount: 25,
      rating: 4.5,
      category: "Fashion",
      brand: "UrbanWeave",
      stock: 32,
      image: "https://picsum.photos/seed/jacket-1/640/640",
      gallery: [
        "https://picsum.photos/seed/jacket-1/640/640",
        "https://picsum.photos/seed/jacket-2/640/640",
        "https://picsum.photos/seed/jacket-3/640/640",
      ],
      reviewCount: 77,
      badge: "Trending",
      description:
        "A structured denim jacket with a clean premium wash, tailored silhouette, and versatile styling that works across seasons.",
      shipping: "Free returns within 14 days.",
    },
    {
      id: 4,
      title: "PeakFit Compression Training Set",
      price: 64,
      oldPrice: 84,
      discount: 24,
      rating: 4.6,
      category: "Sports",
      brand: "PeakFit",
      stock: 27,
      image: "https://picsum.photos/seed/fitness-1/640/640",
      gallery: [
        "https://picsum.photos/seed/fitness-1/640/640",
        "https://picsum.photos/seed/fitness-2/640/640",
        "https://picsum.photos/seed/fitness-3/640/640",
      ],
      reviewCount: 55,
      badge: "Flash Deal",
      description:
        "Quick-dry compression wear built for training sessions, recovery days, and all-day comfort with a supportive stretch feel.",
      shipping: "Delivery in 3 to 5 business days.",
    },
    {
      id: 5,
      title: "CasaVerde Minimal Ceramic Lamp",
      price: 88,
      oldPrice: 116,
      discount: 24,
      rating: 4.4,
      category: "Home Decor",
      brand: "CasaVerde",
      stock: 14,
      image: "https://picsum.photos/seed/lamp-1/640/640",
      gallery: [
        "https://picsum.photos/seed/lamp-1/640/640",
        "https://picsum.photos/seed/lamp-2/640/640",
        "https://picsum.photos/seed/lamp-3/640/640",
      ],
      reviewCount: 43,
      badge: "Editor Pick",
      description:
        "A softly textured ceramic lamp with a linen shade and warm ambient glow that elevates desks, nightstands, and entry consoles.",
      shipping: "Packed with extra protection for fragile delivery.",
    },
    {
      id: 6,
      title: "PureAura Hydrating Skin Duo",
      price: 38,
      oldPrice: 52,
      discount: 27,
      rating: 4.9,
      category: "Beauty",
      brand: "PureAura",
      stock: 41,
      image: "https://picsum.photos/seed/beauty-1/640/640",
      gallery: [
        "https://picsum.photos/seed/beauty-1/640/640",
        "https://picsum.photos/seed/beauty-2/640/640",
        "https://picsum.photos/seed/beauty-3/640/640",
      ],
      reviewCount: 231,
      badge: "Top Rated",
      description:
        "A serum and moisturizer pairing that helps restore glow, support the skin barrier, and keep hydration balanced through the day.",
      shipping: "Ships in eco-friendly recyclable packaging.",
    },
    {
      id: 7,
      title: "VoltCharge 4-in-1 Fast Charger Hub",
      price: 49,
      oldPrice: 65,
      discount: 25,
      rating: 4.3,
      category: "Electronics",
      brand: "VoltCharge",
      stock: 36,
      image: "https://picsum.photos/seed/charger-1/640/640",
      gallery: [
        "https://picsum.photos/seed/charger-1/640/640",
        "https://picsum.photos/seed/charger-2/640/640",
        "https://picsum.photos/seed/charger-3/640/640",
      ],
      reviewCount: 68,
      badge: "Flash Deal",
      description:
        "A compact GaN charging station with multi-device support for laptops, phones, earbuds, and tablets without desk clutter.",
      shipping: "Same-day dispatch for weekday orders.",
    },
    {
      id: 8,
      title: "FreshNest Artisan Coffee Blend",
      price: 24,
      oldPrice: 31,
      discount: 23,
      rating: 4.8,
      category: "Grocery",
      brand: "FreshNest",
      stock: 64,
      image: "https://picsum.photos/seed/coffee-1/640/640",
      gallery: [
        "https://picsum.photos/seed/coffee-1/640/640",
        "https://picsum.photos/seed/coffee-2/640/640",
        "https://picsum.photos/seed/coffee-3/640/640",
      ],
      reviewCount: 119,
      badge: "Customer Favorite",
      description:
        "Medium roast whole beans with notes of cocoa and citrus, roasted in small batches for a smooth balanced cup.",
      shipping: "Delivered in freshness-sealed packaging.",
    },
    {
      id: 9,
      title: "UrbanWeave Luxe Leather Tote",
      price: 118,
      oldPrice: 149,
      discount: 21,
      rating: 4.7,
      category: "Accessories",
      brand: "UrbanWeave",
      stock: 22,
      image: "https://picsum.photos/seed/tote-1/640/640",
      gallery: [
        "https://picsum.photos/seed/tote-1/640/640",
        "https://picsum.photos/seed/tote-2/640/640",
        "https://picsum.photos/seed/tote-3/640/640",
      ],
      reviewCount: 91,
      badge: "Limited",
      description:
        "A structured tote with generous interior storage, polished hardware, and an elevated finish for work and weekends alike.",
      shipping: "Includes signature dust bag in the box.",
    },
    {
      id: 10,
      title: "PeakFit Foldable Yoga Mat",
      price: 36,
      oldPrice: 48,
      discount: 25,
      rating: 4.6,
      category: "Sports",
      brand: "PeakFit",
      stock: 50,
      image: "https://picsum.photos/seed/yoga-1/640/640",
      gallery: [
        "https://picsum.photos/seed/yoga-1/640/640",
        "https://picsum.photos/seed/yoga-2/640/640",
        "https://picsum.photos/seed/yoga-3/640/640",
      ],
      reviewCount: 83,
      badge: "Trending",
      description:
        "A lightweight foldable yoga mat with strong floor grip and extra cushioning for home workouts, travel, and studio sessions.",
      shipping: "Nationwide standard shipping included.",
    },
    {
      id: 11,
      title: "CasaVerde Woven Storage Basket Set",
      price: 52,
      oldPrice: 69,
      discount: 25,
      rating: 4.5,
      category: "Home Decor",
      brand: "CasaVerde",
      stock: 19,
      image: "https://picsum.photos/seed/basket-1/640/640",
      gallery: [
        "https://picsum.photos/seed/basket-1/640/640",
        "https://picsum.photos/seed/basket-2/640/640",
        "https://picsum.photos/seed/basket-3/640/640",
      ],
      reviewCount: 61,
      badge: "Bundle",
      description:
        "Handwoven storage baskets that bring warmth to shelving, entryways, and laundry corners while keeping everyday essentials tucked away.",
      shipping: "Ships within 48 hours from our decor hub.",
    },
    {
      id: 12,
      title: "PureAura Velvet Matte Lip Set",
      price: 29,
      oldPrice: 41,
      discount: 29,
      rating: 4.4,
      category: "Beauty",
      brand: "PureAura",
      stock: 33,
      image: "https://picsum.photos/seed/lipset-1/640/640",
      gallery: [
        "https://picsum.photos/seed/lipset-1/640/640",
        "https://picsum.photos/seed/lipset-2/640/640",
        "https://picsum.photos/seed/lipset-3/640/640",
      ],
      reviewCount: 74,
      badge: "Flash Deal",
      description:
        "A curated trio of richly pigmented matte shades with a lightweight texture that stays comfortable and camera-ready.",
      shipping: "Fast beauty warehouse fulfillment available.",
    },
    {
      id: 13,
      title: "NovaTech 13-inch Creator Tablet",
      price: 449,
      oldPrice: 529,
      discount: 15,
      rating: 4.9,
      category: "Electronics",
      brand: "NovaTech",
      stock: 11,
      image: "https://picsum.photos/seed/tablet-1/640/640",
      gallery: [
        "https://picsum.photos/seed/tablet-1/640/640",
        "https://picsum.photos/seed/tablet-2/640/640",
        "https://picsum.photos/seed/tablet-3/640/640",
      ],
      reviewCount: 126,
      badge: "Premium",
      description:
        "A powerful creator-focused tablet with a vivid display, responsive stylus support, and enough performance for sketching and editing on the move.",
      shipping: "Signature delivery required for high-value items.",
    },
    {
      id: 14,
      title: "FreshNest Organic Snack Box",
      price: 34,
      oldPrice: 44,
      discount: 23,
      rating: 4.5,
      category: "Grocery",
      brand: "FreshNest",
      stock: 46,
      image: "https://picsum.photos/seed/snackbox-1/640/640",
      gallery: [
        "https://picsum.photos/seed/snackbox-1/640/640",
        "https://picsum.photos/seed/snackbox-2/640/640",
        "https://picsum.photos/seed/snackbox-3/640/640",
      ],
      reviewCount: 88,
      badge: "Giftable",
      description:
        "A curated box of wholesome sweet and savory snacks for desk drawers, gifting, or quick energy between meetings.",
      shipping: "Delivered in a branded recyclable gift box.",
    },
    {
      id: 15,
      title: "UrbanWeave Everyday Sneaker",
      price: 94,
      oldPrice: 122,
      discount: 23,
      rating: 4.6,
      category: "Fashion",
      brand: "UrbanWeave",
      stock: 29,
      image: "https://picsum.photos/seed/sneaker-1/640/640",
      gallery: [
        "https://picsum.photos/seed/sneaker-1/640/640",
        "https://picsum.photos/seed/sneaker-2/640/640",
        "https://picsum.photos/seed/sneaker-3/640/640",
      ],
      reviewCount: 112,
      badge: "Best Seller",
      description:
        "Low-profile sneakers with cushioned support, easy styling, and a modern everyday silhouette that transitions from errands to dinner plans.",
      shipping: "Includes size-exchange support on first order.",
    },
    {
      id: 16,
      title: "VoltCharge MagSafe Power Bank",
      price: 56,
      oldPrice: 74,
      discount: 24,
      rating: 4.7,
      category: "Electronics",
      brand: "VoltCharge",
      stock: 39,
      image: "https://picsum.photos/seed/powerbank-1/640/640",
      gallery: [
        "https://picsum.photos/seed/powerbank-1/640/640",
        "https://picsum.photos/seed/powerbank-2/640/640",
        "https://picsum.photos/seed/powerbank-3/640/640",
      ],
      reviewCount: 93,
      badge: "Trending",
      description:
        "Slim magnetic charging with secure alignment, travel-ready capacity, and a soft-touch finish that feels refined in hand.",
      shipping: "Air-safe battery logistics supported.",
    },
    {
      id: 17,
      title: "CasaVerde Textured Throw Blanket",
      price: 46,
      oldPrice: 59,
      discount: 22,
      rating: 4.8,
      category: "Home Decor",
      brand: "CasaVerde",
      stock: 31,
      image: "https://picsum.photos/seed/blanket-1/640/640",
      gallery: [
        "https://picsum.photos/seed/blanket-1/640/640",
        "https://picsum.photos/seed/blanket-2/640/640",
        "https://picsum.photos/seed/blanket-3/640/640",
      ],
      reviewCount: 67,
      badge: "Cozy Pick",
      description:
        "An ultra-soft textured throw blanket that layers beautifully over sofas and beds while adding warmth and tone to any room.",
      shipping: "Vacuum-packed for cleaner transit.",
    },
    {
      id: 18,
      title: "PureAura Facial Cleansing Brush",
      price: 42,
      oldPrice: 55,
      discount: 24,
      rating: 4.3,
      category: "Beauty",
      brand: "PureAura",
      stock: 26,
      image: "https://picsum.photos/seed/brush-1/640/640",
      gallery: [
        "https://picsum.photos/seed/brush-1/640/640",
        "https://picsum.photos/seed/brush-2/640/640",
        "https://picsum.photos/seed/brush-3/640/640",
      ],
      reviewCount: 51,
      badge: "New",
      description:
        "A gentle silicone facial cleansing brush with multiple vibration modes to support deeper cleansing without irritation.",
      shipping: "Ships with USB charging cable included.",
    },
    {
      id: 19,
      title: "PeakFit Smart Resistance Band Kit",
      price: 58,
      oldPrice: 76,
      discount: 24,
      rating: 4.7,
      category: "Sports",
      brand: "PeakFit",
      stock: 28,
      image: "https://picsum.photos/seed/resistance-1/640/640",
      gallery: [
        "https://picsum.photos/seed/resistance-1/640/640",
        "https://picsum.photos/seed/resistance-2/640/640",
        "https://picsum.photos/seed/resistance-3/640/640",
      ],
      reviewCount: 84,
      badge: "Workout Essential",
      description:
        "A versatile resistance training kit with interchangeable bands, handles, anchors, and storage for home gym flexibility.",
      shipping: "Delivered with illustrated starter guide.",
    },
    {
      id: 20,
      title: "FreshNest Matcha Wellness Tin",
      price: 27,
      oldPrice: 35,
      discount: 23,
      rating: 4.6,
      category: "Grocery",
      brand: "FreshNest",
      stock: 57,
      image: "https://picsum.photos/seed/matcha-1/640/640",
      gallery: [
        "https://picsum.photos/seed/matcha-1/640/640",
        "https://picsum.photos/seed/matcha-2/640/640",
        "https://picsum.photos/seed/matcha-3/640/640",
      ],
      reviewCount: 58,
      badge: "Daily Ritual",
      description:
        "Ceremonial-style matcha with a smooth finish and vivid color, ideal for lattes, bowls, and focused mornings.",
      shipping: "Temperature-safe storage and delivery.",
    },
    {
      id: 21,
      title: "UrbanWeave Signature Sunglasses",
      price: 48,
      oldPrice: 63,
      discount: 24,
      rating: 4.4,
      category: "Accessories",
      brand: "UrbanWeave",
      stock: 37,
      image: "https://picsum.photos/seed/sunglass-1/640/640",
      gallery: [
        "https://picsum.photos/seed/sunglass-1/640/640",
        "https://picsum.photos/seed/sunglass-2/640/640",
        "https://picsum.photos/seed/sunglass-3/640/640",
      ],
      reviewCount: 47,
      badge: "Summer Edit",
      description:
        "Modern square-frame sunglasses with lightweight acetate styling and UV protection for bright daily wear.",
      shipping: "Includes hard case and microfiber cloth.",
    },
    {
      id: 22,
      title: "NovaTech Portable Bluetooth Speaker",
      price: 79,
      oldPrice: 102,
      discount: 23,
      rating: 4.8,
      category: "Electronics",
      brand: "NovaTech",
      stock: 35,
      image: "https://picsum.photos/seed/speaker-1/640/640",
      gallery: [
        "https://picsum.photos/seed/speaker-1/640/640",
        "https://picsum.photos/seed/speaker-2/640/640",
        "https://picsum.photos/seed/speaker-3/640/640",
      ],
      reviewCount: 108,
      badge: "Top Rated",
      description:
        "A compact premium speaker with punchy low-end sound, splash resistance, and a carrying loop for portable listening.",
      shipping: "Ready to ship from the audio warehouse.",
    },
    {
      id: 23,
      title: "CasaVerde Framed Wall Art Pair",
      price: 71,
      oldPrice: 92,
      discount: 23,
      rating: 4.5,
      category: "Home Decor",
      brand: "CasaVerde",
      stock: 16,
      image: "https://picsum.photos/seed/wallart-1/640/640",
      gallery: [
        "https://picsum.photos/seed/wallart-1/640/640",
        "https://picsum.photos/seed/wallart-2/640/640",
        "https://picsum.photos/seed/wallart-3/640/640",
      ],
      reviewCount: 34,
      badge: "Curated",
      description:
        "A two-piece framed abstract art set with balanced tones and gallery-inspired composition for modern interiors.",
      shipping: "Reinforced corner protection included.",
    },
    {
      id: 24,
      title: "PureAura Overnight Repair Mask",
      price: 33,
      oldPrice: 45,
      discount: 27,
      rating: 4.7,
      category: "Beauty",
      brand: "PureAura",
      stock: 44,
      image: "https://picsum.photos/seed/mask-1/640/640",
      gallery: [
        "https://picsum.photos/seed/mask-1/640/640",
        "https://picsum.photos/seed/mask-2/640/640",
        "https://picsum.photos/seed/mask-3/640/640",
      ],
      reviewCount: 97,
      badge: "Night Care",
      description:
        "A rich overnight mask formulated to help soothe, hydrate, and refresh the look of tired skin by morning.",
      shipping: "Stored in climate-controlled skincare inventory.",
    },
    {
      id: 25,
      title: "PeakFit Trail Running Backpack",
      price: 86,
      oldPrice: 110,
      discount: 22,
      rating: 4.6,
      category: "Sports",
      brand: "PeakFit",
      stock: 23,
      image: "https://picsum.photos/seed/backpack-1/640/640",
      gallery: [
        "https://picsum.photos/seed/backpack-1/640/640",
        "https://picsum.photos/seed/backpack-2/640/640",
        "https://picsum.photos/seed/backpack-3/640/640",
      ],
      reviewCount: 53,
      badge: "Outdoor Pick",
      description:
        "Lightweight hydration-friendly backpack with breathable straps, quick-access pockets, and secure storage for active use.",
      shipping: "Ships with rain cover and care card.",
    },
    {
      id: 26,
      title: "FreshNest Premium Olive Oil Set",
      price: 41,
      oldPrice: 54,
      discount: 24,
      rating: 4.8,
      category: "Grocery",
      brand: "FreshNest",
      stock: 42,
      image: "https://picsum.photos/seed/oliveoil-1/640/640",
      gallery: [
        "https://picsum.photos/seed/oliveoil-1/640/640",
        "https://picsum.photos/seed/oliveoil-2/640/640",
        "https://picsum.photos/seed/oliveoil-3/640/640",
      ],
      reviewCount: 64,
      badge: "Kitchen Favorite",
      description:
        "Cold-pressed extra virgin olive oil duo with smooth peppery notes, ideal for dressing, roasting, and finishing dishes.",
      shipping: "Packed in protective leak-safe bottle sleeves.",
    },
    {
      id: 27,
      title: "UrbanWeave Stainless Steel Chronograph",
      price: 138,
      oldPrice: 175,
      discount: 21,
      rating: 4.5,
      category: "Accessories",
      brand: "UrbanWeave",
      stock: 15,
      image: "https://picsum.photos/seed/chronograph-1/640/640",
      gallery: [
        "https://picsum.photos/seed/chronograph-1/640/640",
        "https://picsum.photos/seed/chronograph-2/640/640",
        "https://picsum.photos/seed/chronograph-3/640/640",
      ],
      reviewCount: 39,
      badge: "Statement Piece",
      description:
        "A polished chronograph with brushed steel detailing and versatile styling that bridges formal and casual looks effortlessly.",
      shipping: "Gift-box packaging available by default.",
    },
    {
      id: 28,
      title: "Lumina Desk Monitor Light Bar",
      price: 69,
      oldPrice: 89,
      discount: 22,
      rating: 4.7,
      category: "Electronics",
      brand: "Lumina",
      stock: 34,
      image: "https://picsum.photos/seed/lightbar-1/640/640",
      gallery: [
        "https://picsum.photos/seed/lightbar-1/640/640",
        "https://picsum.photos/seed/lightbar-2/640/640",
        "https://picsum.photos/seed/lightbar-3/640/640",
      ],
      reviewCount: 72,
      badge: "Workspace Pick",
      description:
        "A glare-reducing monitor light bar with adjustable temperature controls to make desks feel cleaner and more focused.",
      shipping: "Warehouse pickup support for local buyers.",
    },
    {
      id: 29,
      title: "CasaVerde Sculpted Planter Trio",
      price: 57,
      oldPrice: 75,
      discount: 24,
      rating: 4.6,
      category: "Home Decor",
      brand: "CasaVerde",
      stock: 21,
      image: "https://picsum.photos/seed/planter-1/640/640",
      gallery: [
        "https://picsum.photos/seed/planter-1/640/640",
        "https://picsum.photos/seed/planter-2/640/640",
        "https://picsum.photos/seed/planter-3/640/640",
      ],
      reviewCount: 49,
      badge: "Indoor Living",
      description:
        "A set of three sculptural planters with tonal variation and clean shapes that bring life and texture to shelves or patios.",
      shipping: "Ships with plant-care starter notes.",
    },
    {
      id: 30,
      title: "PureAura Spa Candle Collection",
      price: 31,
      oldPrice: 42,
      discount: 26,
      rating: 4.8,
      category: "Beauty",
      brand: "PureAura",
      stock: 38,
      image: "https://picsum.photos/seed/candle-1/640/640",
      gallery: [
        "https://picsum.photos/seed/candle-1/640/640",
        "https://picsum.photos/seed/candle-2/640/640",
        "https://picsum.photos/seed/candle-3/640/640",
      ],
      reviewCount: 82,
      badge: "Self Care",
      description:
        "A calming candle collection with layered spa-inspired fragrances that instantly soften the mood of any room.",
      shipping: "Secure wax-safe packaging included.",
    },
  ];

  const state = {
    products: [],
    filtered: [],
    page: 1,
    perPage: 9,
  };

  let productCache = null;

  function currentPage() {
    return document.body.dataset.page || "";
  }

  function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function skeletonMarkup(count = 4, columnClass = "col-md-6 col-xl-3") {
    return Array.from({ length: count })
      .map(
        () => `
          <div class="${columnClass}">
            <div class="skeleton-card">
              <div class="skeleton skeleton-thumb"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>
          </div>
        `
      )
      .join("");
  }

  function inWishlist(id) {
    return EcomApp.getWishlist().includes(id);
  }

  function buildProductCard(product, options = {}) {
    const columnClass = options.columnClass || "col-sm-6 col-xl-3";
    const compact = options.compact || false;
    const imageHeight = compact ? 230 : 270;
    return `
      <div class="${columnClass}" data-reveal>
        <article class="product-card">
          <div class="product-thumb">
            <span class="discount-badge">-${product.discount}%</span>
            <span class="product-badge">${product.badge || product.brand}</span>
            <button class="wishlist-btn ${inWishlist(product.id) ? "active" : ""}" type="button" data-wishlist-toggle="${product.id}" aria-label="Add to wishlist">
              <i class="bi ${inWishlist(product.id) ? "bi-heart-fill" : "bi-heart"}"></i>
            </button>
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" alt="${product.title}" style="height:${imageHeight}px;">
            </a>
          </div>
          <div class="product-body">
            <div class="product-meta mb-2">
              <span>${product.category}</span>
              <span>${product.brand}</span>
            </div>
            <h3 class="product-title">
              <a href="product-details.html?id=${product.id}">${product.title}</a>
            </h3>
            <div class="d-flex align-items-center justify-content-between gap-2 my-3">
              <div class="review-stars">${EcomApp.renderStars(product.rating)}</div>
              <small class="text-muted-custom">(${product.reviewCount})</small>
            </div>
            <div class="price-line mb-3">
              <span class="current">${EcomApp.formatCurrency(product.price)}</span>
              <span class="old">${EcomApp.formatCurrency(product.oldPrice)}</span>
            </div>
            <div class="d-flex gap-2">
              <a href="product-details.html?id=${product.id}" class="btn btn-outline-secondary flex-grow-1">Details</a>
              <button class="btn btn-primary flex-grow-1" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  async function loadProducts() {
    if (productCache) {
      return productCache;
    }

    try {
      const response = await fetch("assets/data/products.json", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Products fetch failed");
      }
      productCache = await response.json();
      return productCache;
    } catch (error) {
      productCache = fallbackProducts;
      return productCache;
    }
  }

  async function getProductById(id) {
    const products = await loadProducts();
    return products.find((item) => item.id === Number(id));
  }

  function renderWishlistButtons() {
    document.querySelectorAll("[data-wishlist-toggle]").forEach((button) => {
      const id = Number(button.dataset.wishlistToggle);
      const active = inWishlist(id);
      button.classList.toggle("active", active);
      const icon = button.querySelector("i");
      if (icon) {
        icon.className = `bi ${active ? "bi-heart-fill" : "bi-heart"}`;
      }
    });
  }

  async function renderHomePage() {
    const trendingGrid = qs("#trendingProductsGrid");
    const flashGrid = qs("#flashSaleGrid");

    if (!trendingGrid || !flashGrid) {
      return;
    }

    trendingGrid.innerHTML = skeletonMarkup(8, "col-sm-6 col-xl-3");
    flashGrid.innerHTML = skeletonMarkup(4, "col-sm-6 col-xl-3");

    const products = await loadProducts();
    const trending = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);
    const flash = [...products].sort((a, b) => b.discount - a.discount).slice(0, 4);

    trendingGrid.innerHTML = trending
      .map((product) => buildProductCard(product, { columnClass: "col-sm-6 col-xl-3" }))
      .join("");

    flashGrid.innerHTML = flash
      .map((product) => buildProductCard(product, { columnClass: "col-sm-6 col-xl-3", compact: true }))
      .join("");

    EcomApp.initRevealObserver();
    renderWishlistButtons();
  }

  function renderCategoryFilters(products) {
    const wrapper = qs("#categoryFilterList");
    if (!wrapper) {
      return;
    }

    const categories = [...new Set(products.map((item) => item.category))];
    const selectedCategory = new URLSearchParams(window.location.search).get("category");

    wrapper.innerHTML = categories
      .map(
        (category, index) => `
          <div class="form-check">
            <input class="form-check-input category-filter" type="checkbox" value="${category}" id="category-${index}" ${selectedCategory === category ? "checked" : ""}>
            <label class="form-check-label" for="category-${index}">${category}</label>
          </div>
        `
      )
      .join("");
  }

  function sortProducts(items, sortValue) {
    const sorted = [...items];
    switch (sortValue) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      default:
        sorted.sort((a, b) => b.id - a.id);
        break;
    }
    return sorted;
  }

  function bindProductFilters() {
    ["change", "input"].forEach((eventName) => {
      document.querySelectorAll(".category-filter, #priceRange, #ratingFilter, #availabilityFilter, #sortProducts").forEach((element) => {
        element.addEventListener(eventName, () => {
          if (element.id === "priceRange") {
            const label = qs("#priceRangeValue");
            if (label) {
              label.textContent = EcomApp.formatCurrency(Number(element.value));
            }
          }
          state.page = 1;
          applyProductFilters();
        });
      });
    });
  }

  function renderPagination(totalItems) {
    const holder = qs("#paginationHolder");
    if (!holder) {
      return;
    }

    const totalPages = Math.max(Math.ceil(totalItems / state.perPage), 1);
    const buttons = [];

    buttons.push(`
      <li class="page-item ${state.page === 1 ? "disabled" : ""}">
        <button class="page-link" type="button" data-pagination="${state.page - 1}">Previous</button>
      </li>
    `);

    for (let page = 1; page <= totalPages; page += 1) {
      buttons.push(`
        <li class="page-item ${state.page === page ? "active" : ""}">
          <button class="page-link" type="button" data-pagination="${page}">${page}</button>
        </li>
      `);
    }

    buttons.push(`
      <li class="page-item ${state.page === totalPages ? "disabled" : ""}">
        <button class="page-link" type="button" data-pagination="${state.page + 1}">Next</button>
      </li>
    `);

    holder.innerHTML = buttons.join("");

    holder.querySelectorAll("[data-pagination]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.pagination);
        if (nextPage < 1 || nextPage > totalPages || nextPage === state.page) {
          return;
        }
        state.page = nextPage;
        applyProductFilters();
        window.scrollTo({ top: 260, behavior: "smooth" });
      });
    });
  }

  function applyProductFilters() {
    const grid = qs("#productsGrid");
    if (!grid) {
      return;
    }

    const selectedCategories = [...document.querySelectorAll(".category-filter:checked")].map((item) => item.value);
    const priceRange = Number(qs("#priceRange")?.value || Number.MAX_SAFE_INTEGER);
    const minRating = Number(qs("#ratingFilter")?.value || 0);
    const onlyAvailable = qs("#availabilityFilter")?.checked;
    const sortValue = qs("#sortProducts")?.value || "latest";
    const searchValue = (new URLSearchParams(window.location.search).get("q") || "").toLowerCase();

    let filtered = [...state.products];

    if (selectedCategories.length) {
      filtered = filtered.filter((item) => selectedCategories.includes(item.category));
    }

    filtered = filtered.filter((item) => item.price <= priceRange);

    if (minRating > 0) {
      filtered = filtered.filter((item) => item.rating >= minRating);
    }

    if (onlyAvailable) {
      filtered = filtered.filter((item) => item.stock > 0);
    }

    if (searchValue) {
      filtered = filtered.filter((item) => {
        const haystack = `${item.title} ${item.category} ${item.brand}`.toLowerCase();
        return haystack.includes(searchValue);
      });
    }

    filtered = sortProducts(filtered, sortValue);
    state.filtered = filtered;

    const totalItems = filtered.length;
    const start = (state.page - 1) * state.perPage;
    const paginated = filtered.slice(start, start + state.perPage);

    grid.innerHTML = paginated.length
      ? paginated
          .map((product) => buildProductCard(product, { columnClass: "col-sm-6 col-xl-4" }))
          .join("")
      : `
          <div class="col-12">
            <div class="empty-state">
              <h3 class="h5 fw-bold mb-2">No products matched these filters</h3>
              <p class="text-muted-custom mb-3">Try widening the price range, switching categories, or clearing the search query.</p>
              <a href="products.html" class="btn btn-primary">Reset Filters</a>
            </div>
          </div>
        `;

    const countLabel = qs("#productsCount");
    if (countLabel) {
      countLabel.textContent = `${totalItems} products found`;
    }

    const searchLabel = qs("#activeSearchText");
    if (searchLabel) {
      searchLabel.textContent = searchValue ? `Search: "${searchValue}"` : "Browse the latest catalog";
    }

    renderPagination(totalItems);
    EcomApp.initRevealObserver();
    renderWishlistButtons();
  }

  async function renderProductsPage() {
    const grid = qs("#productsGrid");
    if (!grid) {
      return;
    }

    grid.innerHTML = skeletonMarkup(9, "col-sm-6 col-xl-4");
    state.products = await loadProducts();

    renderCategoryFilters(state.products);

    const maxPrice = Math.max(...state.products.map((item) => item.price));
    const priceRange = qs("#priceRange");
    const priceValue = qs("#priceRangeValue");
    if (priceRange) {
      priceRange.max = String(maxPrice);
      priceRange.value = String(maxPrice);
    }
    if (priceValue) {
      priceValue.textContent = EcomApp.formatCurrency(maxPrice);
    }

    bindProductFilters();
    applyProductFilters();
  }

  function reviewMarkup(product) {
    return `
      <div class="d-flex gap-3 mb-4">
        <img src="https://picsum.photos/seed/review-${product.id}-1/70/70" class="rounded-circle" width="58" height="58" alt="Reviewer">
        <div>
          <h6 class="mb-1">Sophia Carter</h6>
          <div class="review-stars mb-2">${EcomApp.renderStars(product.rating)}</div>
          <p class="text-muted-custom mb-0">Premium build quality, quick delivery, and the finish feels even better in person. It fits naturally into a daily routine and feels worth the upgrade.</p>
        </div>
      </div>
      <div class="d-flex gap-3 mb-4">
        <img src="https://picsum.photos/seed/review-${product.id}-2/70/70" class="rounded-circle" width="58" height="58" alt="Reviewer">
        <div>
          <h6 class="mb-1">Noah Brooks</h6>
          <div class="review-stars mb-2">${EcomApp.renderStars(Math.max(product.rating - 0.2, 4.1))}</div>
          <p class="text-muted-custom mb-0">Clean packaging, great presentation, and performance has been consistent. This is the kind of product card shoppers expect from a polished e-commerce theme.</p>
        </div>
      </div>
    `;
  }

  function renderProductDetailLayout(product) {
    const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
    return `
      <div class="row g-4 align-items-start">
        <div class="col-lg-6">
          <div class="soft-card p-3 p-md-4">
            <img id="detailMainImage" src="${gallery[0]}" alt="${product.title}" class="w-100 rounded-4 mb-3" style="height: 520px; object-fit: cover;">
            <div class="row g-3">
              ${gallery
                .map(
                  (image, index) => `
                    <div class="col-4">
                      <button type="button" class="gallery-thumb ${index === 0 ? "active" : ""} w-100 p-0" data-gallery-src="${image}">
                        <img src="${image}" alt="${product.title} thumbnail ${index + 1}" class="w-100">
                      </button>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="soft-card p-4 p-xl-5">
            <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
              <span class="badge rounded-pill text-bg-light">${product.brand}</span>
              <span class="badge rounded-pill text-bg-warning">-${product.discount}% OFF</span>
              <span class="badge rounded-pill text-bg-success">${product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
            </div>
            <h2 class="fw-bold mb-3">${product.title}</h2>
            <div class="d-flex flex-wrap align-items-center gap-3 mb-3">
              <div class="review-stars">${EcomApp.renderStars(product.rating)}</div>
              <span class="text-muted-custom">${product.rating.toFixed(1)} rating</span>
              <span class="text-muted-custom">${product.reviewCount} reviews</span>
            </div>
            <div class="price-line mb-4">
              <span class="current">${EcomApp.formatCurrency(product.price)}</span>
              <span class="old">${EcomApp.formatCurrency(product.oldPrice)}</span>
              <span class="mini-link">Save ${EcomApp.formatCurrency(product.oldPrice - product.price)}</span>
            </div>
            <p class="text-muted-custom mb-4">${product.description}</p>
            <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
              <div class="quantity-box">
                <button type="button" data-qty-target="detailsQuantity" data-qty-action="decrease"><i class="bi bi-dash"></i></button>
                <input id="detailsQuantity" type="number" min="1" max="${product.stock}" value="1">
                <button type="button" data-qty-target="detailsQuantity" data-qty-action="increase"><i class="bi bi-plus"></i></button>
              </div>
              <button class="btn btn-primary flex-grow-1" type="button" data-add-to-cart="${product.id}" data-quantity-input="detailsQuantity">Add to Cart</button>
              <button class="btn btn-outline-dark flex-grow-1" type="button" data-buy-now="${product.id}" data-quantity-input="detailsQuantity">Buy Now</button>
            </div>
            <div class="d-flex gap-2 mb-4">
              <button class="btn btn-outline-primary" type="button" data-wishlist-toggle="${product.id}">
                <i class="bi ${inWishlist(product.id) ? "bi-heart-fill" : "bi-heart"} me-2"></i>Save to Wishlist
              </button>
            </div>
            <div class="soft-card p-4">
              <h5 class="fw-semibold mb-3">Delivery & Benefits</h5>
              <ul class="delivery-list">
                <li>
                  <i class="bi bi-truck fs-5 text-primary"></i>
                  <div>
                    <strong class="d-block">Fast shipping</strong>
                    <span class="text-muted-custom">${product.shipping}</span>
                  </div>
                </li>
                <li>
                  <i class="bi bi-shield-check fs-5 text-success"></i>
                  <div>
                    <strong class="d-block">Secure purchase</strong>
                    <span class="text-muted-custom">Protected checkout UI and a premium post-purchase experience.</span>
                  </div>
                </li>
                <li>
                  <i class="bi bi-arrow-repeat fs-5 text-warning"></i>
                  <div>
                    <strong class="d-block">Easy returns</strong>
                    <span class="text-muted-custom">14-day window for effortless order confidence.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <ul class="nav nav-tabs mb-0" id="productTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-pane" type="button" role="tab">Description</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-pane" type="button" role="tab">Reviews</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping-pane" type="button" role="tab">Shipping Info</button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="description-pane" role="tabpanel">
            <div class="tab-pane-card">
              <h5 class="fw-semibold mb-3">Product Story</h5>
              <p class="text-muted-custom mb-3">${product.description}</p>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="soft-card p-3 h-100">
                    <h6 class="fw-semibold mb-2">Premium Finish</h6>
                    <p class="text-muted-custom mb-0">Carefully styled visuals and refined detail cues help this product feel elevated in a modern catalog.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="soft-card p-3 h-100">
                    <h6 class="fw-semibold mb-2">Reliable Stock</h6>
                    <p class="text-muted-custom mb-0">Current inventory level: ${product.stock} units available for a smooth add-to-cart flow.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="soft-card p-3 h-100">
                    <h6 class="fw-semibold mb-2">Brand Promise</h6>
                    <p class="text-muted-custom mb-0">${product.brand} products are positioned as premium picks for polished storefront presentations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="reviews-pane" role="tabpanel">
            <div class="tab-pane-card">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                <div>
                  <h5 class="fw-semibold mb-1">Customer Reviews</h5>
                  <p class="text-muted-custom mb-0">${product.reviewCount} shoppers have rated this item.</p>
                </div>
                <div class="review-stars fs-5">${EcomApp.renderStars(product.rating)}</div>
              </div>
              ${reviewMarkup(product)}
            </div>
          </div>
          <div class="tab-pane fade" id="shipping-pane" role="tabpanel">
            <div class="tab-pane-card">
              <h5 class="fw-semibold mb-3">Shipping & Support</h5>
              <p class="text-muted-custom mb-3">${product.shipping}</p>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="soft-card p-3 h-100">
                    <h6 class="fw-semibold mb-2">Order Timeline</h6>
                    <p class="text-muted-custom mb-0">Orders placed before 4 PM are prioritized for same-day handling when stock is available.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="soft-card p-3 h-100">
                    <h6 class="fw-semibold mb-2">Support Window</h6>
                    <p class="text-muted-custom mb-0">Customer support is available seven days a week for shipping updates, exchanges, and delivery coordination.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindDetailGallery() {
    const mainImage = qs("#detailMainImage");
    if (!mainImage) {
      return;
    }

    document.querySelectorAll("[data-gallery-src]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        document.querySelectorAll("[data-gallery-src]").forEach((node) => node.classList.remove("active"));
        thumb.classList.add("active");
        mainImage.src = thumb.dataset.gallerySrc;
      });
    });
  }

  async function renderProductDetailsPage() {
    const root = qs("#productDetailsRoot");
    const relatedGrid = qs("#relatedProductsGrid");
    if (!root || !relatedGrid) {
      return;
    }

    root.innerHTML = `
      <div class="skeleton-card">
        <div class="row g-4">
          <div class="col-lg-6"><div class="skeleton skeleton-thumb" style="height: 540px;"></div></div>
          <div class="col-lg-6">
            <div class="skeleton skeleton-line"></div>
            <div class="skeleton skeleton-line"></div>
            <div class="skeleton skeleton-line short"></div>
          </div>
        </div>
      </div>
    `;
    relatedGrid.innerHTML = skeletonMarkup(4, "col-sm-6 col-xl-3");

    const id = Number(new URLSearchParams(window.location.search).get("id") || 1);
    const products = await loadProducts();
    const product = products.find((item) => item.id === id) || products[0];

    if (!product) {
      root.innerHTML = '<div class="empty-state"><p class="mb-0">Unable to load product details.</p></div>';
      relatedGrid.innerHTML = "";
      return;
    }

    root.innerHTML = renderProductDetailLayout(product);
    bindDetailGallery();

    const related = products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4);
    relatedGrid.innerHTML = related
      .map((item) => buildProductCard(item, { columnClass: "col-sm-6 col-xl-3", compact: true }))
      .join("");

    const bannerTitle = qs("#breadcrumbShell h1");
    if (bannerTitle) {
      bannerTitle.textContent = product.title;
    }

    EcomApp.initRevealObserver();
    renderWishlistButtons();
  }

  function buildAdminRow(product) {
    return `
      <tr data-admin-row="${product.id}">
        <td>#${product.id}</td>
        <td>
          <div class="d-flex align-items-center gap-3">
            <img src="${product.image}" alt="${product.title}" class="rounded-4" width="56" height="56" style="object-fit: cover;">
            <div>
              <strong class="d-block">${product.title}</strong>
              <span class="text-muted-custom small">${product.brand}</span>
            </div>
          </div>
        </td>
        <td>${product.category}</td>
        <td>${EcomApp.formatCurrency(product.price)}</td>
        <td>${product.stock}</td>
        <td><span class="status-badge ${product.stock > 20 ? "completed" : product.stock > 10 ? "processing" : "pending"}">${product.stock > 20 ? "Healthy" : product.stock > 10 ? "Medium" : "Low"}</span></td>
        <td>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-primary" type="button" data-edit-product="${product.id}" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button>
            <button class="btn btn-sm btn-outline-danger" type="button" data-delete-product="${product.id}">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }

  function bindAdminProducts(products) {
    document.querySelectorAll("[data-edit-product]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = products.find((item) => item.id === Number(button.dataset.editProduct));
        if (!product) {
          return;
        }
        qs("#editProductId").value = product.id;
        qs("#editProductName").value = product.title;
        qs("#editProductCategory").value = product.category;
        qs("#editProductPrice").value = product.price;
        qs("#editProductStock").value = product.stock;
      });
    });

    document.querySelectorAll("[data-delete-product]").forEach((button) => {
      button.addEventListener("click", () => {
        const row = qs(`[data-admin-row="${button.dataset.deleteProduct}"]`);
        if (row) {
          row.remove();
          EcomApp.showToast("Product removed from the admin list.", "warning");
        }
      });
    });

    const addProductForm = qs("#addProductForm");
    if (addProductForm) {
      addProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const modal = bootstrap.Modal.getInstance(qs("#addProductModal"));
        if (modal) {
          modal.hide();
        }
        addProductForm.reset();
        EcomApp.showToast("New product saved in the demo interface.", "success");
      });
    }

    const editProductForm = qs("#editProductForm");
    if (editProductForm) {
      editProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const modal = bootstrap.Modal.getInstance(qs("#editProductModal"));
        if (modal) {
          modal.hide();
        }
        EcomApp.showToast("Product changes updated in the demo table.", "success");
      });
    }
  }

  async function renderAdminProductsPage() {
    const tableBody = qs("#adminProductsTable");
    if (!tableBody) {
      return;
    }

    tableBody.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="skeleton-card">
            <div class="skeleton skeleton-line"></div>
            <div class="skeleton skeleton-line"></div>
            <div class="skeleton skeleton-line short"></div>
          </div>
        </td>
      </tr>
    `;

    const products = await loadProducts();
    const displayProducts = products.slice(0, 12);
    tableBody.innerHTML = displayProducts.map(buildAdminRow).join("");
    bindAdminProducts(displayProducts);
  }

  const ProductStore = {
    init: async function () {
      const page = currentPage();
      if (page === "home") {
        await renderHomePage();
      }
      if (page === "products") {
        await renderProductsPage();
      }
      if (page === "product-details") {
        await renderProductDetailsPage();
      }
      if (page === "admin-products") {
        await renderAdminProductsPage();
      }
      renderWishlistButtons();
    },
    loadProducts,
    getProductById,
    buildProductCard,
    renderWishlistButtons,
  };

  window.ProductStore = ProductStore;

  document.addEventListener("DOMContentLoaded", () => {
    ProductStore.init();
  });

  document.addEventListener("ecom:wishlist-updated", () => {
    renderWishlistButtons();
  });
})();
