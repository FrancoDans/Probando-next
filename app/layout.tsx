import { Header } from "./Components/header"
import "../Styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
