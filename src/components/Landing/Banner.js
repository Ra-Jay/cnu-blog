'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '../header'
import User from '@/assets/images/image.jpeg'
import Criticism from '@/assets/images/Internal_Criticism.png'
import Katipunan from '@/assets/images/katipunan.jpeg'
import Featured from '../Featured'

function Banner() {
	const router = useRouter()
	return (
		<div className="flex w-full gap-10">
			<div
				className="w-2/3 flex flex-col p-6 gap-6 cursor-pointer rounded-lg hover:bg-gray-900 transition ease-in-out hover:scale-[1.03]"
				onClick={() => router.push('/cry-at-pugad-lawin')}
			>
				<Image
					src={Katipunan}
					alt={'katipunan'}
					className="w-full h-auto "
				/>
				<Header
					title={'Cry of Pugad Lawin'}
					image={User}
					author={'RJ Yanson'}
					datetime={'Oct 03 2023 - 9:48 am PT'}
				/>
			</div>
			<Featured />
		</div>
	)
}

export default Banner
