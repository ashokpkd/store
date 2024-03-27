import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error, "fetching error");
      }
    };
    getCategories();
  }, []);
  return { categories };
};

export default useCategories;
