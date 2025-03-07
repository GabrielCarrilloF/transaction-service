export class Transaction {
    constructor(public id: number, public fromAccountId: number, public toAccountId: number, public amount: number, public createdAt: Date) {}
}
