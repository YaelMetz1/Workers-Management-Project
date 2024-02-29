"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.checkUserExists = void 0;
const app_1 = require("../src/app");
//check if user in the db. if yes return the user if not- returns nothing
function checkUserExists(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        try {
            const result = yield app_1.db.query(`select * from users where email='${email}' and password='${password}'`);
            console.log(result);
            if (result.rows.length === 0) {
                res.json({});
            }
            else {
                res.status(200).json({ user: result.rows });
            }
        }
        catch (err) {
            res.status(400).json(err);
        }
        // finally{
        //     await db.end();
        // }
    });
}
exports.checkUserExists = checkUserExists;
function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = req.body;
        user.username = "asdfghj";
        try {
            yield app_1.db.query(`INSERT INTO users (username, password, email, full_name)
    VALUES ('${user.username}', '${user.password}', '${user.email}', '${user.fullName}');`);
            console.log('user inserted succesfully.');
            res.status(201).json(user);
        }
        catch (error) {
            console.error('Error inserting user', error);
            res.status(400).json({ Message: "Error inserting user" });
        }
    });
}
exports.postUser = postUser;
//# sourceMappingURL=user.js.map