import { AccountRepository } from  "../domain/repositories/account.repository";

export class TransferMoneyUseCase {
    constructor(private accountRepository: AccountRepository) {}

    async execute(fromAccountId: number, toAccountId: number, amount: number) {
        return this.accountRepository.transfer(fromAccountId, toAccountId, amount);
    }
}
