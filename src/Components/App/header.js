import React,{Component} from "react";
import "../../assets/iconfont/iconfont.css";
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
				<div className="back"><NavLink to="/home/movie" ><i className="iconfont icon-back"></i></NavLink></div>	
				<div className="title">猫眼电影</div>
				<div className="position">
					<NavLink to="/position" activeClassName="myselected">{this.props.wpcity}</NavLink>
				</div>
							
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