module.exports = (sequelize,DataTypes)=>{
    const Companies = sequelize.define('Companies',{
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        industry:{
            type: DataTypes.STRING,
            allowNull:false
        },
        location:{
            type: DataTypes.STRING,
            allowNull:false
        },
        numberOfEmployees:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        founded:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        facebook:{
            type: DataTypes.STRING,
            allowNull:false
        },
        twitter:{
            type: DataTypes.STRING,
            allowNull:false
        },
        website:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false
        }
    })

    return Companies;
}