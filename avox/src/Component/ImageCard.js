import React, {  useState } from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = (props) => {
  const [cart, setCart] = useState(true);

  return (
    <>
      <Card style={{ width: "15rem" }} >
        <Card.Img
          variant="top"
          className="image"
          src={props.image_details.image}
        />
        <Card.Body>
          <Card.Title>{props.image_details.title}</Card.Title>
          <Card.Text>${props.image_details.price}</Card.Text>
          <Button variant="outline-dark">Buy Now</Button>
          
            {cart ? (
              <Button
                variant="outline-dark"
                className="ms-2"
                onClick={() => {
                  setCart(false);
                  console.log("addto cart");
                }}
              >
                {" "}
                Add to Cart
              </Button>
            ) : (
              <Button
                variant="outline-dark"
                className="ms-2"
                onClick={() => {
                  setCart(true);
                  console.log("remove");
                }}
              >
                {" "}
                Remove{" "}
              </Button>
            )}
          
        </Card.Body>
      </Card>
    </>
  );
};
export default ImageCard;
