import { sequelize } from "./sequelize.config";
import { Account } from "./account.model";
import { Transaction } from "./transaction.model";

const migrate = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log(" Migración completada: Base de datos sincronizada.");
  } catch (error) {
    console.error(" Error en la migración:", error);
  }
};

migrate();
