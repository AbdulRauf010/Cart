import "./style.css";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { useState } from "react";

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(), // Corrected to faker.commerce.price()
    image: faker.image.url(), // Corrected to faker.image.image()
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
