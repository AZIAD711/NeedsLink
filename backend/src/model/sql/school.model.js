import { Sequelize, DataTypes } from "sequelize"
import {statusAccount} from "../../commen/enum/status-account.js"
import {feedbackList} from "../../commen/enum/feedback-list.js"
const noData = "no data provided !"
export const School = sequelize.define(
    'School',
    {
        //  SCHOOL ID 
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"schoo_id"
        },
        //  NAME 
      name: {
            type: DataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        //  FEES
        fee:{
            type : DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        // PRICE 
        price : {
            type : DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        // PHONE NUMBR 
        phoneNumber : {
            type : DataTypes.STRING(11),
            allowNull:false,
            field:"phone_number"
        },
        // PHOTO 
        photo:{
            type : DataTypes.TEXT,
            default:noData
        },
        // EMAIL 
        email : {
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        // DESCRIPTION 
        description:{
            type : DataTypes.TEXT,
            default:noData
        },
        // LOCATION URL 
        locationUrl : {
            type : DataTypes.TEXT,
            default:noData,
            field:"location_url"
        },
        // RATE 
        rate : {
            type:DataTypes.ENUM(feedbackList.EXCELLENT,feedbackList.VERY_GOOD,feedbackList.GOOD,feedbackList.BAD),
            allowNull:false
        },
        // STATUS
        status : {
            type : DataTypes.ENUM(statusAccount.ACTIVE,statusAccount.BLOCK),
            default:statusAccount.ACTIVE
        },
        // WEBSITE URL 
        websiteUrl : {
            type : DataTypes.TEXT,
            default:noData,
            unique:true,
            field:"webiste_url"
        },
        // FACEBOOK URL 
        feacbookUrl : {
            type : DataTypes.TEXT,
            default:noData,
            unique:true,
            field:"facebook_url"
        },

    },
    {
        timestamps:true,
        tableName:"school"
    },
);
