const userSeedData = require('./users.seed')

module.exports = (db) => {
		const collection = db.collection('users')

		return collection.findOne({_id:1 })
			.then(result => {
				if(!result) {
					return collection.insertMany(userSeedData)
				}

				return Promise.resolve('Seed data already added')
			})
}