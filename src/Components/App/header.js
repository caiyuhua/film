import React,{Component} from "react";
import {
	NavLink
} from "react-router-dom";
import {connect} from "react-redux";
class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<header>
				<div className="position">
					<NavLink to="/position" activeClassName="myselected">{this.props.wpcity}</NavLink>
				</div>
				<div className="title">猫眼电影</div>
				<div></div>
			</header>
			)
	}
}
export default connect(
	(state) =>{
		return {
			wpcity:state
		}
	}
	)(Header);