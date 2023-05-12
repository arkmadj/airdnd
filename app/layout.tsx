import {Nunito} from "next/font/google"
import './globals.css'

export const metadata = {
  title: 'Airdnd',
  description: 'Vacation Homes & Condo Rentals - Airdnd - Airbnb',
}

const nunito = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
