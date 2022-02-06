import { UpdateCategoryService } from './../services/UpdateCategoryService';
import { Request, Response } from "express";


export class UpdateCategoryController {
    async handle(request: Request, reponse: Response){
        const { id } = request.params;
        const { name, description} = request.body;

        const service = new UpdateCategoryService();

        const result = await service.execute({ id, name, description});

        if (result instanceof Error) {
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}