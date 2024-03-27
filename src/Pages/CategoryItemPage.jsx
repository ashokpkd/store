import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/NavbarComponent";
import ItemCard from "../Components/ItemCard";

const CategoryItemPage = () => {
  const { id } = useParams();
  const [categoryItems, setCategoryItems] = useState(null);
  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        const data = await response.json();
        setCategoryItems(data);
        console.log(data);
      } catch (error) {
        console.error(error, "fetching error");
      }
    };
    getCategoryProducts();
  }, [id]);
  return (
    <div>
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
        {categoryItems &&
          categoryItems.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryItemPage;
