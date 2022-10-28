
//from heroicon
import {
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="TRENDING" Icon={BoltIcon}/>
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}/>
        <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon}/>
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
    </header>
  )
}

export default Header
