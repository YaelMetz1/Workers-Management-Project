"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("../src/routes/UserRoutes"));
const AdminRoutes_1 = __importDefault(require("../src/routes/AdminRoutes"));
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", UserRoutes_1.default);
app.use("/api/admin", AdminRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
//# sourceMappingURL=app.js.map