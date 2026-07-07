// UPDATE PASSWORD IN USER TABLE
export const updatePassword = async ({
    databaseType = "mySql",
    attributes,
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await User.update(
                attributes,
                {
                    where: {
                        userId: attributes.userId
                    }
                }
            )
            break
        // MONGO DATABASE
        case "mongoDB":
            return await User.updateOne(
                {
                    userId: attributes.userId
                },
                {
                    $set: attributes
                }
            );
            break;
    }
}
// UPDATE ONE COLUMN IN TABLE
export const updateColumn = async ({
    databaseType = "mySql",
    tableName,
    columnName,
    value,
    whereClause
}) => {
    switch (databaseType) {
        // MYSQL DATABASE
        case "mySql":
            return await sequelize.query(
                `UPDATE ${tableName} SET ${columnName} = :value WHERE ${whereClause}`,
                {
                    replacements: { value }
                }
            );
            break;
        // MONGO DATABASE
        case "mongoDB":
            return await User.updateOne(
                {
                    userId: attributes.userId
                },
                {
                    $set: { [columnName]: value }
                }
            );
            break;
    }
}