import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";
import ReactSwipe from "react-swipe";
class Detailc extends Component{
	constructor(props) {
		super(props);
			this.state = {
				detalist:[],
				looplist:[],
				timelist:[]
		
		}
		
	}
 componentDidMount(){
		axios.get('data.json').then(res=>{
		 		console.log(res.data.detailPage);
		 		var url = this.props.location.pathname;
		 		var di = JSON.parse(url.substring(9,13));
		 		console.log(di);
		 		this.setState({
		 			detalist:res.data.detailPage[di],
		 			timelist:res.data.time
		 		})
		 	   })
	}

	render() {
		return (
            
			<div id="Detail">
			
				{
					this.state.detalist?
					(
						<div id="article">
							<p>{this.state.detalist.name}</p>
							<div>
							    <p>{this.state.detalist.addres}</p><i className="iconfont icon-phone"></i>
							</div>
							<div id="slide">

							</div>
							<div className="slideTitle"></div>
							<p id="dtime">{this.state.detalist.data}</p>	
							<ul id="times">
                               {
						    this.state.timelist.map((item,index)=>
							<li  className="timedata"  key={item.id}>
							<p>{item.datatime}</p>
							<p>{item.endtime}</p>
							<p>{item.lange}</p>
							<p>{item.ads}</p>
							<p>{item.ticketPrice}</p>
							<p>折扣卡收单特惠</p>
							<p>选座购票</p>
							</li>
							
						)
					}

			   </ul>
						</div>
						


						
					)
					:
					null
			    }




			</div>
			
		)
	}
}

export default Detailc;