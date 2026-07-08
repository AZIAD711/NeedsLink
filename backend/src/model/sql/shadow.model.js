import { Sequelize, DataTypes } from "sequelize"
import {feedbackList} from "../../common/enum/feedback-list.js"
import {specialisTtype} from "../../common/enum/specialist-type.js"
export const Shadow = sequelize.define(
    'Shadow',
    {
        //  SHADOW ID 
        shadowId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"shadow_id"
        },
        //  FEEDBACK LIST 
      feedbackList: {
            type: DataTypes.ENUM(Object.values(feedbackList)),
            field:"feedback_list",
            allowNull:false
        },
        //   specialist_type
        specialistType: {
            type: DataTypes.ENUM(Object.values(specialisTtype)),
            allowNull:false,
            field:"specialist_type",
        },

    },
    {
        timestamps:true,
        tableName:"shadow"
    },
);
