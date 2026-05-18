import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>
            <h3 className="text-lg font-semibold mb-3">
              AMUZIM
            </h3>

            <p className="text-neutral-600">
              Music Intelligence Platform
            </p>
          </div>


          {/* Navigation */}

          <div>
            <h4 className="font-medium mb-4">
              Platform
            </h4>

            <div className="flex flex-col gap-2 text-neutral-600">

              <Link href="/explore">Explore</Link>
              <Link href="/creators">Creators</Link>
              <Link href="/network">Network</Link>
              <Link href="/editorial">Editorial</Link>
              <Link href="/future">Future</Link>
              <Link href="/join">Join</Link>

            </div>
          </div>


          {/* Future */}

          <div>
            <h4 className="font-medium mb-4">
              About
            </h4>

            <div className="flex flex-col gap-2 text-neutral-600">

              <Link href="/editorial">Insights</Link>
              <Link href="/future">Future</Link>
              <Link href="/explore">Discover</Link>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-neutral-200 mt-12 pt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} AMUZIM. All rights reserved.
        </div>

      </div>

    </footer>
  )
}
