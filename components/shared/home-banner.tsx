import * as React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}
export const HomeBanner: React.FC<Props> = ({ className }) => {
  return (
    <section className="bg-slate-600">
      <Container className="custom-bg">
        <div className="max-w-[596px] flex flex-col gap-8 py-[100px]">
          <h1 className=" text-6xl font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="h-[52px] w-[210px] rounded-[64px] bg-black text-white font-medium">
            Shop Now
          </button>

          <div className="flex items-center justify-between ">
            <div className="flex flex-col items-center">
              <span className=" text-4xl font-bold">200+</span>
              <p>International Brands</p>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-4xl font-bold">2,000+</span>
              <p>High-Quality Products</p>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-4xl font-bold">30,000+</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
