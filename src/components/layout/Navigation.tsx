import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex gap-8 text-sm">
      <Link href="/explore">Explore</Link>
      <Link href="/editorial">Editorial</Link>
      <Link href="/future">Future</Link>
      <Link href="/network">Network</Link>
    </nav>
  )
}
