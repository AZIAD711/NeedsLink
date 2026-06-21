import { Sequelize, DataTypes } from "sequelize"
import { genderList } from "../commen/enum/gender.js"
import { educationLevel } from "../commen/enum/education-level.js"
const noData = "not provided !"
export const Kid = sequelize.define(
    'Kid',
    {
        //  KID ID 
        kidId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            field:"kid_id"
        },
        //   FULL NAME 
        fullName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            field:"full_name"
        },
        //  DATE OF BRITH 
        dateOfBrith: {
            type: DataTypes.DATE,
            allowNull: false,
            field:"date_of_brith"
        },
        // GENDER
        gender: {
            type: DataTypes.ENUM(genderList.MALE, genderList.FEMALE),
            allowNull: false,
        },
        // EDCATION LEVEL 
        educationLevel: {
            type : DataTypes.ENUM(educationLevel.PREPARATORY,educationLevel.PRIMARY,educationLevel.SECONDARY),
            allowNull:false,
            field:"eductional_level"
        },
        // medical_classfication_document
        medicalClassficationDocument : {
            type : DataTypes.TEXT,
            allowNull:false,
            field:"medical_classfication_document"
        }
    },
    {
        timestamps: true,
        tableName: "kid",
    },
);
