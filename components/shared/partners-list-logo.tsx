import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

import versace from "../../public/images/versace-logo.svg";
import zara from "../../public/images/zara-logo.svg";
import gucci from "../../public/images/gucci-logo.svg";
import prada from "../../public/images/prada-logo.svg";
import calvin from "../../public/images/calvin-klein-svg.svg";

interface Props {
  className?: string;
}
export const PartnerListLogo: React.FC<Props> = ({ className }) => {
  return (
    <article className="h-[122px] bg-black flex items-center">
      <Container className="w-full">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link href="">
              <Image src={versace} alt="versace" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={zara} alt="versace" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={gucci} alt="versace" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={prada} alt="versace" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={calvin} alt="versace" />
            </Link>
          </li>
        </ul>
      </Container>
    </article>
  );
};
