import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalState from '../context/GlobalState';
import FeaturedMix from './FeaturedMix'
import Header from './Header';
import Home from './Home';
import Archive from './Archive';
import About from './About';
import Show from './Show';
import Player from './Player';
import Suggest from './Suggest';

const App = () => {
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
							<Route path="/suggest">
								<Suggest />
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
