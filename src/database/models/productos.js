module.exports = ( sequelize, DataTypes) => {
    const Productos = sequelize.define(
        'Productos',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            titulo: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            precio: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            img: {
                type: DataTypes.STRING(),
                allowNull: true,
            }
        },


            {
                tableName: "productos",
                timestamps: false
            }
            )
            return Productos
};