import dotenv from 'dotenv'
dotenv.config()

const dbConfig =  {
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	host: process.env.HOSTNAME,
	dialect: 'mysql',
}

export default dbConfig