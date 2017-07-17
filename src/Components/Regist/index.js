import React,{Component} from "react";
import "./index.scss";

class Regist extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div id="regist">
				<ul>
				    <li>输入手机号></li>
					<li>输入验证码></li>
					<li>设置密码></li>
				</ul>
				<div id="tel">
				  <input type="text" placeholder="请输入手机号"/>
				</div>
				
				<input type="chexbox" id="ck"/> <p id="pp">我已阅读美团网协议</p>
				<br/>
				<button id="btn">获取验证码</button>
			</div>
		)
	}

}

export default Regist;