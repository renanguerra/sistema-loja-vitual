const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.FLOAT,
            image: DataTypes.STRING,
        }, {
            sequelize
        })
        
    }
    
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Produtos;
