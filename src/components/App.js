import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalState from '../context/GlobalState';
import FeaturedMix from './FeaturedMix'
import Header from './Header';
import Home from './Home';
import Archive from './Archive';
import About from './About';
import Show from './Show';
import Player from './Player';
import ReactGA from "react-ga";

const App = () => {

	useEffect(() => {
		ReactGA.initialize('UA-181645767-1');
		ReactGA.pageview(window.location.pathname);
	  })

	return (
		<GlobalState>
			<Route>
				<div className="flex-l justify-end">
					<FeaturedMix />
					<div className="w-50-l relative z-1">
						<Header />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/archive">
								<Archive />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/show/:slug">
								<Show />
							</Route>
						</Switch>
					</div>
				</div>
				<Player />
			</Route>
		</GlobalState>
	)
}

export default App;
