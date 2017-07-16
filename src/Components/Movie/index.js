import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

class Movie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			playinglist:[]
		}
		
	}

	componentDidMount(){
		axios.get("./data.json").then(res=>{
			console.log(res.data.nowplaying)
			this.setState({
				playinglist:res.data.nowplaying
			})
		})

	}



	render() {
		return (

			<div id="movie">		
				<ul className="playing">
					{
						this.state.playinglist.map((item,index)=>
							<li key={item.id}>
								<img src={item.imgUrl}/>
								<div className="left buy">
									<h3>{item.name}</h3>
									<p>{item.gut}</p>	
								</div>
							</li>
						)
					}
				</ul>			
			</div>
		)
	}
}

export default Movie;