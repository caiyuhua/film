import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

class Detailm extends Component{
	constructor(props) {
		super(props);
		this.state={
			detailmlist:[]
		}
	}

	componentDidMount() {
		//当前页面传来的参数通过以下方法获取
		var url = JSON.stringify(this.props.location.pathname);
		var id = JSON.parse(url.substring(10,13));

		axios.get('data.json').then(res=>{
			this.setState({
				detailmlist:res.data.detail[id]
			})
		})
		
	}

	render() {
		return (

			<div id="detailm">
				<div className=""></div>	
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
			</div>
		)
	}
}

export default Detailm;