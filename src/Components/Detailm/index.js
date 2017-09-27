import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Detailm extends Component{
	constructor(props) {
		super(props);
		this.state={
			detailmlist:[],
			height:true,
			actorlist:[]
		}
	}

	componentDidMount() {
		//当前页面传来的参数通过以下方法获取
		var url = JSON.stringify(this.props.location.pathname);
		var id = JSON.parse(url.substring(10,13));

		axios.get('data.json').then(res=>{
			
			this.setState({
				detailmlist:res.data.detail[id],
				actorlist:res.data.detail[id].actor
			})
		})
		
	}

	render() {
		return (

			<div id="detailm">
				<div className="top">
					<div></div>
					<div><h3 >悟空传</h3></div>
					<div></div>
				</div>	
				<div className="head">
					{
						this.state.detailmlist?
						(
							<div>
								<img src={this.state.detailmlist.url}/>
								<div className="right">
									<h3>{this.state.detailmlist.name}</h3>
									<div>Meow</div>
									<div>{this.state.detailmlist.gut}</div>
									<div>{this.state.detailmlist.fen}</div>
									<div>{this.state.detailmlist.release}</div>
								</div>
							</div>
						)
						:
						"正在加载"
					}
				</div>
				<div className="btnBuy" onClick={()=>{
					this.props.history.push('/home/cinema')
				}}><a>立即购票</a></div>
				<div className={this.state.height?"miaoshu1":"miaoshu2"}>
					<p>电影《悟空传》改编自今何在同名小说，讲述了在大闹天宫的五百年前，未成为齐天大圣的孙悟空，不服天命，向天地诸神发起抗争的故事。这不是西游记的任何章节，这是悟空（彭于晏 饰）的故事，彼时孙悟空还不是震撼天地的齐天大圣，他只是只桀傲不驯的猴子。天庭毁掉他的花果山以掌控众生命运，他便决心跟天庭对抗，毁掉一切戒律。在天庭，孙悟空遇到不能爱的阿紫（倪妮 饰），一生的宿敌杨戬（余文乐 饰），和思念昔日爱人阿月（郑爽 饰）的天蓬（欧豪 饰），他们的身份注定永生相杀，但其实不甘命运摆布的又何止孙悟空一人？却没想到反抗却带来更大的浩劫。他们所做的一切，究竟是不知天高地厚的热血轻狂，还是无奈宿命难改的压抑绝望？难道命运真的早已注定？悟空不服，他再次挥动金箍棒，要让这诸佛都烟消云散！</p>
				</div>
				<div className="move" onClick={this.handleClick.bind(this)}><i className="iconfont icon-moreunfold"></i></div>
				<ul className="actor">
					{
						this.state.actorlist?
						(
							<li>
								<div>
									<img src={this.state.actorlist.img1}/>
									<p>{this.state.actorlist.name1}</p>
								</div>
								<div>
									<img src={this.state.actorlist.img2}/>
									<p>{this.state.actorlist.name2}</p>
								</div>
								<div>
									<img src={this.state.actorlist.img3}/>
									<p>{this.state.actorlist.name3}</p>
								</div>
								<div>
									<img src={this.state.actorlist.img4}/>
									<p>{this.state.actorlist.name4}</p>
								</div>
								<div>
									<img src={this.state.actorlist.img5}/>
									<p>{this.state.actorlist.name5}</p>
								</div>
								<img src={this.state.actorlist.img6}/>
								<img src={this.state.actorlist.img7}/>
								<img src={this.state.actorlist.img8}/>
								<img src={this.state.actorlist.img9}/>
								<img src={this.state.actorlist.img10}/>
							</li>
						)
						:
						"正在加载"
					}
					<div className="allactor">全体演职演员</div>
				</ul>
				
				
			</div>
		)
	}


	handleClick(){
		this.setState({
			height:!this.state.height
		})
	}
}

export default Detailm;