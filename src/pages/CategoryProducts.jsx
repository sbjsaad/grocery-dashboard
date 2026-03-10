import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 6000]);

  // All main categories
  const mainCategories = [
    { name: 'Fruits', icon: '🍎', path: '/category/fruits' },
    { name: 'Vegetables', icon: '🥕', path: '/category/vegetables' },
    { name: 'Dairy', icon: '🥛', path: '/category/dairy' },
    { name: 'Bakery', icon: '🍞', path: '/category/bakery' },
    { name: 'Meat', icon: '🍗', path: '/category/meat' },
    { name: 'Beverages', icon: '🥤', path: '/category/beverages' }
  ];

  // Subcategories based on main category (All Products hata diya)
  const getSubcategories = () => {
    const subcategoriesMap = {
      'Fruits': ['🍊 Citrus', '🍌 Tropical', '🍓 Berries', '🍈 Melons', '🍎 Apples & Pears'],
      'Vegetables': ['🥬 Leafy Greens', '🥕 Root Vegetables', '🥦 Cruciferous', '🍄 Mushrooms'],
      'Dairy': ['🥛 Milk', '🧀 Cheese', '🍦 Yogurt', '🧈 Butter', '🥚 Eggs'],
      'Bakery': ['🍞 Bread', '🥐 Pastries', '🎂 Cakes', '🍪 Cookies', '🥯 Bagels'],
      'Meat': ['🍗 Chicken', '🥩 Beef', '🥓 Pork', '🍖 Lamb', '🐟 Seafood'],
      'Beverages': ['🥤 Soft Drinks', '🧃 Juices', '☕ Coffee', '🍵 Tea', '⚡ Energy Drinks']
    };
    return subcategoriesMap[categoryName] || [];
  };

  const subcategories = getSubcategories();

  useEffect(() => {
    const allProducts = [
      { 
        id: 1, 
        name: 'Fresh Apples', 
        price: 2.99, 
        category: 'Fruits', 
        subcategory: '🍎 Apples & Pears',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop', 
        rating: 4.5, 
        reviews: 342,
        inStock: true,
        originalPrice: 5.99,
        discount: 50
      },
      { 
        id: 2, 
        name: 'Organic Milk', 
        price: 3.49, 
        category: 'Dairy', 
        subcategory: '🥛 Milk',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop', 
        rating: 4.8, 
        reviews: 215,
        inStock: true,
        originalPrice: 4.99,
        discount: 30
      },
      { 
        id: 3, 
        name: 'Whole Wheat Bread', 
        price: 2.29, 
        category: 'Bakery', 
        subcategory: '🍞 Bread',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop', 
        rating: 4.3, 
        reviews: 189,
        inStock: true,
        originalPrice: 3.99,
        discount: 0
      },
      { 
        id: 4, 
        name: 'Free Range Eggs', 
        price: 4.99, 
        category: 'Dairy', 
        subcategory: '🥚 Eggs',
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop', 
        rating: 4.7, 
        reviews: 278,
        inStock: true,
        originalPrice: 6.99,
        discount: 28
      },
      { 
        id: 5, 
        name: 'Bananas', 
        price: 1.99, 
        category: 'Fruits', 
        subcategory: '🍌 Tropical',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 
        rating: 4.4, 
        reviews: 456,
        inStock: true,
        originalPrice: 2.99,
        discount: 33
      },
      { 
        id: 6, 
        name: 'Fresh Carrots', 
        price: 1.99, 
        category: 'Vegetables', 
        subcategory: '🥕 Root Vegetables',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop', 
        rating: 4.6, 
        reviews: 167,
        inStock: true,
        originalPrice: 2.49,
        discount: 20
      },
      { 
        id: 7, 
        name: 'Chicken Breast', 
        price: 8.99, 
        category: 'Meat', 
        subcategory: '🍗 Chicken',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop', 
        rating: 4.9, 
        reviews: 423,
        inStock: true,
        originalPrice: 12.99,
        discount: 30
      },
      { 
        id: 8, 
        name: 'Orange Juice', 
        price: 3.99, 
        category: 'Beverages', 
        subcategory: '🧃 Juices',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', 
        rating: 4.2, 
        reviews: 198,
        inStock: false,
        originalPrice: 4.99,
        discount: 20
      },
      { 
        id: 9, 
        name: 'Greek Yogurt', 
        price: 4.49, 
        category: 'Dairy', 
        subcategory: '🍦 Yogurt',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', 
        rating: 4.5, 
        reviews: 234,
        inStock: true,
        originalPrice: 5.99,
        discount: 25
      },
      { 
        id: 10, 
        name: 'Strawberries', 
        price: 3.99, 
        category: 'Fruits', 
        subcategory: '🍓 Berries',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop', 
        rating: 4.7, 
        reviews: 345,
        inStock: true,
        originalPrice: 5.99,
        discount: 33
      },
      { 
        id: 11, 
        name: 'Avocados', 
        price: 2.99, 
        category: 'Vegetables', 
        subcategory: '🥑 Tropical',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop', 
        rating: 4.8, 
        reviews: 289,
        inStock: true,
        originalPrice: 3.99,
        discount: 25
      },
      { 
        id: 12, 
        name: 'Salmon Fillet', 
        price: 12.99, 
        category: 'Meat', 
        subcategory: '🐟 Seafood',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop', 
        rating: 4.9, 
        reviews: 156,
        inStock: true,
        originalPrice: 16.99,
        discount: 23
      }
    ];

    setLoading(true);
    let filtered = allProducts.filter(
      product => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    
    // Apply subcategory filter - sirf tab filter karo jab koi subcategory select ho
    if (selectedSubcategory) {
      filtered = filtered.filter(
        product => product.subcategory === selectedSubcategory
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setProducts(filtered);
    setLoading(false);
  }, [categoryName, selectedSubcategory, priceRange]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <Navbar />
      
      <main className="category-main">
        <div className="category-container">
          {/* Sidebar */}
          <aside className="category-sidebar">
            {/* Main Categories Type */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Categories Type</h3>
              <ul className="main-category-list">
                {mainCategories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      to={cat.path}
                      className={`main-category-item ${cat.name === categoryName ? 'active' : ''}`}
                    >
                      <span className="category-icon">{cat.icon}</span>
                      <span className="category-name">{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories - Without All Products */}
            {subcategories.length > 0 && (
              <div className="sidebar-section">
                <h3 className="sidebar-title">Subcategories</h3>
                <ul className="subcategory-list">
                  {subcategories.map((sub) => (
                    <li key={sub}>
                      <button
                        className={`subcategory-item ${selectedSubcategory === sub ? 'active' : ''}`}
                        onClick={() => setSelectedSubcategory(selectedSubcategory === sub ? '' : sub)}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Range */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Price Range</h3>
              <div className="price-range">
                <div className="price-inputs">
                  <span>Rs. {priceRange[0]}</span>
                  <span>Rs. {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-slider"
                />
              </div>
            </div>

            {/* Clear Filters Button */}
            {(selectedSubcategory || priceRange[1] < 6000) && (
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSelectedSubcategory('');
                  setPriceRange([0, 6000]);
                }}
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Main Content */}
          <div className="category-content">
            {/* Header */}
            <div className="content-header">
              <div>
                <h1 className="content-title">{categoryName}</h1>
                <p className="products-found">{products.length} products found</p>
              </div>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {products.length === 0 ? (
              <div className="no-products">
                <h3>No products found</h3>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedSubcategory('');
                    setPriceRange([0, 6000]);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    {product.discount > 0 && (
                      <div className="discount-badge">{product.discount}% OFF</div>
                    )}
                    <div className="product-image">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                        }}
                      />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-rating">
                        <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
                        <span className="reviews">({product.reviews})</span>
                      </div>
                      <div className="product-prices">
                        <span className="current-price">Rs. {product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="original-price">Rs. {product.originalPrice}</span>
                        )}
                      </div>
                      <button 
                        className="add-to-cart"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryProducts;