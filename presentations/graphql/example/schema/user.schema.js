const { GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');

const UserType = module.exports = new GraphQLObjectType({
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
				resolve: (user, args, {db}) => user.friends.map(id => db.collection('users').findOne({_id: id}))
			}
		}),
	})
