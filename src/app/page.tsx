import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>AMUZIM</h1>
      <p>Music Intelligence Platform</p>

      <ul>
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/editorial">Editorial</Link></li>
        <li><Link href="/future">Future</Link></li>
        <li><Link href="/network">Network</Link></li>
      </ul>
    </main>
  )
}
