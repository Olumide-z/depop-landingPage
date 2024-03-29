import Announcemnet from './components/announcement/Announcement'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Announcemnet />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
