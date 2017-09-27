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
						<li><p className="kexuan"></p><span>可选</span></li>
						<li><p className="yixuan"></p><span>已选</span> </li>
						<li><p className="yishou"></p><span>已售</span> </li>
						<li><p className="love"></p><span>情侣座</span> </li>	
						</ul>
				    </div>	
	            <ul id="chang">
	                
				         
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
                            <li className="yishou"></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
					         <li className="yishou"></li>
					          <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				            <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				            <li className="yishou"></li>
				            <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				           <li className="ke"  onClick={this.handclick.bind(this)}></li>
				            <li className="yishou"></li>
				             <li className="yishou"></li>
				          
					   
					
			   </ul> 
	   			 

		 </div>	 
		     )
          
            }
       handclick(ev){
       	console.log(ev.target);
        ev.target.style.backgroundColor="green";

       }

   }

export default Seat;