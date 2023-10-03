import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import User from '@/assets/images/image.jpeg'
import PugadLawin from '@/assets/images/pugadLawin.jpeg'
import Katipunan from '@/assets/images/katipunan.jpeg'
import Featured from '@/components/Featured'

export default function Page() {
	return (
		<div className="flex gap-14 relative">
			<div className="w-2/3 flex flex-col gap-20">
				<Header
					title={'Cry of Pugad Lawin'}
					image={User}
					src="https://www.facebook.com/rajay.yanson/"
					author={'RJ Yanson'}
					datetime={'Oct 03 2023 - 9:48 am PT'}
				/>
				<div className="w-full flex flex-col gap-3">
					<div className="flex gap-4 mb-36">
						<span className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
							The <span className="text-sky-600 font-bold italic mr-2">&quot;Cry of Pugad Lawin&quot; </span> heralded the official start of the
							Philippine Revolution against Spain. The insurrection rose in vigor and expanded to eight provinces, including Manila, Bulacan, Cavite,
							Pampanga, Tarlac, Laguna, Batangas, and Nueva Ecija, which were subsequently represented by the eight sun rays of the current Filipino
							flag. heralded the official start of the Philippine Revolution against Spain. The insurrection rose in vigor and expanded to eight
							provinces, including Manila, Bulacan, Cavite, Pampanga, Tarlac, Laguna, Batangas, and Nueva Ecija, which were subsequently represented
							by the eight sun rays of the current Filipino flag.
						</span>
						<Image
							src={PugadLawin}
							alt={'Pugad Lawin'}
							className="w-[200px] h-auto"
						/>
					</div>

					<Link href="#">
						<Image
							src={Katipunan}
							alt={'Pugad Lawin'}
							className="w-[95%] h-auto mx-auto"
						/>
					</Link>
					<span className="my-3">
						<span className="text-sky-600 font-bold">Andrés Bonifacio</span>, leader of the Katipunan, a secret revolutionary movement that desired
						independence for the Philippines from Spanish colonial control, launched the Philippine Revolution against nearly 300 years of Spanish
						rule.
					</span>

					<span className="mb-6">
						In August 1896, the Katipuneros led by Andrés Bonifacio rose up in revolt in the sitio of Pugad Lawin in Balintawak, now part of Quezon
						City, by tearing off their <span className="text-sky-600 font-bold">&quot;cedulas&quot;</span>, which became a symbol of Filipino
						captivity. This episode, known as the <span className="text-sky-600 font-bold">&quot;Cry of Pugad Lawin&quot;</span>, is officially
						acknowledged as the beginning of the Philippine Revolution against Spain by the use of violence and weaponry.
					</span>

					<h3 className="text-2xl font-bold mt-6">DEFINITION OF THE CRY</h3>
					<span className="mb-2">
						The term <span className="text-sky-600 font-bold">&quot;cry&quot;</span> is derived from the Spanish el grito de rebelion (rebellion cry),
						or el grito for short. Thus, the Grito de Balintawak is identical to Mexico&apos;s Grito de Dolores (1810). However,{' '}
						<span className="text-sky-600 font-bold italic">&quot;el grito de rebelion&quot;</span> refers to a choice or call to revolt. Unlike the
						Filipino terms <span className="text-sky-600 font-bold">Sigaw</span> or <span className="text-sky-600 font-bold">Sigao</span>, it does not
						always imply yelling.
					</span>
					<span className="mb-2">
						Originally, the phrase &quot;cry&quot; related to the first battle between Katipunan members and Civil Guards (Guardia Civil).
					</span>
					<span className="mb-2">
						The cry may also allude to the tearing of cedulas (community tax certificates) in protest of the Spanish government.
					</span>
					<span className="mb-2">
						The cry can also be seen in the inscriptions{' '}
						<span className="text-sky-600 font-bold italic">&quot;Viva la Independencia Filipina,&quot;</span> which was actually followed by
						patriotic shouts.
					</span>

					<h3 className="text-2xl font-bold mt-6">DIFFERENT DATES AND PLACES</h3>
					<div className="rounded-xl border-l-2 border-gray-100 px-14 py-6  mt-3">
						<ul className="list-disc flex flex-col gap-4">
							<li>Various stories give different dates and locations for the Cry of Pugad Lawin.</li>
							<li>According to Olegario Diaz, an officer of the Spanish Guardia Civil, the Cry occurred on August 25, 1896 in Balintawak.</li>
							<li>
								Teodoro Kalaw, a historian, wrote in his 1925 book The Filipino Revolution that the Cry occurred during the last week of August 1896
								in Kangkong, Balintawak.
							</li>
							<li>
								Santiago Alvarez, a Katipunero and the son of Mariano Alvarez, the leader of the Magdiwang party in Cavite, reported in 1927 that the
								cry occurred on August 24, 1896 at Bahay Toro, presently in Quezon City
							</li>
							<li>
								Some of the seeming misunderstanding regarding the location stems from the dual meanings of the words &quot;Balintawak&quot; and
								&quot;caloocan&quot; at the turn of the century.
							</li>
							<li>
								From 1908 through 1963, however, this event was officially recognized as occurring on August 26 at Balintawak. In the end, the
								Philippine government declared a change from August 26 to August 23 in Pugad Lawin, Quezon City, in 1963.
							</li>
							<li>
								Andrés Bonifacio&apos;s close colleague, Po Valenzuela, declared in 1948 that the event occurred on August 23, 1896, in Pugad Lawin.
							</li>
						</ul>
					</div>

					<h3 className="text-2xl font-bold mt-10">EVENTS PRIOR TO THE CRY OF PUGAD LAWIN</h3>
					<span className="mb-2">
						Several events occurred to deepen the Filipino people&apo;s solidarity and to create a{' '}
						<span className="text-sky-600 font-bold">&quot;thirst&quot;</span> for independence.
					</span>
					<span className="mb-2">
						The Cavite Mutiny of 1872, the Martyrdom of the <span className="text-sky-600 font-bold">GOMBURZA</span>, propaganda movements, and
						various peaceful reform campaigns, Dr. Rizal&apos;s exile in Dapitan, and the establishment and discovery of the KKK or Kataastaasan,
						Kagalanggalangang Katipunan ng mga Anak ng Bayan{' '}
						<span className="text-sky-600 font-bold">(&quot;Supreme and Venerable Association of the Children of the Nation&quot;)</span> are among
						these.
					</span>

					<h3 className="text-2xl font-bold mt-10">THE KATIPUNAN</h3>
					<div className="rounded-xl border-l-2 border-gray-100 px-14 py-6 mt-3">
						<ul className="list-disc flex flex-col gap-4">
							<li>
								The Katipunan was an offshoot of the La Liga Filipina, a movement led by José Rizal (Philippines&apos; national hero) that advocated
								political reform in the Spanish colonial government.
							</li>
							<li>Rizal was banished shortly after the formation of his group and its first meeting. </li>
							<li>
								After several years of basically no constitutional reforms, Bonifacio and others gave up hope on La Liga Filipina bringing about
								peaceful reform.
							</li>
							<li>
								They abandoned the organization and centered their efforts on the Katipunan to bring about a revolution through violence and weaponry,
								led by Andres Bonifacio.
							</li>
							<li>
								On July 7, 1892, Bonifacio, Ladislaw Diwa, Deodato Arellano, and others founded the secret society, which had both male and female
								sponsors, including Bonifacio&apos;s wife, who commanded the female wing.
							</li>
							<li>
								The Katipunan, commanded by Andres Bonifacio, began the revolution, which was preceded by the Cry of Pugad Lawin, with the
								organization&apos;s goal of independence from Spain in mind.
							</li>
							<li>
								On August 19, 1896, the equipment used in printing Katipunan documents and other materials was discovered, indicating the
								Katipunan&apos;s existence.
							</li>

							<li>As a result, a series of arrests of Katipuneros occurred in Manila, and many Filipinos were detained or imprisoned.</li>
							<li>As many as 500 arrests were made, and many people fled the city for fear of being kidnapped, tortured, or killed.</li>
						</ul>
					</div>

					<h3 className="text-2xl font-bold mt-6">TEARING OF CEDULA</h3>
					<span className="mb-2">
						Not all statements describe the tearing of cédulas in the last days of August, but Agoncillo&apos;s version, which was based on later
						statements of Po Valenzuela and others who insisted that the cry occurred in Pugad Lawin rather than Balintawak, was the source of the
						Philippine government&apos;s official commemorations.
					</span>
					<span className="mb-2">Many people, including Bonifacio, had fled to Pugad Lawin.</span>
					<span className="mb-2">
						On August 23, 1896, during a meeting at Juan Ramos&apos; house, Bonifacio ordered his supporters to shred their cédulas (residence
						certificates) into pieces as a symbol of revolt against the Spanish government.
					</span>

					<span className="mb-2">
						Because of the assassinations and arrests of their fellow members in Manila, they tore up their cedulas and cried out,{' '}
						<span className="text-sky-600 font-bold italic">&quot;Long live the Philippines,&quot;</span> which became known as the Cry of Pugad Lawin
						in Philippine history.
					</span>
					<span className="mb-2">
						On the 28th, he issued a manifesto in which he urged all of their supporters in adjacent towns to arm themselves in preparation for the
						upcoming strike on Manila on August 29th.
					</span>
					<span className="mb-2">
						The insurgency developed in strength and spread to eight provinces, including Manila, Bulacan, Cavite, Pampanga, Tarlac, Laguna, Batangas,
						and Nueva Ecija, which were later represented by the eight sun rays on the current Filipino flag.
					</span>

					<h3 className="text-2xl font-bold mt-6">DEATH AND LEGACY</h3>
					<span className="mb-2">
						The Philippine Revolution began in 1896 with the Cry of the Rebellion at Pugad Lawin, which eventually resulted in Philippine independence
						in 1898.
					</span>
					<span className="mb-2">
						When General Bonifacio passed away in MarSpainagondon, Cavite, on May 10, 1897, General Emilio Aguinaldo continued the revolution.
					</span>
					<span className="mb-2">In Kawit, Cavite, on June 12, 1898, he proclaimed the nation&apos;s independence from Spain.</span>
				</div>
			</div>
			<Featured />
		</div>
	)
}
