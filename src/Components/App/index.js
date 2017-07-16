import React,{Component} from "react";
import "./index.scss";
import My from "../My/index";
import {
	NavLink
} from "react-router-dom";



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
				<header>
					<div className="position">
						<NavLink to="/position" activeClassName="myselected">大连</NavLink>
					</div>
					<div className="title">猫眼电影</div>
					<div></div>
				</header>

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