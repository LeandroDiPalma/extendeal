import { render } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

describe("ProductDetail", () => {
  const product = {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: "$10.99",
    image: "https://via.placeholder.com/150"
  };

  it("renders product details", () => {
    const { getByText, getByAltText } = render(
      <ProductDetail product={product} />
    );

    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.description)).toBeInTheDocument();
    expect(getByText(product.price)).toBeInTheDocument();
    expect(getByAltText(product.name)).toBeInTheDocument();
  });
});