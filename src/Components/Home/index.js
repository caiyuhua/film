import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";



class Home extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (

			<div id="home">
				<ul className="taban">
					<li>
						<NavLink to="/home/movie" activeClassName="selected">影片</NavLink>
					</li>
					<li>
						<NavLink to="/home/cinema" activeClassName="selected">影院</NavLink>
					</li>
				</ul>

				{this.props.children}
			</div>

		)
	}

}

export default Home;