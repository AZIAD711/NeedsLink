import { Sequelize, DataTypes } from "sequelize"
import {feedbackList} from "../../commen/enum/feedback-list.js"
const noData = "not address provided !"
export const Parent = sequelize.define(
    'Parent',
    {
        //  PARENT ID 
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"parent_id"
        },
        //  NATIONAL ID
        nationalId: {
            type: DataTypes.STRING(14),
            allowNull:false,
            field:"national_id"
        },
        //   AADREESS
        address: {
            type: DataTypes.STRING(200),
            default : noData
        },

    },
    {
        timestamps:true,
        tableName:"parent"
    },
);
