import * as React from "react";
import { Container } from "./container";
import { Reviews } from "./review";

interface Review {
  ratingReviewer: number;
  nameCustomer: string;
  confirmedCustomer: boolean;
  commentCustomer: string;
  reviewId?: string;
}

interface Props {
  className?: string;
  listReview: Review[];
}

export const CustomerReviews: React.FC<Props> = ({ className, listReview }) => {
  return (
    <section className="my-20 ">
      <Container>
        <h2 className="mb-10 text-5xl font-bold uppercase">
          OUR HAPPY CUSTOMERS
        </h2>
      </Container>
      <ul className="flex gap-5 overflow-hidden">
        {listReview.map((item, index) => (
          <li key={item.reviewId}>
            <Reviews Review={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
