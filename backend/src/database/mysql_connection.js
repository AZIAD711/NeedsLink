import {Sequelize} from "sequelize"

// TODO : CONNECTION DETAILS OF DATABASE 
const databaseConnection = new Sequelize("needs_link", "root", "", {
    host: "127.0.0.1",
    port: 3308,
    dialect: "mysql",
    pool: 10
})
// TODO : CHECK CONNETION OF DATABASE FUNCTION 
export const checkConnectionOfDatabase = async () => {
    try {
        await databaseConnection.authenticate()
        console.log(`✅ CONNECTION OF DATABASE HAS BEEN SCCUESSFULLY 😎`)
    }
    catch (error) {
        console.log(`❌ CONNECTION OF DATABASE HAS BEEN FAILED 🥲`)
    }
}
checkConnectionOfDatabase()
