function give(context, targetCriteria, params) {

	let itemsToGive = params;

	let query = {
		type: "person",
		tags: targetCriteria.tags
	}
	
	//target should be a playablePerson with an inventory
	let target = context.find(query);
	
	// note: can move the target query out of these action functions. 
	// since they are all going to have it
	
	// could expand on this function by checking the range between the giver and other container before allowing the transaction
	
	return this.inventory.transfer(itemsToGive, target.inventory);
}