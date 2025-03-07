import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize.config";
import { Account } from "./account.model";

class Transaction extends Model {
  public id!: number;
  public fromAccountId!: number;
  public toAccountId!: number;
  public amount!: number;
}

Transaction.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fromAccountId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { model: Account, key: "id" } 
    },
    toAccountId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { model: Account, key: "id" } 
    },
    amount: { type: DataTypes.FLOAT, allowNull: false },
  },
  { sequelize, modelName: "transaction" }
);

// Relación entre cuentas y transacciones
Account.hasMany(Transaction, { foreignKey: "fromAccountId", as: "sentTransactions" });
Account.hasMany(Transaction, { foreignKey: "toAccountId", as: "receivedTransactions" });
Transaction.belongsTo(Account, { foreignKey: "fromAccountId", as: "sender" });
Transaction.belongsTo(Account, { foreignKey: "toAccountId", as: "receiver" });

export { Transaction };
