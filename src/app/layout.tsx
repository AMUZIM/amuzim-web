export const metadata = {
title: 'AMUZIM',
description: 'Music Intelligence Platform',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return ( <html lang="en"> <body>{children}</body> </html>
)
}
