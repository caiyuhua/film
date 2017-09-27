import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";
import {connect} from "react-redux";


class Position extends Component{
	constructor(props){
		super(props);
		this.state={
			isShow:"hide",
			currentIndex:"0",
			currentNumber:"0",
		}
	}

	render(){
		return (
			<div id="position">
				<ul id="_city">
					<li data-index="0" onClick={this.aClick.bind(this)}>热门城市<i className="iconfont">&#xe6a6;</i></li>
						<ul className={this.state.currentIndex=="0"?"show":"hide"}>
						<li data-number="11" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">北京</NavLink></li>
						<li data-number="12" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">上海</NavLink></li>
						<li data-number="13" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">深圳</NavLink></li>
						<li data-number="14" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">天津</NavLink></li>
						<li data-number="15" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">杭州</NavLink></li>
						</ul>
					<li data-index="1" onClick={this.aClick.bind(this)}>A<i className="iconfont">&#xe6a6;</i></li>
						<ul className={this.state.currentIndex=="1"?"show":"hide"}>
						<li data-number="21" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">安阳</NavLink></li>
						<li data-number="22" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">安溪</NavLink></li>
						<li data-number="23" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">澳门</NavLink></li>
						<li data-number="24" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">安平</NavLink></li>
						<li data-number="25" onClick={this.bClick.bind(this)}><NavLink to="/App" activeClassName="selected">安顺</NavLink></li>
						</ul>
					<li data-index="2" onClick={this.aClick.bind(this)}>B<i className="iconfont">&#xe6a6;</i></li>
						<ul className={this.state.currentIndex=="2"?"show":"hide"}>
						<li><NavLink to="/App" activeClassName="selected">北京</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">保定</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">包头</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">本溪</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">北海</NavLink></li>
						</ul>
					<li data-index="3" onClick={this.aClick.bind(this)}>C<i className="iconfont">&#xe6a6;</i></li>
						<ul className={this.state.currentIndex=="3"?"show":"hide"}>
						<li><NavLink to="/App" activeClassName="selected">重庆</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">长沙</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">长春</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">沧州</NavLink></li>
						<li><NavLink to="/App" activeClassName="selected">从化</NavLink></li>
						</ul>
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
	aClick(ev){
		this.setState({
			isShow:!this.state.isShow,
			currentIndex:ev.target.dataset.index
		})
	}
	bClick(ev){
		this.props.change(ev.target.innerHTML);
		this.setState({
			currentNumber:ev.target.dataset.number,
		})
	}
}

export default connect(
	null,
	{
		change:(city)=>{
			return {
				type:"WPCHANGE",
				info:city
			}
		}
	}
	)(Position);