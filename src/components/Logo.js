import React from 'react';

class Logo extends React.Component{
	render(){
		return(
			<div className="logo" tabIndex="1">
				<a href="#home" title="dmsanchez86 WebSite">
					<svg xmlns="http://www.w3.org/2000/svg" >
						<circle cx="29px" cy="25px" r="23px"></circle>
						<text x="-1" y="35" dx="0" dy="0">D</text>
						<text x="15" y="44" dx="7" dy="0">M</text>
					</svg>
				</a>
			</div>	
		)
	}
}

export default Logo;