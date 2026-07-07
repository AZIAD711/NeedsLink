// DELETE THE RECORD FROM THE DATABASE
export const deleteRecord = async ({
    databaseType = "mySql",
    tableName,
    whereClause
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await sequelize.query(
                `DELETE FROM ${tableName} WHERE ${whereClause}`
            );
            break;
        // MONGO DATABASE
        case "mongoDB":
            return await User.deleteOne(
                {
                    userId: attributes.userId
                }
            );
            break;
    }
}