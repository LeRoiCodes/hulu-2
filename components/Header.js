import Image from "next/image"

function Header() {
  return (
    <header>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  )
}

export default Header
