const { GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');


module.exports = (db) => {
	const UserType = new GraphQLObjectType({
		name: 'User',
		description: 'Example User Table',
		fields: () => ({
			firstName: {
				type: GraphQLString,
				description: 'First name of the user',
			},
			lastName: {
				type: GraphQLString,
				description: 'Last name of the user',
			},
			occupation: {
				type: GraphQLString,
				description: 'Occupation of the user',
			},
			friends: {
				type: new GraphQLList(UserType),
				description: 'List of users',
				resolve: (user) => user.friends.map(id => db.collection('users').findOne({_id: id}))
			}
		}),
	})

	return UserType
}
