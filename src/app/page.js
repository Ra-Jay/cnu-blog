import Banner from '@/components/Landing/Banner'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-full min-h-[100vh] float-left">
				<Banner />
			</div>
		</main>
	)
}
