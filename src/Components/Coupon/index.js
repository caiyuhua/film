import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";



class Coupon extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div id="coupon">
				<input className="quan" type='text' placeholder='请输入优惠券密码'/>
				<input className="submit" type='submit' value="添加"/>
			</div>
		)
	}

}

export default Coupon;