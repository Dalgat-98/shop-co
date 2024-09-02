import {
  HomeBanner,
  PartnerListLogo,
  GroupProducts,
  BrowseDressStyle,
  CustomerReviews,
} from "@/components/shared";

interface Product {
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

let productFake: Product = {
  urlImageProduct: "t-shirt-with-tape-details-desk",
  nameProduct: "Versace T-Shirt",
  ratingProduct: 4.5,
  priceProduct: 210.99,
  priceActionProduct: 250.99,
};

let listProducts: Product[] = [
  productFake,
  productFake,
  productFake,
  productFake,
];

interface Review {
  ratingReviewer: number;
  nameCustomer: string;
  confirmedCustomer: boolean;
  commentCustomer: string;
  reviewId?: string;
}

let reviewFake: Review = {
  ratingReviewer: 4.5,
  nameCustomer: "John Doe",
  confirmedCustomer: true,
  commentCustomer:
    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
};

let listReviews: Review[] = [
  reviewFake,
  reviewFake,
  reviewFake,
  reviewFake,
  reviewFake,
  reviewFake,
];

export default function Home() {
  return (
    <>
      <HomeBanner />
      <PartnerListLogo />
      <GroupProducts products={listProducts} titleGroupProduct="New Arrivals" />
      <GroupProducts products={listProducts} titleGroupProduct="Top Selling" />
      <BrowseDressStyle />
      <CustomerReviews listReview={listReviews} />
    </>
  );
}
