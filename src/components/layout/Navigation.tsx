import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex items-center gap-8 text-sm font-medium">
      <Link href="/explore">Explore</Link>
      <Link href="/editorial">Editorial</Link>
      <Link href="/network">Network</Link>
      <Link href="/creators">For Creators</Link>
      <Link 
        href="/join"
        className="px-4 py-2 border rounded-md"
      >
        Join
      </Link>
    </nav>
  )
}
