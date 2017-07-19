import React,{Component} from "react";
import "./index.scss";
import My from "../My/index";
import {
	NavLink
} from "react-router-dom";
import Header from "./Header"


class App extends Component{
	constructor(props){
		super(props);
		this.state={
			isShow:false,
		}
	}


	render(){
		return (
			<div id="app">
				<Header></Header>
				<div className={this.state.isShow?"show":"hide"}>
					<ul className="dalian">

					</ul>
				</div>

				<My></My>

				<section>
					{this.props.children}
				</section>
			</div>
		)
	}

}

export default App;