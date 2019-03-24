module.exports = (crudedModelNames, userDefinedActions) => {

	// create separate conditional branch if crud == true
	// model names can still exist if crud is false, because
	// user could declare separate action names

	// is CRUD true and are there named actions

  let crudMaker = modelName => {

  	modelName = Object.keys(modelName)[0].toUpperCase()

    return `
    GET_${modelName} : 'GET_${modelName}',
	GET_ALL_${modelName} : 'GET_ALL_${modelName}',
	ADD_${modelName} : 'ADD_${modelName}',
	UPDATE_${modelName} : 'UPDATE_${modelName}',
	DELETE_${modelName} : 'DELETE_${modelName}',`;
  };

  let actionMaker = model => {

  	return model.Actions.reduce((a,b)=> (a += `\t${b.toUpperCase()} : '${b.toUpperCase()}',\n`), "")
  }

	return ( "export default {\n" 
			+ crudedModelNames.reduce((a, b) => (a += crudMaker(b)), "") 
			+ '\n'
			+ userDefinedActions.reduce((a,b)=> (a += actionMaker(b)), "") 
			+ "}"
			)
};
