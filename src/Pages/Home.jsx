import React, { useContext } from "react";
import useProducts from "../hooks/useProducts";
import ItemCard from "../Components/ItemCard";
import Navbar from "../Components/NavbarComponent";
import "./Home.css";
function Home() {
  const { products } = useProducts();
  if (products === null) {
    return (
      <div className="loading">
        {" "}
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "16px",
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <ItemCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
