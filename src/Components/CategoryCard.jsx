import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className=" mt-3">
      <Card style={{ width: "18rem", height: "20rem" }}>
        <Link to={`/categories/${category.id}`}>
          <Card.Img
            variant="top"
            src={category.image}
            style={{ height: "15rem" }}
          />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title style={{ fontSize: "1.25rem", color: "black" }}>
              {category.name}
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default CategoryCard;
