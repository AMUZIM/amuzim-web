import type { Metadata } from "next"

export const metadata: Metadata = {
title: "AMUZIM",
description: "Music Intelligence Platform",
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return ( <html lang="en"> <body>{children}</body> </html>
)
}
