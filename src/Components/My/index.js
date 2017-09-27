import React,{Component} from "react";
import "./index.scss";
import  "../../assets/iconfont/iconfont.css";

import {
	NavLink
} from "react-router-dom";


class My extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (

			<div id="admin">
				
				<div className="my">
					<NavLink to="/my/login" activeClassName="loginMy">
						<i className="iconfont icon-account"></i>
						<span>我的</span>
					</NavLink>
				</div>
				{this.props.children}
			</div>

		)
	}

}

export default My;