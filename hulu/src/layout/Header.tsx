import React from "react";
import Image from "next/image";
import HeaderIcon from "../components/HeaderIcon";
import {
  HomeIcon,
  UserIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={BoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderIcon title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Hulu"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
