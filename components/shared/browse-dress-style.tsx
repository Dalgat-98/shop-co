import * as React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

interface Props {
  className?: string;
}

const listImageSrc = [
  {
    title: "Casual",
    height: 289,
    width: 407,
    url: "/images/home-dress-style-banner-casual-desk.png",
    alt: "Home dress style banner casual desk",
  },
  {
    title: "Formal",
    height: 289,
    width: 684,
    url: "/images/home-dress-style-banner-formal-desk.png",
    alt: "Home dress style banner formal desk",
  },
  {
    title: "Party",
    height: 289,
    width: 684,
    url: "/images/home-dress-style-banner-party-desk.png",
    alt: "Home dress style banner party desk",
  },
  {
    title: "Gym",
    height: 289,
    width: 407,
    url: "/images/home-dress-style-banner-gym-desk.png",
    alt: "Home dress style banner gym desk",
  },
];

export const BrowseDressStyle: React.FC<Props> = ({ className }) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-16 pt-[70px] px-[64px] pb-[76px] rounded-[40px] bg-[#f0f0f0]">
          <h2 className="text-5xl font-bold uppercase">
            BROWSE BY dress STYLE
          </h2>

          <div className="flex justify-center flex-wrap gap-5">
            {listImageSrc.map((item, index) => (
              <Link href={"./"} className="relative">
                <h3 className="absolute top-6 left-8 text-4xl font-bold">
                  {item.title}
                </h3>
                <Image
                  height={item.height}
                  width={item.width}
                  src={item.url}
                  alt={item.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
