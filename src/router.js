/*
路由配置模块
 */
import React from "react";
import App from "./Components/App/index";
import Home from "./Components/Home/index";
import Login from "./Components/Login/index";
import Regist from "./Components/Regist/index";
import My from "./Components/My/index";
import Movie from "./Components/Movie/index";
import Cinema from "./Components/Cinema/index";
import Position from "./Components/Position/index";


import {
	HashRouter as Router,
	Route,
	Switch, //只匹配第一个符路径条件的子组件
	Redirect
} from "react-router-dom"

const router = (
	<Router>
		<App> {/*自己写的根组件*/}
			<Switch>
				<Route path="/home" render={()=>
					<Home>
						<Switch>
							<Route path="/home/movie" component={Movie}/>
							<Route path="/home/cinema" component={Cinema}/>
							<Redirect from="/" to="/home/movie"/>
						</Switch>
					</Home>
				}/>
				<Route path="/my" render={()=>
					<My>
						<Route path="/my/login" component={Login}/>
					</My>
				}/>

				
				<Route path="/position" component={Position}/>
				<Route path="/regist" component={Regist}/>
				<Redirect from="/" to="/home"/>
			</Switch>
		</App>
	</Router>
)
/*最外层的包装模块*/
export default router;