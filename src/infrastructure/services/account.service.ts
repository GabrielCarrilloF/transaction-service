import { AccountModel } from "../persistence/account.model";
import { AccountRepository } from "../../domain/repositories/account.repository";
import { Account } from "../../domain/entities/account.entity";

export class AccountService implements AccountRepository {
    
    async createAccount(name: string, balance: number): Promise<Account> {
        const account = await AccountModel.create({ name, balance });
        return new Account(account.getDataValue("id"), account.getDataValue("name"), account.getDataValue("balance"));
    }

    async transfer(fromAccountId: number, toAccountId: number, amount: number): Promise<void> {
        const fromAccount = await AccountModel.findByPk(fromAccountId);
        const toAccount = await AccountModel.findByPk(toAccountId);

        if (!fromAccount || !toAccount) {
            throw new Error("One or both accounts not found.");
        }

        if (fromAccount.getDataValue("balance") < amount) {
            throw new Error("Insufficient balance.");
        }

        await fromAccount.update({ balance: fromAccount.getDataValue("balance") - amount });
        await toAccount.update({ balance: toAccount.getDataValue("balance") + amount });
    }

    async getAccountById(accountId: number): Promise<Account | null> {
        const account = await AccountModel.findByPk(accountId);
        if (!account) return null;
        return new Account(account.getDataValue("id"), account.getDataValue("name"), account.getDataValue("balance"));
    }
}
