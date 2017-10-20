function face(context, targetCriteria) {
	
	let query = targetCriteria;
	
	let target = context.find(query);
	
	let direction = Util.direction(this.body.position, target.body.position);
	
	this.direction = direction;
}