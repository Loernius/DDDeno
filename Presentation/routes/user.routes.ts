import { Router } from "https://deno.land/x/oak/mod.ts"

const router = new Router();

router.get("/user", (context) => {
    console.log("getting user list")
    context.response.body = {
        result: "getting user list"
    }
})

router.get("/user/:id", (context) => {
    if(context.params && context.params.id){
        console.log("getting user")
    } else {
        throw new Error("User id is needed")
    }
})

router.post("/user", (context) => {
    console.log("posting user")
})

router.get("/", ()=> {
    throw new Error(`Testando throw`)
})

export default router;