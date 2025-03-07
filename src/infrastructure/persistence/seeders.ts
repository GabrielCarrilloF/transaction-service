import { sequelize } from "./sequelize.config";
import { Account } from "./account.model";
import { Transaction } from "./transaction.model";

const seedData = async () => {
  try {
    await sequelize.sync(); // Asegurar que la BD está sincronizada

    // Crear cuentas
    const account1 = await Account.create({ name: "Juan Perez", balance: 5000 });
    const account2 = await Account.create({ name: "Maria Gomez", balance: 3000 });

    // Crear una transacción de prueba
    await Transaction.create({ fromAccountId: account1.id, toAccountId: account2.id, amount: 1000 });

    console.log("Datos de prueba insertados correctamente.");
  } catch (error) {
    console.error(" Error al insertar datos de prueba:", error);
  }
};

seedData();
