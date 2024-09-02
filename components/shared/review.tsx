import * as React from "react";

interface Review {
  ratingReviewer: number;
  nameCustomer: string;
  confirmedCustomer: boolean;
  commentCustomer: string;
  reviewId?: string;
}

interface Props {
  className?: string;
  Review: Review;
}

export const Reviews: React.FC<Props> = ({ className, Review }) => {
  return (
    <article className="w-[400px] h-[240px] gap-3 pt-6 px-8 border-[1px] rounded-[20px]">
      <div>{Review.ratingReviewer}</div>
      <div className="text-xl font-bold">
        {Review.nameCustomer}
        {Review.confirmedCustomer && <span> (Confirmed)</span>}
      </div>
      <p>{Review.commentCustomer}</p>
    </article>
  );
};
