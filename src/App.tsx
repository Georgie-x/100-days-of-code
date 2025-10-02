function App() {
	return (
		<div className='content'>
			<h1>Georgina Rimmer - 100 days of code</h1>
			<h2>Day 0</h2>
			<p>
				Created readme for previous project Flagit and hosted it on portfolio website{" "}
				<a href='https://flagit.georgiex.co.uk' target='_blank'>
					Go to FlagIt Quiz
				</a>
				. Created this webpage and will host tomorrow.
			</p>
			<h2>Day 1</h2>
			<p>
				I want to be able to deploy this page automatically so I've set up GitHub Actions using this
				wizard{" "}
				<a href='https://github.com/marketplace/actions/deploy-to-hostinger' target='_blank'>
					GitHub Actions instructions
				</a>
				. It was a good wizard and everything easier than I imagined, so I hope it works &#128522;
				Also adding a bit of CSS for a black and white theme.
			</p>
			<h2>Day 2</h2>
			<p>
				I had a few troubles getting the GitHub Actions to work (adapting for vite, wrong paths and
				I presumed it would sort out branches automatically) but it is now working so I plan to
				update some of my other websites with it.
			</p>
			<h2>Day 3</h2>
			<p>
				Had a few more troubles with a broken webhook but now have two repos using GitHub Actions
				successfully. I want to try a project in js where I use tools I don't usually, also a
				simpler version in a couple of new languages - I'm thinking a quiz, which I can make easier
				or harder depending on the situation. Doing initial plans in Excalidraw.
			</p>
			<h2>Day 4</h2>
			<p>
				Had a pair coding session with Kieron about Flagit. We want to make a scoreboard and spent a
				long time watching tutorials on Firebase. We have decided to skip authentication for now as
				it's only a small quiz but still use Firebase to hold the scores. Kieron was able to test
				autodeploy of FlagIt and it was successful.
			</p>
			<h2>Day 5</h2>
			<p>
				Learning Rust with this guide{" "}
				<a href='https://doc.rust-lang.org/' target='_blank'>
					rust-lang.org/book{" "}
				</a>{" "}
				I like it so far.
			</p>
			<h2>Day 6</h2>
			<p>More Rust, hitting the trickier bits.</p>
			<h2>Day 7</h2>
			<p>
				More Rust, swapped to{" "}
				<a href='https://www.w3schools.com/rust' target='_blank'>
					W3Schools Rust Tutorial
				</a>{" "}
				for a bit of a different perspective.
			</p>
			<h2>Day 8</h2>
			<p>
				More Rust, found great exercises from{" "}
				<a href='https://github.com/rust-lang/rustlings'>Rustlings</a> which is exactly what I was
				after.
			</p>
			<h2>Day 9</h2>
			<p>
				More Rustlings puzzles on enums, structs, vectors and move.
			</p>
				<h2>Day 10</h2>
			<p>
				More Rustlings puzzles on enums and strings. The questions are sometimes a bit vague and I feel more muddled than I was. I think tomorrow I will solidify my definitions by creating a Rust cheatsheet.
			</p>
		</div>
	)
}

export default App
