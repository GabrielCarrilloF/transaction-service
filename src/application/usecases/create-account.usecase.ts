import { AccountRepository } from "../../domain/repositories/account.repository";

export class CreateAccountUseCase {
    constructor(private accountRepository: AccountRepository) {}

    async execute(name: string, balance: number) {
        return this.accountRepository.createAccount(name, balance);
    }
}
