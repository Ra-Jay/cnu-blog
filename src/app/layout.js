import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcnu.edu.ph%2Funiversity-seal-2%2F&psig=AOvVaw2EXF-xMkkFtnDdyQx6of0v&ust=1697691190045000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICcvdbm_oEDFQAAAAAdAAAAABAE',
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
