import SassDemo from "./components/sass-demo"
import RustDemo from "./components/rust-demo"

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
			<p>More Rustlings puzzles on enums, structs, vectors and move.</p>
			<h2>Day 10</h2>
			<p>
				More Rustlings puzzles on enums and strings. The questions are sometimes a bit vague and I
				feel more muddled than I was. I think tomorrow I will solidify my definitions by creating a
				Rust cheatsheet.
			</p>
			<h2>Day 12</h2>
			<p>
				I missed yesterday due to minecraft &#129402; Today I'm making a spreadsheet of data types,
				it seems like they are infinite but slowly working through them is good. I reckon I know my
				&str vs String at least &#128527;
			</p>
			<h2>Day 13</h2>
			<p>
				More poring over Rust basics, knowing the stack and the heap which wasn't so important for
				JS. The book recommended a good exercise of programming lyrics to The Twelve Days of
				Christmas so I will try this next week.
			</p>
			<h2>Day 14</h2>
			<p>Managed some easy level Codewars kata.</p>
			<h2>Day 15</h2>
			<p>
				More Codewars kata. Currently stuck on one that wants the lowest number from an array. In JS
				I would just sort and get first index, that approach isn't working I've also seen there is a
				potential min() I could use. It's an array, I may need to mut it or make a vector first? I
				will work on this one tomorrow, otherwise did quite a lot of others and learnt some good
				methods.
			</p>
			<h2>Day 16</h2>
			<p>
				I completed yesterday's kata by mutating array then doing for loop. The best answer used
				min() like I had seen but I didn't know about unwrap(). I can't find a decent list of all
				the popular methods Rust uses so am keen to get my cheatsheet going.
			</p>
			<h2>Day 17</h2>
			<p>
				Started a cheatsheet for Rust methods{" "}
				<a href='https://github.com/Georgie-x/rust-cheatsheets' target='_blank'>
					github.com/Georgie-x/rust-cheatsheets
				</a>
			</p>
			<h2>Day 18</h2>
			<p>
				More on methods, there are a billion so I'll cut it down to top 30/50. Learnt about options
				and results and which methods are iterators.
			</p>
			<h2>Day 19</h2>
			<p>
				Codewars, used match, as, unwrap(), split_whitespace(), ceil() and format!(). Still only
				doing easy puzzles but they mainly teach a new thing each time.
			</p>
			<h2>Day 20</h2>
			<p>Codewars. Discovered nth(), next(), last(), then() and Some().</p>
			<h2>Day 21</h2>
			<p>
				Swapped to trying to do twelve days of Christmas lyrics exercise. Nice to have some stuff
				down that works but I haven't got the recursion going yet.
			</p>
			<h2>Day 22</h2>
			<p>
				I've managed to get the song lyrics working! I read that rust doesn't like recursion and to
				just do loops so I used two vectors and a for loop with a variable to stash the previous
				lines in. The grammar and formatting needs work to deal with commas and the first and second
				days being a bit different. I'm pleased I managed to do this and am interested to see if
				others used the same technique or there's some amazing chaining of methods that I missed.
			</p>
			<h2>Day 23</h2>
			<p>
				Here is my code for the twelve days of Christmas song. I've seen other solutions with
				everything as functions, I'm not sure if the way I've done it is because of JS background
				but I think the code seems neat and it works.
			</p>

			<RustDemo />
			<h2>Day 24</h2>
			<p>
				Created modules and linked them to run when selected in main, I want to do the other couple
				of Rust book puzzle suggestions then build an API.
			</p>
			<h2>Day 25</h2>
			<p>
				Started the Fibonacci sequence puzzle, harder than I imagined, I'm stuggling with my results
				being out of scope.
			</p>
			<h2>Day 26</h2>
			<p>Still doing Fibonacci &#129402;</p>
			<h2>Day 27</h2>
			<p>Did some Rust methods cheatsheets.</p>
			<h2>Day 28</h2>
			<p>
				Finished fibonacci and a quiz api, had to rely heavily on AI because every simple axum
				tutorial seemed not so simple. At least I now have working modules and can study the code.
				I'm going to finish with Rust for now, go back to a little JS and then try another language.
				I know Rust is meant to be hard but on paper it was the one I liked the best, I'm hoping
				learning some others will help in general.
			</p>
			<h2>Day 29</h2>
			<p>
				I love vanilla CSS and have been a bit reluctant to try other variants but I am going for
				Sass. I'm familiar with Tailwind and Bootstrap seems to make everything easier which maybe
				takes the fun out of things. I've converted this 100 days page to Sass and popped in some
				variables which has worked fine. I already use custom variables in CSS so tomorrow I will
				try and find the things Sass can do that CSS can't.
			</p>
			<h2>Day 30</h2>
			<p>
				Still Sassing. I tried a mixin, not sure if it's a good use case, just using arguments to
				assign colours to otherwise identical buttons. Demo below:
			</p>
			<SassDemo />

			<h2>Day 31</h2>
			<p>
				Read about Redux and Next.js, not sure which to try also there's Vue even. I'm not sure I
				want to get into anything confusing for this I just want to pick the most helpful.
			</p>
			<h2>Day 32</h2>
			<p>
				Reading React 19.2 docs to update myself as to what's changed. Doing a tutorial through
				their own IDE, but it's buggy making it doubly hard.
			</p>
			<h2>Day 33</h2>
			<p>
				Refreshing React and doing little exercises off the main{" "}
				<a href='https://react.dev/learn/'>React docs</a>.
			</p>
			<h2>Day 34</h2>
			<p>More React and randomly bought myself a little VPS.</p>
			<h2>Day 35</h2>
			<p>
				Spent a while setting up VPS, installed Ubuntu LTS on it and setup SSH for my laptop then
				updated, created user and installed firewall. So now I'm at the stage where I need to get
				nginx, Docker, a backend and a database on there to check I can hook it all up correctly. I
				plan to host backends and databases on it and a sneaky game server, if I can.
			</p>
			<h2>Day 36</h2>
			<p>
				Reading up on using my VPS for backends and db. It's been a while since I made a proper back
				end and seeded databases. I was using ElephantSQL which is now out of business so I need to
				find another way to do the same as before or find a new way. It might be easiest if I do a
				backend first with a demo database inside.
			</p>
			<h2>Day 37</h2>
			<p>
				Checking out what steps I need to take still and formulating a plan, I might have to
				practice docker first to enable me to get the bits I need onto the VPS nicely.
			</p>
			<h2>Day 38</h2>
			<p>
				Checked out docker a little but mainly looked at my old back end from training. I think I
				will try and put the highscores in for FlagIt to test everything. The table would just be
				3/4 columns name/position(optional)/date/score. There would be just 2 endpoints GET + POST
				with an conditional check as to what scores should be added.
			</p>
			<h2>Day 39</h2>
			<p>Started a backend copying Node-Express format I've used before. Going OK.</p>
			<h2>Day 40</h2>
			<p>More backend, doing model.</p>
			<h2>Day 41</h2>
			<p>More work on models and mock db for the FlagIt server.</p>
			<h2>Day 42</h2>
			<p>Working on app and errors.</p>
				<h2>Day 43</h2>
			<p>The FlagIt server is working! (tested with Insomnia), this is just local data so next will be to set up db</p>
			<h2>Day 43</h2>
			<p>I dockerised my backend and connected it to frontend, still using mock data</p>
			<h2>Day 44</h2>
			<p>Spent most of this time panicking about getting back into the VPS, but have finally done it, will add docker and the be to it next time.</p>
			<h2>Day 45</h2>
			<p>Pair programmed with Kieron for the updates to FlagIt, we managed to make it so only one of the games would be ask for a highscore.</p>
			<h2>Day 46</h2>
			<p>Took a break from server with some CSS animations. I had some using positions absolute/relative but I think I will convert to transform: translate.</p>
			<h2>Day 47</h2>
			<p>More animation! I was having fun manually programming an arc animation but found I could use offset-path to make a proper one.</p>
			<h2>Day 48</h2>
			<p>Animations again, I have a sun and a moon going across the sky with darkening sky and land, it's not quite synced up yet. It difficult because I have to allow the sun and moon to travel off the edge of the screen, so I can't just make them appear for 50% of the time each.</p>
		</div>
	)
}

export default App
