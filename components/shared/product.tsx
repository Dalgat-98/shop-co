import * as React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

interface Props {
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

export const Product: React.FC<Props> = ({
  urlImageProduct,
  nameProduct,
  ratingProduct,
  priceProduct,
  priceActionProduct,
}) => {
  return (
    <>
      <Link href="" className="flex flex-col gap-2">
        <Image
          width={295}
          height={295}
          src={urlImageProduct}
          alt={nameProduct}
        />

        <span className="text-x  text-black font-bold">{nameProduct}</span>
        {ratingProduct && (
          <span className="text-sm text-gray-500">{ratingProduct}</span>
        )}

        <div className="flex items-center gap-2">
          <span className="text-x  text-black font-bold">
            {"$" + priceProduct}
          </span>

          {priceProduct && (
            <span className="text-2xl text-gray-200 font-bold line-through">
              {"$" + priceActionProduct}
            </span>
          )}

          {priceActionProduct && (
            <div className="rounded-[64px] py-[6px] px-3 text-xs text-red-500 bg-red-300">
              {" "}
              {Math.floor(
                ((priceProduct - priceActionProduct) / priceProduct) * 100
              )}
              %
            </div>
          )}
        </div>
      </Link>
    </>
  );
};
