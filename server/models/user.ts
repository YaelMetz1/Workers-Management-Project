import { Request, Response } from 'express';
import { QueryResult } from "pg";
import { db } from "../src/app";


//check if user in the db. if yes return the user if not- returns nothing
export async function checkUserExists(req: Request , res: Response) {

    const email: string=req.body.email;
    const password: string=req.body.password;

    try {
        const result: QueryResult = await db.query(`select * from users where email='${email}' and password='${password}'`);
       console.log(result);
       if(result.rows.length===0){
            res.json();
        }else{
            res.status(200).json({user: result.rows});
        }
    }
    catch(err){
        res.status(400).json(err);
    }
    // finally{
    //     await db.end();
    // }

}


//insert user into the table
export async function postUser(req: Request , res: Response) {
    type User={
        id: number,
        username: string,
        password: string,
        email: string,
        fullName: string,
        phoneNumber: string,
        city: string,
        is_admin: boolean
    };
    let user: User = req.body;
    user.username="asdfghj";

    try {
        await db.query(`INSERT INTO users (username, password, email, full_name)
    VALUES ('${user.username}', '${user.password}', '${user.email}', '${user.fullName}');`);
        console.log('user inserted succesfully.');
        res.status(201).json(user);
    } catch (error) {
        console.error('Error inserting user', error);
        res.status(400).json({ Message: "Error inserting user" });
    }
}