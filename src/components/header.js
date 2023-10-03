import React from 'react'
import Image from 'next/image'

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
				<span className="text-sky-600 pr-6 border-r-[1px]">{props.author}</span>
				<span>{props.datetime}</span>
			</div>
		</div>
	)
}

export default Header
