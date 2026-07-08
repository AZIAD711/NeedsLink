import { Sequelize, DataTypes } from "sequelize"
import {feedbackList} from "../../common/enum/feedback-list.js"
const noData = "not comment provided !"
export const Feedback = sequelize.define(
    'Feedback',
    {
        //  FEEDBACK ID 
        feedbackId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"feedback_id"
        },
        //  FEEDBACK LIST
        feedbackList: {
            type: DataTypes.ENUM(Object.values(feedbackList)),
            field:"feedback_list"
        },
        //   COMMENT
        comment: {
            type: DataTypes.TEXT,
            default : noData
        },

    },
    {
        timestamps:true,
        tableName:"feedback"
    },
);
