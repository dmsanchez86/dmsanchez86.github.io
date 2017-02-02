import React from 'react';
import Logo from './Logo';

class NavBar extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const itemsMenu = this.props.items;
		const nameUser = this.props.name;

		console.warn(itemsMenu);

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
							<div>
								{
									itemsMenu.map(item => {
										return <ItemMenu data={item} />
									})
								}
							</div>
							
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

class ItemMenu extends React.Component {

	render(){
		return (
			<li className={this.props.data.classItem} key={this.props.data.id}>
				<a href={this.props.data.href}>
					<i className={this.props.data.favicon}></i>
					{this.props.data.name}
				</a>
				<div className="edge bottom"></div>
				<div className="edge right"></div>
				<div className="edge top"></div>
				<div className="edge left"></div>
			</li>
		);
	}
}

export default NavBar;