import { Sequelize, DataTypes } from "sequelize"
import {feedbackList} from "../commen/enum/feedback-list.js"
import {specialisTtype} from "../commen/enum/specialist-type.js"
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
            type: DataTypes.ENUM(feedbackListkList.EXCELLENT,feedbackList.VERY_GOOD,feedbackList.GOOD,feedbackList.BAD),
            field:"feedback_list",
            allowNull:false
        },
        //   specialist_type
        specialistType: {
            type: DataTypes.ENUM(specialisTtype.AUTISM_SPECIALIST,specialisTtype.BEHAVIOR_THERAPIST,specialisTtype.DOWN_SYNDROME_SPECIALIST,specialisTtype.LEARNING_DIFFICULTIES_SPECIALIST,specialisTtype.OCCUPATIONAL_THERAPIST,specialisTtype.PSYCHOLOGIST,specialisTtype.SPECIAL_EDUCATION,specialisTtype.SPEECH_THERAPIST),
            allowNull:false,
            field:"specialist_type",
        },

    },
    {
        timestamps:true,
        tableName:"shadow"
    },
);
