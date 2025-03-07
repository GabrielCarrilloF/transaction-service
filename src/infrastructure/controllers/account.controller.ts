import { Request, Response } from "express";
import { CreateAccountUseCase } from "../../application/usecases/create-account.usecase";
import { AccountService } from "../services/account.service";

const accountService = new AccountService();
const createAccountUseCase = new CreateAccountUseCase(accountService);

export class AccountController {
    static async create(req: Request, res: Response) {
        try {
            const { name, balance } = req.body;
            const account = await createAccountUseCase.execute(name, balance);
            res.status(201).json(account);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}
