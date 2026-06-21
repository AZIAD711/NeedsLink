import { Sequelize, DataTypes } from "sequelize"
import {userRole} from "../../commen/enum/role.js"
import {statusAccount} from "../../commen/enum/status-account.js"
const noData = "not provided !"
export const User = sequelize.define(
    'User',
    {
        //  USER ID 
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"user_id"
        },
        //  FIRST NAME 
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            field:"first_name"
        },
        //   LAST NAME 
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            field:"last_name"
        },
        //  FULL NAME (VIRTUAL NAME)
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`
            },
        },
        //  EMAIL 
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,

        },
        //  PASSWORD 
        password: {
            type: DataTypes.STRING(8),
            allowNull: false,
            get() {
                return  "********"
            }
        },
        // PHOTO
        photo: {
            type: DataTypes.TEXT,
            defaultValue: noData
        },
        //  PHONE NUMBER
        phoneNumber: {
            type: DataTypes.STRING(11),
            allowNull: false,
            defaultValue: noData,
            field:"phone_number"
        },
        //  ROLE
        role: {
            type: DataTypes.ENUM(userRole.PARENT,userRole.SCHOOL_ADMISSION,userRole.SCHOOL_ADMIN,userRole.SHADOW,userRole.ADMIN),
            defaultValue: userRole.PARENT
        },
        //  STATUS 
        status: {
            type: DataTypes.ENUM(statusAccount.BLOCK,statusAccount.ACTIVE),
            defaultValue: statusAccount.ACTIVE
        }

    },
    {
        timestamps:true,
        tableName:"user"
    },
);
