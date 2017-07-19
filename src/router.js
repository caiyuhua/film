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
import Detailc from "./Components/Detailc/index";
import Detailm from "./Components/Detailm/index";
import LoginEmail from "./Components/LoginEmail/index";
import LoginTel from "./Components/LoginTel/index";
import LoginAfter from "./Components/LoginAfter/index";



import {
	HashRouter as Router,
	Route,
	Switch, //只匹配第一个符路径条件的子组件
	Redirect
} from "react-router-dom";

import {Provider} from "react-redux"
import store from "./Redux/Store/index";
const router = (
	<Provider store={store}>
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
						<Route path="/my/login" render={()=>
							<Login>
								<Route path="/my/login/loginemail" component={LoginEmail}/>
								<Route path="/my/login/logintel" component={LoginTel}/>
								<Redirect from="/my/login" to="/my/login/loginemail"/>
							</Login>
						}/>
					</My>
				}/>				
				<Route path="/position" component={Position}/>
				<Route path="/regist" component={Regist}/>
				<Route path="/detailc/:cinemaID" component={Detailc}/>
				<Route path="/detailm/:movieID" component={Detailm}/>
				<Route path="/longinafter" component={LoginAfter}/>
				longinafter
				<Redirect from="/" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)
/*最外层的包装模块*/
export default router;