import React from 'react';
import Logo from './components/Logo';

class NavBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			itemsMenu: [
				{
					name: 'Home',
					href: '#home',
					classItem: 'active',
				}
			]
		};
	}

	render(){
		return (
			<div className="navigator_content">
				<div className="container">
					<Logo />
					<div className="navigator">
						<div className="button_menu" title="Menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
						<ul id="menu">
							<span className="close_menu">X</span>
							<li>
								<a href="#home" className="active">
									<i className="fa fa-home"></i>
									Home
								</a>
								<div className="edge bottom"></div>
								<div className="edge right"></div>
								<div className="edge top"></div>
								<div className="edge left"></div>
							</li>
							<li>
								<a href="#projects">
									<i className="fa fa-gamepad"></i>
									Projects
								</a>
								<div className="edge bottom"></div>
								<div className="edge right"></div>
								<div className="edge top"></div>
								<div className="edge left"></div>
							</li>
							<li>
								<a href="#portafolio">
									<i className="fa fa-flask"></i>
									Portafolio
								</a>
								<div className="edge bottom"></div>
								<div className="edge right"></div>
								<div className="edge top"></div>
								<div className="edge left"></div>
							</li>
							<li>
								<a href="#contact">
									<i className="fa fa-mobile"></i>
									Contact
								</a>
								<div className="edge bottom"></div>
								<div className="edge right"></div>
								<div className="edge top"></div>
								<div className="edge left"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;