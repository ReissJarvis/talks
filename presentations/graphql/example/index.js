const express = require('express')
const compression = require('compression')
const graphqlHTTP = require('express-graphql')
const MongoClient = require('mongodb').MongoClient;
const seedUserData = require('./seed-data/seed-data.module')
const schema = require('./schema/schema')

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'graphql';

// Use connect method to connect to the server
let db
return MongoClient.connect(url)
	.then(client => {
		console.log("Connected successfully to server");
		db = client.db(dbName);
		console.log("Seeding User Data");
		return seedUserData(db)
	})
	.then(result => {
		console.log(result)

		const app = express()
		app.use(compression())

		app.use('/graphql', graphqlHTTP({
			schema: schema,
			context: {
				db
			},
			graphiql: true,
		}));

		app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
	})
	.catch(err => {console.error(err)})

