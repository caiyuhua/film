import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";
import ReactSwipe from "react-swipe";
import "../../css/swiper.min.css";
import "../../js/swiper.min.js";
import {
	NavLink
} from "react-router-dom";

class Detailc extends Component{
	constructor(props) {
		super(props);
			this.state = {
				detalist:[],
				looplist:[],
				timelist:[],
				numbeone:'悟空传',
				grade:'8.3'

		
		}
		
	}
 componentDidMount(){
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
 	
		axios.get('data.json').then(res=>{
		 		console.log(res.data.detailPage);
		 		var url = this.props.location.pathname;
		 		var di = JSON.parse(url.substring(9,13));
		 		
		 		console.log(di);
		 		this.setState({
		 			detalist:res.data.detailPage[di],
		 			timelist:res.data.time,
		 			looplist:res.data.detailPage[di].films
		 			
          

		 		})
		 		console.log(res.data.detailPage[di].films)
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
		                        <div className="swiper-container">
		                            <div className="swiper-wrapper">
		                                <div onClick={this.hclick.bind(this)} className="swiper-slide" style={{"backgroundImage":"url(http://p0.meituan.net/movie/3534d263e6bc6f85412a147c4aaf4e46667953.jpg.webp@128w_180h)"}}></div>
		                                <div onClick={this.hclick1.bind(this)} className="swiper-slide" style={{"backgroundImage":"url(http://p0.meituan.net/movie/408f53c86382da0b959941904c01c32b291291.jpg@128w_180h)"}}></div>
		                                <div onClick={this.hclick2.bind(this)} className="swiper-slide" style={{"backgroundImage":"url(http://p0.meituan.net/movie/b54ff6d86280f53abde1c46b03f6dea1977483.jpg@128w_180h)"}}></div>
		                                <div onClick={this.hclick3.bind(this)} className="swiper-slide" style={{"backgroundImage":"url(http://p1.meituan.net/movie/0dc3be00bb030c6c871496ec74a168d52823468.jpg.webp@128w_180h)"}}></div>
		                                <div onClick={this.hclick4.bind(this)} className="swiper-slide" style={{"backgroundImage":"url(http://p0.meituan.net/movie/14d327102710b25c4ad4acf33064b065104228.jpg@128w_180h)"}}></div>
		                                

		                            </div>
		                            
		                          

		                            
		                        </div>
							      
							</div>
						   
						    

							<div className="slideTitle">
							   <h5>{this.state.numbeone}</h5>
							   <span>{this.state.grade}</span>
							</div>




							<div className="slideTitle"></div>
							<p id="dtime">{this.state.detalist.data}</p>	
							<ul id="times">
                               {
						    this.state.timelist.map((item,index)=>
							<li  className="timedata"  key={item.id}>
								<p className="one">  
									<span className="timed">{item.datatime}</span>
									<span className="lange">{item.lange}</span>
									<span className="ticketPrice">{item.ticketPrice}</span>
									<span className="ticket">选座购票</span>
								</p>
								<p className="two">  
									<span className="end">{item.endtime}</span>
		                             <span className="ads">{item.ads}</span>
		                             <span className="discount">折扣卡首单特惠</span>
								</p>
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
	    hclick(){
				this.setState({
					numbeone:"悟空传",
					grade:"8.3"
				})
			}
		hclick1(){
				this.setState({
					numbeone:"神偷奶爸",
					grade:"8.8"
				})
			}
		hclick2(){
			this.setState({
				numbeone:"绣春刀",
				grade:"8.1"
			})
		}
		hclick3(){
			this.setState({
				numbeone:"深夜食堂",
				grade:"7.8"
			})
		}
		hclick4(){
			this.setState({
				numbeone:"大护法",
				grade:"8.3"
			})
		}


	}


export default Detailc;