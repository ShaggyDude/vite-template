import { Tldraw } from 'tldraw'

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw persistenceKey="my-persistence-key" />
		</div>
	)
}

export default App
