import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../js/fetch.js";
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
				  <input id="sjh"  ref="username" onChange={this.telya.bind(this)} type="text" placeholder="请输入手机号"/>
				  <br/>
				  <input id="ps"  ref="password" onChange={this.mimaya.bind(this)} type="password" placeholder="请设置密码"/>
				</div>
				
				<input type="checkbox" id="ck" checked/> <p id="pp">我已阅读美团网协议</p>
				<br/>
				<p id="yanzheng">请输入有效的手机号</p>
				<p id="zh">帐号已存在</p>
				<button id="btn" onClick={this.sya.bind(this)}>获取验证码</button>
				<button id="send" onClick={this.last.bind(this)}>立即注册</button>
			</div>
		)
	}

	telya(){
		var tel=document.getElementById('sjh').value;
        var reg=/^1[0-9]{10}$/ ;
        
        var btn=document.getElementById('btn');
        if(reg.test(tel)){
        	btn.style.backgroundColor='red';
        }

	}
	sya(){
		var tel=this.refs.username.value;
		var regx=/^1[3|5|7|8][0-9]{3,9}$/;
		var password=this.refs.password.value;
		var regx2=/\d[6-8]/;
		if(regx.test(tel)){
             
			document.getElementById('ps').style.display='block';
			
            

		}else{
			document.getElementById('yanzheng').style.opacity='1';
		}
	}

	mimaya(){
		var tel=this.refs.username.value;
		var regx=/^1[3|5|7|8][0-9]{3,9}$/;
		var password=this.refs.password.value;
		var regx2=/^\d{6}/;
		if(regx.test(tel)&&regx2.test(password)){
			document.getElementById('btn').style.display='none';
			document.getElementById('send').style.display='block';
		}

		
	}

	last(){

		fetch('Index/index/regist4ajax',{
				headers: {
				    'Content-Type': 'application/x-www-form-urlencoded'
				  },
				credentials: 'include',
			  	method: 'POST',
			  	body: "username=" + this.refs.username.value+"&psw="+ this.refs.password.value
			}).then(function(res){
				return res.text();
				

			}).then(data=>{
			  console.log(data);
			  if(data==='注册成功'){
			     this.props.history.push("/my/login/loginemail");
			   }
			   if(data=='账号已存在'){
                  document.getElementById('zh').style.opacity="1";
			   }
			 }
			)
			
		}



		

	

}

export default Regist;