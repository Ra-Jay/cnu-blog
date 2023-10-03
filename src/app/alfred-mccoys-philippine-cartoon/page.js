import React from 'react'
import Image from 'next/image'
import User from '@/assets/images/image.jpeg'
import Header from '@/components/header'
import Featured from '@/components/Featured'
import Alfred1 from '@/assets/images/alfred1.jpeg'
import Alfred2 from '@/assets/images/alfred2.jpeg'
import Alfred3 from '@/assets/images/alfred3.jpeg'
import Alfred4 from '@/assets/images/alfred4.jpeg'
import Alfred5 from '@/assets/images/alfred5.jpeg'

export default function Page() {
	return (
		<div className="flex gap-14 relative">
			<div className="w-2/3 flex flex-col gap-20">
				<Header
					title={"Alfred Mccoy's Philippine Cartoon"}
					image={User}
					src="https://www.facebook.com/rajay.yanson/"
					author={'RJ Yanson'}
					datetime={'Oct 03 2023 - 9:48 am PT'}
				/>
				<div className="w-full flex flex-col gap-3">
					<span className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
						Political cartoons and caricature are a rather recent art form, which veered away from the classical art by exaggerating human features
						and poking fun at its subjects. Such art genres and techniques became a part of the print media as a form of social and political
						commentary, which usually targets persons of power and authority.
					</span>

					<h3 className="text-2xl font-bold mt-6">Introduction</h3>
					<span className="mb-2">
						<span className="text-sky-600 font-bold">Alfred McCoy</span>, a distinguished artist known for his sharp wit and keen eye, has established
						himself as a prominent figure in the realm of political caricature. Through his artwork, he fearlessly critiques the intricacies of
						political landscapes, pushing boundaries and challenging conventional perspectives.
					</span>
					<span className="mb-2">
						McCoy&apos;s caricatures serve as a powerful form of social commentary, encapsulating complex political issues in a single image. Each
						stroke of his pen is a testament to his skill in blending humor and satire with poignant insight. By exaggerating and distorting features
						of prominent figures, McCoy manages to encapsulate their essence and ideologies, providing a unique lens through which viewers can
						scrutinize the political world.
					</span>
					<span className="mb-2">
						Alfred Mccoy, together with Alfred Roces, compiled political cartoons published in newspaper dailies and periodicals in his book
						Philippine Cartoons: Political Caricature of the American Era (1900-1941)
					</span>
					<h3 className="text-2xl font-bold mt-6">Political cartoons and caricature</h3>
					<Image
						src={Alfred1}
						alt="alfred 1"
						className="w-[50%] h-auto mx-auto mt-6"
					/>
					<span className="text-sky-600 italic mx-auto mb-3">The first example was published in The Independent on May 20, 1916.</span>
					<span className="mb-2">
						The cartoon shows a politician from Tondo, named Dr. Santos, passing his crown to his brother-in-law, Dr. Barcelona. A Filipino guy (as
						depicted wearing salakot and barong tagalog) was trying to stop Santos, telling the latter to stop giving Barcelona the crown because it
						is not his to begin with.
					</span>

					<Image
						src={Alfred2}
						alt="alfred 1"
						className="w-[50%] h-auto mx-auto mt-6"
					/>
					<span className="text-sky-600 italic mx-auto mb-3">The second example was also published by The Independent on 16 June 1917. </span>
					<span className="mb-2">
						This was drawn by Fernando Amorsolo and was aimed as a commentary to the workings of Manila Police at that period. Here, we see a Filipino
						child who stole a skinny chicken because he had nothing to eat.The police officer was relentlessly pursuing the said child. A man wearing
						a salakot, labeled Juan de la Cruz, was grabbing the officer, telling him to leave the small-time pickpockets and thieves and to turn at
						the great thieves instead. He was pointing to a huge warehouse containing bulks of rice, milk, and grocery products.
					</span>

					<Image
						src={Alfred3}
						alt="alfred 1"
						className="w-[50%] h-auto mx-auto mt-6"
					/>
					<span className="text-sky-600 italic mx-auto mb-3">The third cartoon was a commentary on the unprecedented cases of colorum</span>
					<span className="mb-2">
						The Philippine Free Press published this commentary when fatal accidents involving colorum vehicles and taxis occurred too often already.
					</span>

					<Image
						src={Alfred4}
						alt="alfred 1"
						className="w-[50%] h-auto mx-auto mt-6"
					/>
					<span className="text-sky-600 italic mx-auto mb-3">The fourth cartoon depicts a cinema.</span>
					<span className="mb-2">
						A blown-up police officer was at the screen saying that couples are not allowed to neck and make love in the theater. Two youngsters
						looked horrified while an older couple seemed amused.{' '}
					</span>

					<Image
						src={Alfred5}
						alt="alfred 1"
						className="w-[50%] h-auto mx-auto mt-6"
					/>
					<span className="text-sky-600 italic mx-auto mb-3">The next cartoon was published by The Independent on 27 November 1915.</span>
					<span className="mb-2">
						Here, we see the caricature of Uncle Sam riding a chariot pulled by Filipinos wearing school uniforms. The Filipino boys were carrying
						American objects like baseball bats, whiskey, and boxing gloves. McCoy, in his caption to the said cartoon, Says that this cartoon was
						based on an event in 1907 when William Howard Taft was brought to the Manila pier riding a chariot pulled by students of Liceo de Manila.
						Such was condemned by the nationalists.
					</span>

					<span className="mb-2">
						Alfred McCoy&apos;s political caricatures stand as a testament to the potency of art as a tool for societal critique and change. Through
						his masterful use of satire, symbolism, and artistic flair, McCoy challenges conventional beliefs, forcing us to reconsider our
						understanding of politics and power dynamics. His artwork serves as an enduring reminder of the artist&apos;s responsibility to provoke
						thought and spark conversations about the world we live in.
					</span>
				</div>
			</div>
			<Featured />
		</div>
	)
}
