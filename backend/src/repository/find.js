// FIND ONE RECORD FROM TABLE 
export const findOne = async ({
    databaseType = "mySql",
    tableName,
    whereClause
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await sequelize.query(
                `SELECT * FROM ${tableName} WHERE ${whereClause} LIMIT 1`
            );
            break;
        // MONGO DATABASE
        case "mongoDB":
            return await User.findOne(
                {
                    userId: attributes.userId
                }
            );
            break;
    }
}