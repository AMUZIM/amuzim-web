import Link from "next/link"

export default function Navigation() {
  return (
    <nav>
      <div>
        <ul>
          <li><Link href="/explore">Explore</Link></li>
          <li><Link href="/editorial">Editorial</Link></li>
          <li><Link href="/future">Future</Link></li>
          <li><Link href="/network">Network</Link></li>
        </ul>
      </div>
    </nav>
  )
}
