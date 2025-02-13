// export default Products;
import React, { useState } from "react";
import "../styles/Products.css";

const CategoryDisplay = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
            <img src={product.image} alt={product.name} className="card-img-top product-image" style={{ objectFit: 'cover', height: '350px' }} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Price: ${product.price.toFixed(2)}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("groceries");

  const categorizedProducts = {
    groceries: [
      { id: 1, name: "Milo Chocolate Powder Sachet Pack 900gm", brand: "Nestle", price: 3.99, image: require("../images/groceries/milo_900gm.jpg") },
      { id: 2, name: "Milo Chocolate Powder\nTin Container 400gm", brand: "BakeFresh", price: 2.49, image: require("../images/groceries/milo_tin_400gm.jpg") },
      { id: 2, name: "Milo Chocolate Powder\nTin Container 1.4kg", brand: "BakeFresh", price: 2.49, image: require("../images/groceries/milo_tin_1.4kg.jpg") },
      { id: 3, name: "Maggi Nigerian Chicken Cubes 10g", brand: "BakeFresh", price: 2.49, image: require("../images/groceries/maggi_cubes_60tb.png") },
      { id: 4, name: "Benny Chicken Stock Powder Spices & Seasonings 17gm", brand: "Benny", price: 2.49, image: require("../images/groceries/benny.png") },
    ],
    ladiesHairAndCosmetics: [
      { id: 1, name: "Luxury Lipstick", brand: "Chanel", price: 25.99, image: require("../images/ladies_accessories/lipstick.jpg") },
      { id: 2, name: "Moisturizing Cream", brand: "SkinGlow", price: 15.99, image: require("../images/ladies_accessories/moisturiser.png") },
      { id: 3, name: "Hair Serum", brand: "HairGlow", price: 12.49, image: require("../images/ladies_accessories/hair_serum.png") },
      { id: 4, name: "Curly Wig", brand: "PureHair", price: 18.99, image: require("../images/ladies_accessories/curly.PNG") },
      { id: 4, name: "Straight Curl Wig", brand: "PureHair", price: 18.99, image: require("../images/ladies_accessories/straight-curl.PNG") },
      { id: 4, name: "Pure Brown Leather Office Shoe", brand: "Dune", price: 18.99, image: require("../images/ladies_accessories/ladies-shoe.PNG") },
      { id: 4, name: "Black Fluffy Winter Shoe", brand: "Dune", price: 18.99, image: require("../images/ladies_accessories/ladies-shoe2.PNG") },
    ],
    mensProducts: [
      { id: 1, name: "Ocean Blue Long-sleeves", brand: "Charles Wrihgth", price: 29.99, image: require("../images/mens/shirt.PNG") },
      { id: 2, name: "Brown Cross Road", brand: "Charles Wrihgth", price: 25.99, image: require("../images/mens/shirt1.PNG") },
    ],
    GeneralAccessories: [
      { id: 1, name: "Vacuum Cleaner", brand: "HomeCare", price: 149.99, image: require("../images/general_accessories/ear-buds.png") },
      { id: 2, name: "Kitchen Organizer", brand: "NeatHome", price: 12.99, image: require("../images/general_accessories/wireless-charger.png") },
    ],
    computerAccessories: [
      { id: 1, name: "Wireless Mouse and Keyboard", brand: "TechGear", price: 15.99, image: require("../images/computer_accessories/keyboardandmouse.PNG")  },
      { id: 2, name: "Portable Solid State Drive 500GB", brand: "TypeMaster", price: 45.99, image: require("../images/computer_accessories/ssd-drives.PNG")  },
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="products">
      <h1 className="text-center my-4">Our Products</h1>
      <nav className="category-nav d-flex justify-content-center mb-4">
        {Object.keys(categorizedProducts).map((category) => (
          <button
            key={category}
            className={`btn btn-outline-primary mx-2 ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          </button>
        ))}
      </nav>
      <div className="container">
        {activeCategory === "ladiesHairAndCosmetics" ? (
          <CategoryDisplay products={categorizedProducts[activeCategory]} />
        ) : (
          <div className="row">
            {categorizedProducts[activeCategory].map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src={product.image} alt={product.name} className="card-img-top product-image" style={{ objectFit: 'cover', height: '350px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Brand: {product.brand}</p>
                    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;