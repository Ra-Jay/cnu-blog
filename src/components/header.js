import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header(props) {
	return (
		<div>
			<h3 className="text-5xl	font-bold mb-3">{props.title}</h3>
			<div className="flex gap-6 items-center">
				<Image
					className="w-10 h-10 rounded-full"
					src={props.image}
					alt="Rounded avatar"
				/>
				<Link
					href={props.src ? props.src : '#'}
					target="_blank"
					className="text-sky-600 pr-6 border-r-[1px] hover:underline"
				>
					{props.author}
				</Link>
				<span className="pr-6 border-r-[1px]">{props.datetime}</span>
				{props.viewers && (
					<span>
						Viewers: <span className="cursor-pointer hover:underline">{props.viewers}</span>
					</span>
				)}
			</div>
		</div>
	)
}

export default Header
