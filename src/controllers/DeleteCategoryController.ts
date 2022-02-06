import { DeleteCategoryService } from './../services/DeleteCategoryService';
import { Response, Request } from 'express';


export class DeleteCategoryController {
    async handle(request: Request, reponse:Response){
        const { id } = request.params

        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return reponse.status(400).json(result.message);
        }

        return reponse.status(204).end();
    }
}