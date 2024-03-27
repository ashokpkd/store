import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductDetails({ product }) {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
      <Card style={{ width: "30rem", height: "45rem" }}>
        <Card.Img
          variant="top"
          src={product.images}
          style={{ height: "18rem" }}
        />
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Card.Title style={{ fontSize: "1.5em" }}>{product.title}</Card.Title>
          <Card.Text className="h3 ">$ {product.price}</Card.Text>
          <Card.Text style={{ fontSize: "0.825rem", color: "GrayText" }}>
            {product.description}{" "}
          </Card.Text>
          <Button
            variant=""
            style={{ backgroundColor: "darkslateblue", color: "wheat" }}
            onClick={() => alert(`${product.title} purchased successfully`)}
          >
            Buy Now
          </Button>
          <Button
            variant=""
            style={{ backgroundColor: "darkslateblue", color: "wheat" }}
            onClick={() => {
              alert(`${product.title} Added to cart`);
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant=""
            style={{ backgroundColor: "darkslateblue", color: "wheat" }}
            onClick={() => {
              alert(`${product.title} Added to Favourites`);
            }}
          >
            Add to Favourites
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;
