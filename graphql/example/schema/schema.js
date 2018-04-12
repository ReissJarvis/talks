const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const UserType = require('./user.schema')

module.exports = (db) => new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: 'Root Query Type',
		fields: () => ({
			users: {
				type: new GraphQLList(UserType(db)),
				args: {
					id: {
						type: GraphQLInt,
						defaultValue: null
					}
				},
				resolve: (root, args) => db.collection('users').find(args.id ? {_id: args.id} : {}).toArray()
			},
		})
	})
})