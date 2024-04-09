import prisma from "../db/Client"
import  {GeneralType}  from "../types/GeneralType";


export default abstract class BaseService<T extends GeneralType>{

    repository: any;

    constructor(repository: any) {
        this.repository = repository;
    }

    async create(entity: any): Promise<T>{
        return await this.repository.create({
            data: entity as T,
          });
    }
    
    async getById(id: number): Promise<T | null>{
        return await this.repository.findFirst({
            where: {
                id: id,
              },
        });
    }

    async getAll(): Promise<T[]>{
        return await this.repository.findMany({
            orderBy: {
              id: "asc",
            },
          });
    }

    async update(entity: T): Promise<T>{
        return await this.repository.update({
            where: {
              id: entity.id,
            },
            data: entity,
          });
    }

    async delete(id: number): Promise<void>{
        const job = await this.repository.delete({
            where: {
              id: id,
            },
          });
    }
}