import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  const [products] = useState([
    { 
      id: 1, 
      name: 'Fresh Apples', 
      price: 2.99, 
      category: 'Fruits', 
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop', 
      rating: 4.5, 
      inStock: true 
    },
    { 
      id: 2, 
      name: 'Organic Milk', 
      price: 3.49, 
      category: 'Dairy', 
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop', 
      rating: 4.8, 
      inStock: true 
    },
    { 
      id: 3, 
      name: 'Whole Wheat Bread', 
      price: 2.29, 
      category: 'Bakery', 
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop', 
      rating: 4.3, 
      inStock: true 
    },
    { 
      id: 4, 
      name: 'Free Range Eggs', 
      price: 4.99, 
      category: 'Dairy', 
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop', 
      rating: 4.7, 
      inStock: true 
    },
    { 
      id: 5, 
      name: 'Bananas', 
      price: 1.99, 
      category: 'Fruits', 
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 
      rating: 4.4, 
      inStock: true 
    },
    { 
      id: 6, 
      name: 'Fresh Carrots', 
      price: 1.99, 
      category: 'Vegetables', 
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop', 
      rating: 4.6, 
      inStock: true 
    },
    { 
      id: 7, 
      name: 'Chicken Breast', 
      price: 8.99, 
      category: 'Meat', 
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop', 
      rating: 4.9, 
      inStock: true 
    },
    { 
      id: 8, 
      name: 'Orange Juice', 
      price: 3.99, 
      category: 'Beverages', 
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', 
      rating: 4.2, 
      inStock: false 
    },
    { 
      id: 9, 
      name: 'Greek Yogurt', 
      price: 4.49, 
      category: 'Dairy', 
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', 
      rating: 4.5, 
      inStock: true 
    },
    { 
      id: 10, 
      name: 'Strawberries', 
      price: 3.99, 
      category: 'Fruits', 
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop', 
      rating: 4.7, 
      inStock: true 
    },
    { 
      id: 11, 
      name: 'Avocados', 
      price: 2.99, 
      category: 'Vegetables', 
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop', 
      rating: 4.8, 
      inStock: true 
    },
    { 
      id: 12, 
      name: 'Salmon Fillet', 
      price: 12.99, 
      category: 'Meat', 
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop', 
      rating: 4.9, 
      inStock: true 
    }
  ]);

  const [categories] = useState([
    'All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Beverages'
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="dashboard">
      <Navbar />
      
      <main className="dashboard-main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Fresh Groceries, <br />
              <span className="hero-highlight">Delivered to You</span>
            </h1>
            <p className="hero-description">
              Shop from a wide range of quality products at the best prices. 
              No login required — just browse, add to cart, and order!
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Shop Now</button>
              <button className="btn btn-outline">View Offers</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop" 
              alt="Fresh Groceries"
              className="hero-img"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="categories">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Browse our wide range of categories</p>
          </div>
          <div className="categories-grid">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-card ${selectedCategory === category ? 'active' : ''}`}
              >
                <span className="category-name">{category}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="products">
          <div className="products-header">
            <div>
              <h2 className="section-title">Our Products</h2>
              <p className="products-count">{filteredProducts.length} items available</p>
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
          
          <div className="products-grid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-badge">
                  {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
                  {product.rating >= 4.7 && <span className="best-seller">Best Seller</span>}
                </div>
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    }}
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="product-rating">
                    <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button 
                      className="add-to-cart"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;