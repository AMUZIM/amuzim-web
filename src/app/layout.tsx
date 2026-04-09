import "./globals.css"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

export const metadata = {
  title: "AMUZIM",
  description: "Music Intelligence Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
