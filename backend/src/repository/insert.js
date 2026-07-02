// INSERT ONE RECORD INTO TABLE
export const insertOne = async ({
    databaseType = "mySql",
    tableName,
    attributes,
}) => {
    switch (databaseType) {
        case "mySql":
            return await tableName.create(attributes)
            break

        case "mongoDB":
            return await tableName.create(attributes)
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
        case "mySql":
            return await tableName.bulkCreate(attributes)
            break

        case "mongoDB":
            return await tableName.insertMany(attributes)
            break
    }
}