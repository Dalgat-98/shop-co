import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logo from "../../public/images/logo.png";
import { ShoppingCart, User } from "lucide-react";
import { Container } from "./container";
import { HeaderSearch } from "./search";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header>
      <Container className="flex items-center justify-between gap-5 py-6">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">New Arrivals</Link>
          </li>
          <li>
            <Link href="/">Top Seling</Link>
          </li>
        </ul>
        <HeaderSearch />
        <div className="flex gap-4">
          <button>
            <ShoppingCart />
          </button>
          <button>
            <User />
          </button>
        </div>
      </Container>
    </header>
  );
};
