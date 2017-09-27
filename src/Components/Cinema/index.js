import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
class Cinema extends Component{
	constructor(props) {
		super(props);
			this.state = {
			playinglist:[]
		}
		
	}
componentDidMount(){
		axios.get("./data.json").then(res=>{
			console.log(res.data);
			this.setState({
				playinglist:res.data.cinime
			})
		})

	}



	render() {
		return (

			<div id="Cinema">		
				<ul className="cinma">
					{
						this.state.playinglist.map((item,index)=>
							<li key={item.id} onClick={()=>{
									this.props.history.push(`/Detailc/${item.id}`)
                                     }}>
								<p className="movename">{item.name}<span className="price">{item.price}元起</span></p>
								<p className="addre">{item.addres}<span className="dist">{item.distance}</span></p>
								<span className="seat">座</span><span className="seat">4D</span>
							</li>
							
						)
					}
				</ul>
							
			</div>
	
		)
	}
}

export default Cinema;