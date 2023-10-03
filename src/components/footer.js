import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'

function Footer() {
	return (
		<footer className="w-full h-[300px] rounded-lg shadow bg-gray-900 mt-24">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a
						href="https://cnu.edu.ph/"
						className="flex items-center mb-4 sm:mb-0"
					>
						<Image
							src={Logo}
							alt="Flowbite Logo"
							width={80}
							height={80}
						/>
						<span className="ml-6 self-center text-2xl font-semibold whitespace-nowrap text-white">Cebu Normal University</span>
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								Licensing
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
				<span className="block text-sm sm:text-center text-gray-400">
					© 2023{' '}
					<a
						href="https://cnu.edu.ph/"
						className="hover:underline"
					>
						CNU™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default Footer
