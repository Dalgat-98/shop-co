import * as React from "react";
import { Container } from "./container";
import { Product } from "./product";
// import qwe from "../../public/images/t-shirt-with-tape-details-desk"

interface Product {
  className?: string;
  urlImageProduct: string;
  nameProduct: string;
  ratingProduct?: number;
  priceProduct: number;
  priceActionProduct?: number;
  // colorProduct?: string[];
  // sizeProduct?: string[];
  // dressStyleProduct?: string;
  // categoryProductId?: number;
}

interface Props {
  className?: string;
  titleGroupProduct: string;
  products: Product[];
}

export const GroupProducts: React.FC<Props> = ({
  className,
  titleGroupProduct,
  products,
}) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-12 py-20">
          <h2 className="text-5xl font-bold uppercase">{titleGroupProduct}</h2>
          <ul className="flex justify-between self-stretch">
            {products.map((product, index) => (
              <li key={index + product.nameProduct}>
                <Product
                  urlImageProduct={
                    "/images/" + product.urlImageProduct + ".png"
                  }
                  nameProduct={product.nameProduct}
                  ratingProduct={product.ratingProduct}
                  priceProduct={product.priceProduct}
                  priceActionProduct={product.priceActionProduct}
                />
              </li>
            ))}
          </ul>
          <button className="text-base font-medium py-4 px-20 border-[1px] rounded-[62px]">
            View All
          </button>
        </div>
      </Container>
    </section>
  );
};
