import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <div>
      <Card style={{ width: "18rem", height: "25rem" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img
            variant="top"
            src={product.images}
            style={{ height: "15rem" }}
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Card.Title style={{ fontSize: "0.85em" }}>
            {product.title}
          </Card.Title>
          <Card.Text className=" h4">$ {product.price}</Card.Text>
          <div className="item-card-btns d-flex justify-content-between">
            <div>
              <Button
                variant=""
                style={{ backgroundColor: "darkslateblue", color: "wheat" }}
                onClick={()=>alert(`${product.title} added to cart succesfully`)}
              >
                add to cart
              </Button>
            </div>
            <div>
              <Button
                variant=""
                style={{ backgroundColor: "darkslateblue", color: "wheat" }}
                onClick={()=>alert(`${product.title} added to Favourites succesfully`)}
              >
                add to favourites
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
