const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
    'User',
    {
        // TODO : USER ID 
        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true
        },
        // TODO : FIRST NAME 
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        //  TODO : LAST NAME 
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        // TODO : FULL NAME (VIRTUAL NAME)
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`
            }
        },
        // TODO : EMAIL 
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        // TODO : PASSWORD 
        password : {
            type : DataTypes.STRING(8),
            allowNull:false,
            get(){
                return this.password * "*"
            }
        },
        // TODO : PHOTO
        photo:{
            type : DataTypes.TEXT,
        },
        // TODO : PHONE NUMBER
        phoneNumber:{
            type : DataTypes.STRING(11),
            allowNull:false,
        },
        role:{
            type:DataTypes.ENUM("parent","school-admin"),
            allowNull:false,
            defaultValue:"parent"
        }

    },
    {
    },
);
