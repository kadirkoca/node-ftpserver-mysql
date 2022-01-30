module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("items", {
        title:{
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        published: {
            type: DataTypes.BOOLEAN
        },
    })
    return Item
}
