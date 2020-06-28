import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import UserRouter from "./routes/user.routes.ts";
const app = new Application();
app.use(oakCors())
app.use(UserRouter.routes());
export default app;