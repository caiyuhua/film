import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';


class Movie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			playinglist:[],
			total:0,
			currentpage:0,
			hasMore:true
		}
		
	}

	componentDidMount(){
		axios.get("./data.json").then(res=>{
			console.log(res.data.nowplaying[0]);
			this.setState({
				playinglist:res.data.nowplaying
			})
		})

	}


	render() {
		return (

			<div id="movie">

				<InfiniteScroll
				    pageStart={0}
				    loadMore={this.handleLoadMore.bind(this)}
				    hasMore={this.state.hasMore}
				    initialLoad={false} 
				    loader={<div className="loader">正在加载 ...</div>}
				>
					<ul className="playing">
						{
							this.state.playinglist.map((item,index)=>
								<li key={item.id} onClick={()=>{
										this.props.history.push(`/detailm/${item.id}`)
									}}>
									<img src={item.imgUrl}/>
									<div className="left buy">
										<div><h3>{item.name}</h3></div>
										<div><p>{item.gut}</p></div>
										<div>{item.actor}</div>	
										<div>{item.totaytime}</div>
									</div>
									<div className="btn">
										<div>{item.fen}分</div>
										<a>购票</a>
									</div>
								</li>
							)
						}
					</ul>	
				</InfiniteScroll>		
			</div>
		)
	}


	handleLoadMore(){
		console.log('请求数据')


	}
}

export default Movie;