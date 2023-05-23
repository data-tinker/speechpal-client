import Image from 'next/image'
import Link from "next/link"
import LogoImage from '@/images/Color-logo---no-background.png'

export function Logo() {
  return (
    <Link href="/" aria-current="page">
      <Image
        src={LogoImage}
        alt=""
        className="w-64 h-auto"
        priority
         />
    </Link>
  )
}
