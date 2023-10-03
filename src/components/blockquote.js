import React from 'react'

function Blockquote(props) {
	return (
		<>
			<blockquote className="text-lg font-semibold text-gray-100 my-6">
				<h3 className="mb-3">{props.header}</h3>
				<div className="border-l-[1px] py-3 pl-14 italic ml-14">
					<svg
						className="w-8 h-8 text-gray-600 mb-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 14"
					>
						<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
					</svg>
					{props.content}
				</div>
			</blockquote>
		</>
	)
}

export default Blockquote
