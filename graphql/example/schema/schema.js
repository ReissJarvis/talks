const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const UserType = require('./user.schema')

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: 'Root Query Type',
		fields: () => ({
			users: {
				type: new GraphQLList(UserType),
				args: {
					id: {
						type: GraphQLInt,
						defaultValue: null
					}
				},
				resolve: (root, args, {db}) => db.collection('users').find(args.id ? {_id: args.id} : {}).toArray()
			},
		})
	})
})