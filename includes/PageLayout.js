import Footer from './Footer';
import NavbarDefault from './Navbar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PageLayout({ children }) {
  return (
    <div className={`font-[monospace] p-5`}>
      <NavbarDefault />
      <main className='max-w-screen-2xl mx-auto py-5'>{children}</main>
      <Footer />
    </div>
  )
}
