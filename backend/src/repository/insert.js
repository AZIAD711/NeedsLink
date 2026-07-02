// INSERT ONE RECORD INTO TABLE
export const insertOne = async ({
    databaseType = "mySql",
    tableName,
    attributes,
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await tableName.create(attributes)
            break
        // MONGO DATABASE
        case "mongoDB":
            return await tableName.insertOne(attributes)
            break
    }
}
// INSERT MANY RECORDS INTO TABLE
export const insertMany = async ({
    databaseType = "mySql",
    tableName,
    attributes,
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await tableName.bulkCreate(attributes)
            break
        // MONGO DATABASE
        case "mongoDB":
            return await tableName.insertMany(attributes)
            break
    }
}