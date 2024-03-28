import React from "react";
import Navbar from "../Components/NavbarComponent";
import useCategories from "../hooks/useCategories";
import CategoryCard from "../Components/CategoryCard";

const CategoriesPage = () => {
  const { categories } = useCategories();
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
        {categories &&
          categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
