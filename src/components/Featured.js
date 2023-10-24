'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import User from '@/assets/images/image.jpeg'
import Elmer from '@/assets/images/elmer.jpeg'
import Sheena from '@/assets/images/sheena.jpeg'
import Criticism from '@/assets/images/Internal_Criticism.png'
import Katipunan from '@/assets/images/katipunan.jpeg'
import Alfred1 from '@/assets/images/alfred1.jpeg'

export default function Featured() {
	const router = useRouter()

	return (
		<div className="hidden w-1/3 md:flex flex-col gap-6  sticky top-0 z-5">
			<h3 className="text-2xl	font-bold pb-3 mb-3 border-b-4 border-sky-600">Featured Blogs</h3>
			<div
				className="w-full min-h-[70px] flex gap-3 p-2 rounded cursor-pointer hover:bg-gray-900 transition ease-in-out hover:scale-[1.03]"
				onClick={() => {
					router.push('/internal-criticism')
				}}
			>
				<Image
					src={Criticism}
					alt="Rounded avatar"
					className="w-[30%] h-auto"
				/>
				<div className="w-[70%] flex flex-col gap-3 justify-between">
					<span className="font-bold">Internal Criticism</span>
					<div className="flex gap-3 items-center text-xs">
						<Image
							className="w-6 h-6 rounded-full"
							src={Elmer}
							alt="Rounded avatar"
						/>
						<span className="text-sky-600 pr-2 border-r-[1px]">E. Mativo</span>
						<span>Oct 03 2023 - 9:48 am</span>
					</div>
				</div>
			</div>
			<div
				className="w-full min-h-[70px] flex gap-3 p-2 rounded cursor-pointer hover:bg-gray-900 transition ease-in-out hover:scale-[1.03]"
				onClick={() => {
					router.push('/cry-at-pugad-lawin')
				}}
			>
				<Image
					src={Katipunan}
					alt="Rounded avatar"
					className="w-[30%] h-auto"
				/>
				<div className="w-[70%] flex flex-col gap-3 justify-between">
					<span className="font-bold">Cry at Pugad Lawini</span>
					<div className="flex gap-3 items-center text-xs">
						<Image
							className="w-6 h-6 rounded-full"
							src={User}
							alt="Rounded avatar"
						/>
						<span className="text-sky-600 pr-2 border-r-[1px]">RJ Yanson</span>
						<span>Oct 03 2023 - 9:48 am</span>
					</div>
				</div>
			</div>
			<div
				className="w-full min-h-[70px] flex gap-3 p-3 rounded cursor-pointer hover:bg-gray-900 transition ease-in-out hover:scale-[1.03]"
				onClick={() => {
					router.push('/alfred-mccoys-philippine-cartoon')
				}}
			>
				<Image
					src={Alfred1}
					alt="Rounded avatar"
					className="w-[30%] h-auto"
				/>
				<div className="w-[70%] flex flex-col gap-3 justify-between">
					<span className="font-bold">Alfred Mccoy&apos;s Philippine Cartoon</span>
					<div className="flex gap-3 items-center text-xs">
						<Image
							className="w-6 h-6 rounded-full"
							src={Sheena}
							alt="Rounded avatar"
						/>
						<span className="text-sky-600 pr-2 border-r-[1px]">S. Mansueto</span>
						<span>Oct 03 2023-9:48am</span>
					</div>
				</div>
			</div>
		</div>
	)
}
