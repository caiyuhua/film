import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";


class LoginAfter extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div id="loginAfter">
				<div className="top">
					<div>
						<NavLink to="/home/movie" activeClassName="selected"><i className="iconfont icon-back"></i></NavLink>
					</div>
					<div><h3 >悟空传</h3></div>
					<div className="useradmin">asdd</div>
				</div>
			</div>
		)
	}


	componentDidMount() {
		var cookie = document.cookie;
		var la = cookie.split('=');
		var user = la[3].slice(0,11);
		console.log(user);
		var useradmin = document.querySelector('.useradmin');
		useradmin.innerHTML = user;


	}

}

export default LoginAfter;