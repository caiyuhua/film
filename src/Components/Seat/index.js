import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import mpic from "../../assets/1.jpg";
import xuan from "../../assets/3.jpg";
import ke from "../../assets/2.jpg";
import love  from "../../assets/5.jpg";
import  "../../assets/font/iconfont.css";
import {
	NavLink
} from "react-router-dom";
class Seat extends Component{
	constructor(props) {
		super(props);
		this.state = {
			sprice:35,
			color:[]
		}
		
	}
  componentDidMount(){
	

	}

	render() {
		return (
			<div id="Seat">
				<div id="seta">
					<ul className="seat-intro" >
					<li ><img  src={ke} /><span>可选</span></li>
					<li><i className="iconfont icon-zuowei"></i><span>已选</span></li>
					<li><img  src={mpic} /><span>已售</span></li>
					<li><img  src={love} /><span>情侣座</span></li>
					</ul>
				    </div>	
	            <ul id="chang">
	                
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>			      
					       <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
					       <li><img  src={mpic} /></li>
					       <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				            <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li> <li><i className="iconfont icon-zuowei"></i></li>
				           <li><img  src={mpic} /></li>
				           <li><img  src={mpic} /></li>
				            <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				          <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>			      
					       <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li><img  src={mpic} /></li>
				          <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				          <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>			      
					       <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>
				           <li onClick={this.handclick.bind(this)}><i className="iconfont icon-zuowei"></i></li>

					   
					
			   </ul> 
	   			 

		 </div>	 
		     )
          
            }
       handclick(ev){
       	console.log(ev.target);
        ev.target.style.color="green";

       }

   }

export default Seat;