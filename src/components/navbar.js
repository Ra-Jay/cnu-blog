'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import { SvgIcon } from '@mui/material'
import { Search } from '@mui/icons-material'

export const Navbar = () => {
	const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	return (
		<>
			<nav className="w-full bg-black border-gray-500 ">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 py-6">
					<a
						href="/"
						className="flex items-center"
					>
						{/* <Image
							src={Logo}
							alt="CNU Logo"
							className="mr-3"
							width={80}
							height={80}
						/> */}
						<span className="text-sky-600 self-center text-3xl font-semibold whitespace-nowrap">Let&apos;s Look Back</span>
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
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
									onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
								>
									Blogs
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								{isBlogDropdownOpen && (
									<div className="z-10 absolute font-normal bg-sky-500 divide-y divide-gray-100 rounded-lg shadow w-44">
										<ul
											className="py-2 text-sm text-gray-100"
											aria-labelledby="dropdownLargeButton"
										>
											<li onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}>
												<a
													href="/cry-at-pugad-lawin"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Cry at Pugad Lawin
												</a>
											</li>
											<li onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}>
												<a
													href="/internal-criticism"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Internal Criticism
												</a>
											</li>
											<li onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}>
												<a
													href="/alfred-mccoys-philippine-cartoon"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Alfred Mccoy&apos;s Philippine Cartoon
												</a>
											</li>
										</ul>
									</div>
								)}
							</li>
							<li>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
									onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								>
									Quizzes
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								{isDropdownOpen && (
									<div className="z-10 absolute font-normal bg-sky-500 divide-y divide-gray-100 rounded-lg shadow w-44">
										<ul
											className="py-2 text-sm text-gray-100"
											aria-labelledby="dropdownLargeButton"
										>
											<li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
												<a
													href="https://quizizz.com/admin/quiz/651a9c6f8a2df34d25b8dcdf?source=quiz_share"
													target="_blank"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Quiz 1
												</a>
											</li>
											<li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
												<a
													href="https://quizizz.com/admin/quiz/651a9883e5504bf20d3fc08e?source=quiz_share"
													target="_blank"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Quiz 2
												</a>
											</li>
											<li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
												<a
													href="https://quizizz.com/admin/quiz/651a91daff04f27e4b3f3fcf?source=quiz_share"
													target="_blank"
													className="block px-4 py-2 hover:bg-gray-800"
												>
													Quiz 3
												</a>
											</li>
										</ul>
									</div>
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
