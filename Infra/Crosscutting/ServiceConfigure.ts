import { ServiceCollection } from "https://deno.land/x/di/mod.ts";
import IUserService from "../../Domain/Services/IUserService.ts";
import UserService from "../../Application/User.service.ts";

const serviceCollection = new ServiceCollection();
const types = {
    IUserService: Symbol("IUserService")
}
export default function ServiceConfiguration(){
    serviceCollection.addScoped(types.IUserService, UserService)
}