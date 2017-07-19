

const reducer = (state="大连",payload={})=>{
	console.log(payload);
	let{type,info} = payload;
	switch (type) {
		case "WPCHANGE":
			return info;
			break;
		default:
			// statements_def
			break;
	}
	return state
}

export default reducer;