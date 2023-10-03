import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import { SvgIcon } from '@mui/material'
import { Search } from '@mui/icons-material'

export const Navbar = () => {
	return (
		<>
			<nav className="w-full bg-black border-gray-500 ">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<a
						href="/"
						className="flex items-center"
					>
						<Image
							src={Logo}
							alt="CNU Logo"
							className="mr-3"
							width={80}
							height={80}
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap">Cebu Normal University</span>
					</a>
					<div className="flex items-center">
						<input
							placeholder={'Search'}
							className="w-[200px] h-[35px] border-b-[0.1px] bg-black text-gray-300 px-[20px] flex items-center mr-[10px]"
						></input>
						<SvgIcon
							component={Search}
							className="cursor-pointer h-[30px] w-auto"
						/>
					</div>
				</div>
			</nav>
			<nav className="w-full bg-sky-600 text-white sticky top-0 z-10">
				<div className="max-w-screen-xl px-4 py-3 mx-auto">
					<div className="flex items-center">
						<ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
							<li>
								<a
									href="/"
									className="hover:underline"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/cry-at-pugad-lawin"
									className="hover:underline"
								>
									History
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:underline"
								>
									Media
								</a>
							</li>
							<li>
								<a
									href="/internal-criticism"
									className="hover:underline"
								>
									Politics
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
