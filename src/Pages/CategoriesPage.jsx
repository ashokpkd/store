import React from "react";
import Navbar from "../Components/NavbarComponent";
import useCategories from "../hooks/useCategories";
import CategoryCard from "../Components/CategoryCard";

const CategoriesPage = () => {
  const { categories } = useCategories();
  console.log(categories);
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
          categories.map((category) => <CategoryCard category={category} />)}
      </div>
    </div>
  );
};

export default CategoriesPage;
