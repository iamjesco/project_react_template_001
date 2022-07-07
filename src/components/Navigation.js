import React from 'react';

function Navigation(props) {
	return (
		<nav className="navigation">
			<div className="container navigation-container">
			<a href="#hero" className="navigation-logo">Random Logo</a>
				<ul className="navigation-list">
					<li><a href="">About</a></li>
					<li><a href="">Projects</a></li>
					<li><a href="">Contact</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;