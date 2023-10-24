import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'
import Blockquote from '@/components/blockquote'
import User from '@/assets/images/image.jpeg'
import Elmer from '@/assets/images/elmer.jpeg'
import Criticism from '@/assets/images/Internal_Criticism.png'
import Featured from '@/components/Featured'

const InternalCrit = () => {
	const renderQuote1 = () => {
		return (
			<div>
				<p>Internal criticism is also known as higher criticism.</p>
				<p>It aims to evaluate the reliability of information within a document.</p>
				<p>Additionally, it is referred to as interpretative criticism and is associated with Hermeneutics, the study of interpretation.</p>
			</div>
		)
	}
	const renderQuote2 = () => {
		return (
			<div>
				<p>
					Hermeneutics in historical research involves restoring the meaning of a text and exploring its underlying significance rather than its
					surface aspects.
				</p>
				<p>
					Internal criticism is employed to assess a documents trustworthiness and the credibility of the information it contains, especially when
					writers may lack adequate knowledge of the current circumstances.
				</p>
			</div>
		)
	}

	return (
		<div className="flex gap-14">
			<div className="w-2/3 flex flex-col gap-20">
				<Header
					title={'INTERNAL CRITICISM'}
					image={Elmer}
					src="https://www.facebook.com/rajay.yanson/"
					author={'Elmer Mativo'}
					datetime={'Oct 03 2023 - 9:48 am PT'}
					viewers={33}
				/>

				<div className="w-full flex flex-col gap-3">
					<span className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
						Considering the misconceptions and lies about historical sources everywhere, the use of internal criticism is an instrument to enhance the
						process of validating, ensuring authenticity, and providing the legal facts of every important piece of information and data from
						historical sources today.
					</span>
					<h3 className="text-2xl font-bold mt-6">Internal Criticism</h3>
					<span className="mb-6">
						In order to assess the reliability of information found in a document, internal or higher criticism is used. The information shall be
						concerned with the authenticity of it and its objective is to determine whether or not that document has been proven trustworthy. The
						detection and determination of whether a document contains errors or lies shall be based on internal criticism. The task of reconstructing
						historical narrative is a fundamental and important one. Moreover, Internal criticism deals with interpretation of sources and is also
						called Interpretation Criticism. Thus Hermeneutics is also a term referring to the science of interpretation. When heuristics are dealing
						with an external aspect of the document, hermeneutics deals with its internal aspects.
					</span>
					<Image
						className="w-[calc(100%-12px)] h-auto mx-6"
						src={Criticism}
						alt="Rounded avatar"
					/>
					<Blockquote
						header={`According to Palliveettil, 2020:`}
						content={renderQuote1()}
					/>
					<Blockquote
						header={`According to Itao, 2020:`}
						content={renderQuote2()}
					/>
					<h3 className="text-2xl font-bold mt-3">Hermeneutics</h3>
					<span className="mb-6">
						In modern Western philosophy, hermeneutics is an area defined as the theory of interpretation. It deals with principles and procedures
						which have an impact on the interpretation of texts, in particular their interpretation. It is therefore an art to find meaning through
						hermeneutics. Theologically, the word <span className="text-sky-600 font-bold">&quot;hermeneutics&quot;</span> can be regarded as a
						translation of Greek terms hermeneuein and hmeniaia to mean interpret or interpretation. In mythology, it&apos;s associated with the Greek
						flying god Hermes, whose task is to interpret messages from Gods for humans. Traditionally, this relates to rules on interpreting texts,
						especially those of sacred and legal nature. Schleiermacher, Wilhelm Dilthey, Martin Heidegger, Hans Friedrich Nietzsche Gadorgamer and
						Paul Rico are important hermeneutical thinkers.
					</span>
					<h3 className="text-4xl font-bold mt-3">Key Themes in Hermeneutics</h3>
					<h3 className="text-2xl font-bold mt-3">Explanation</h3>
					<span>
						The validity of the text is the focus of the explanation. To illustrate, the text may be considered as a window or mirror. With window
						reading, you can get a view of the text without any influence on its origin and nature. In a mirror reading, the reader stands before the
						text in order to understand it from a particular point of view, guided by personal and social interests. The two methods have good and bad
						aspects.
					</span>
					<h3 className="text-2xl font-bold mt-6">Understanding</h3>
					<span>
						The individual parts of the text should be understood so that we can get a full understanding of what is written. Likewise, an
						understanding of the entire notion of the text is needed if parts are to be understood. It is therefore necessary to connect the thinking
						between the whole and the parts of the text for a better understanding of the text.
					</span>
					<h3 className="text-2xl font-bold mt-6">Trust and Suspicion</h3>
					<span>
						The hermeneutical trust exists from an understanding point of view when interpreting the text. It is, however, from a critical point of
						view that the hermeneutic suspicion arises. It is necessary to mix the two of them.
					</span>
					<h3 className="text-2xl font-bold mt-6">Method of Internal Criticism</h3>
					<span>
						A healthy doubt and a critical and analytical mind are more important than anything else when it comes to internal criticism. As we
						approach the historical source, there&apos;s always going to be doubt. This helps the historian to arrive at an accurate account of
						history. The cautious approach is designed to protect the researcher from mistakes. Critical analyses should be carried out on the content
						of this document. It is appropriate to divide the document into several parts. The analysis and testing of each trace shall be performed
						in isolation. To determine the nature of historic evidence and to verify its authenticity, it is necessary to use a critical method.
					</span>

					<h3 className="text-2xl font-bold mt-6">IMPORTANCE OF INTERNAL CRITICISM</h3>
					<div className="w-full grid grid-cols-2 mt-3 gap-6">
						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">HISTORIOGRAPHICAL IMPACT</h3>
							<span className="text-justify">
								Showcase how internal criticism has influenced the field of historiography and historical methodology
							</span>
						</div>
						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">REVEALING BIAS</h3>
							<span>Illustrates how critical criticism helps uncover biases, assumptions, and limitations within historical accounts.</span>
						</div>
						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">CRITICAL EXAMINATION</h3>
							<span>Represents the process of critically evaluating historical sources, narratives, and interpretations.</span>
						</div>
						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">MULTIPLE PERSPECTIVES</h3>
							<span>Emphasize the incorporation of multiple viewpoints, enriching historical exploration</span>
						</div>
						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">CHALLENGING NARRATIVES</h3>
							<span>Demonstrate how internal criticism can challenge established historical narratives and interpretation</span>
						</div>

						<div className="w-full border-l-2 p-6 border-gray-300 rounded-md">
							<h3 className="text-xl font-bold mb-3 text-sky-600">ENHANCED ACCURACY</h3>
							<span>Indicate that employing internal criticism contributes to a more accurate understanding of historical events</span>
						</div>
					</div>
				</div>
			</div>
			<Featured />
		</div>
	)
}

export default InternalCrit
