import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ImageCard from "./ImageCard";
const List = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  useEffect(() => {
    async function getData() {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      setData(data);
      setProducts(data);
    }
    getData();
  }, []);
  console.log(products);
  const filter = (cat) => {
    const sort = data.filter((items) => items.category === cat);
    setProducts(sort);
  };
  return (
    <div>
      <Button
        variant="outline-secondary text-black" className="text-yellow"
        onClick={() => {
          setProducts(data);
        }}
      >
        All
      </Button>
      <Button
        variant="outline-secondary  text-black"
        onClick={() => {
          filter("electronics");
        }}
      >
        Electronic
      </Button>
      <Button
        variant="outline-secondary  text-black"
        onClick={() => {
          filter("jewelery");
        }}
      >
        Jewelery
      </Button>
      <Button
        variant="outline-secondary  text-black"
        onClick={() => {
          filter("men's clothing");
        }}
      >
        Men's Clothing
      </Button>
      <Button
        variant="outline-secondary  text-black"
        onClick={() => {
          filter("women's clothing");
        }}
      >
        Women's Clothing
      </Button>

      {
        <Container fluid className="mt-5">
          <Row>
            {products.map((single_image, id) => {
              return (
                <Col sm={4} key={id}>
                  <ImageCard image_details={single_image} />
                </Col>
              );
            })}
          </Row>
        </Container>
      }
    </div>
  );
};

export default List;
