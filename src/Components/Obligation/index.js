import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";



class Obligation extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div id="obligation">
				<div>还没有电影票，快去首页看看吧</div>
			</div>
		)
	}

}

export default Obligation;