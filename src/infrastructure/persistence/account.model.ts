import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize.config";

class Account extends Model {
  public id!: number;
  public name!: string;
  public balance!: number;
}

Account.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    balance: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
  },
  { sequelize, modelName: "account" }
);

export const AccountModel = sequelize.define("Account", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    balance: { type: DataTypes.FLOAT, allowNull: false }
});

export { Account };
