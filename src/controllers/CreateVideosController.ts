import { Request, Response } from 'express';
import { CreateVideoService } from '../services/CreateVideoService';

export class CreateVideoController {
    async handle(request: Request, reponse: Response){
        const {name, description, category_id, duration} = request.body

        const service = new CreateVideoService();

        const result = await service.execute({
            name,
            description,
            category_id,
            duration
        });

        if (result instanceof Error) {
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}