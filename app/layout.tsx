import {Nunito} from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"

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
      <body className={nunito.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
