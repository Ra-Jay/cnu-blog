import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'CNU Blogs',
	description: 'CNU - Philippine Literature',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="w-full flex flex-col items-center">
					<Navbar />
					<div className="w-full max-w-screen-xl px-4 py-3 my-[50px]">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
