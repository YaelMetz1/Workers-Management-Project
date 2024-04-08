import { Request, Response } from "express";
import  BaseService from "../services/BaseService";
import  {GeneralType}  from "../types/generalType/GeneralType";

export abstract class BaseController<T extends GeneralType>{
    protected service: BaseService<T>;

    constructor(service: BaseService<T>) {
        this.service = service;
    }

    getById=async (req: Request, res: Response)=> {
        try {
          const entity = await this.service.getById(+(req.params.id));
          res.status(200).json(entity);
        } catch (error) {
          res.status(400).json({ error: error });
        }
      }
      
      getAll = async (req: Request, res: Response)=> {
        try {
          const entitys = await this.service.getAll();
          res.status(200).json(entitys);
        } catch (error) {
          res.status(400).json({ error: error });
        }
      }
      
      create=async (req: Request, res: Response)=> {
        try {
          const entity = await this.service.create(req.body);
          res.status(200).json(entity);
        } catch (error) {
          res.status(400).json({ error: error });
        }
      }
      
      update=async (req: Request, res: Response)=> {
        try {
          const entity = await this.service.update(req.body);
          res.status(200).json(entity);
        } catch (error) {
          res.status(400).json({ error: error });
        }
      }
      
      delete=async (req: Request, res: Response)=>{
        try {
          const entity = await this.service.delete(+(req.params.id));
        } catch (error) {
          res.status(400).json({ error: error });
        }
      }
}