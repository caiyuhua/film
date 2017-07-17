import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";



class Position extends Component{
	constructor(props){
		super(props);
		this.state={
			isShow:"hide"
		}
	}

	render(){
		return (
			<div id="position">
				<ul id="_city">
					<li onClick={this.aClick.bind(this)}>热门城市<i className="iconfont">&#xe6a6;</i></li>
					<ul className={this.state.isShow?"hide":"show"}>
						<li>北京</li>
						<li>上海</li>
						<li>深圳</li>
						<li>天津</li>
						<li>杭州</li>
					</ul>
					<li>A<i className="iconfont">&#xe6a6;</i></li>
					<li>B<i className="iconfont">&#xe6a6;</i></li>
					<li>C<i className="iconfont">&#xe6a6;</i></li>
					<li>D<i className="iconfont">&#xe6a6;</i></li>
					<li>E<i className="iconfont">&#xe6a6;</i></li>
					<li>F<i className="iconfont">&#xe6a6;</i></li>
					<li>G<i className="iconfont">&#xe6a6;</i></li>
					<li>H<i className="iconfont">&#xe6a6;</i></li>
					<li>J<i className="iconfont">&#xe6a6;</i></li>
					<li>K<i className="iconfont">&#xe6a6;</i></li>
					<li>L<i className="iconfont">&#xe6a6;</i></li>
					<li>M<i className="iconfont">&#xe6a6;</i></li>
					<li>N<i className="iconfont">&#xe6a6;</i></li>
					<li>P<i className="iconfont">&#xe6a6;</i></li>
					<li>Q<i className="iconfont">&#xe6a6;</i></li>
					<li>R<i className="iconfont">&#xe6a6;</i></li>
					<li>S<i className="iconfont">&#xe6a6;</i></li>
					<li>T<i className="iconfont">&#xe6a6;</i></li>
					<li>W<i className="iconfont">&#xe6a6;</i></li>
					<li>X<i className="iconfont">&#xe6a6;</i></li>
					<li>Y<i className="iconfont">&#xe6a6;</i></li>
					<li>Z<i className="iconfont">&#xe6a6;</i></li>
				</ul>
			</div>

		)
	}
	aClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	bClick(){
		w.location.href='你的地址'
	}
}
export default Position;