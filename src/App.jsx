import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [word, setWord] = useState(['meharaj', 'hazik', 'joe'])
	const [search, setSearch] = useState('')
	console.log(word?.indexOf(search), 'sss')

	const renderPart = (wordArray, search) => {
		if (!search) {
			return (
				<ol>
					{wordArray.map((e, i) => (
						<li key={i}>{e}</li>
					))}
				</ol>
			)
		}

		return (
			<ol>
				{wordArray.map((e, i) => {
					const parts = e.split(search)
					return (
						<li key={i}>
							{parts.map((p, i) => (
								<span key={i}>
									{i > 0 && (
										<span style={{ color: 'red' }}>
											{search}
										</span>
									)}
									{p}
								</span>
							))}
						</li>
					)
				})}
			</ol>
		)
	}

	return (
		<>
			<input
				type="search"
				onChange={(event) => setSearch(event.target.value)}
			/>
			{renderPart(word, search)}
		</>
	)
}

export default App
