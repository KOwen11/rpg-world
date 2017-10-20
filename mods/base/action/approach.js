function approach(context, targetCriteria) {
	
	// owner: string
	// tags: [string]
	let query = targetCriteria;
	
	let target = context.find(query);
	
	let route = context.getRoute(this.body.position, this.behaviors, target.body.position);
	
	//the ai cycle will pick this up and set priority
	this.missions.push("approach", route);
}