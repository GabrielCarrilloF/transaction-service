import { Account } from "../entities/account.entity";

export interface AccountRepository {
    createAccount(name: string, balance: number): Promise<Account>;
    transfer(fromAccountId: number, toAccountId: number, amount: number): Promise<void>;
}
