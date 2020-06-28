import server from "./Presentation/server.ts";
import "https://deno.land/x/dotenv/load.ts";
import { Houston, ConsoleTransport, FileTransport, TimeFormat, TimePrefix, Format } from 'https://deno.land/x/houston/mod.ts';
const port = Number(Deno.env.get("PORT") as string) ?? 3000

try{
    await Deno.stat(Deno.cwd() + `./logs/${Deno.env.get("STAGE")}`)

}catch (err) {
    Deno.mkdir(Deno.cwd() + `./logs/${Deno.env.get("STAGE")}`)
}

const Logger = new Houston([
    new ConsoleTransport(),
    new FileTransport(Deno.cwd() + `/logs/${Deno.env.get("STAGE")}`, undefined, {
        prefix: new TimePrefix(TimeFormat.American),
        format: Format.json
    })
])

server.addEventListener("listen", ()=>{
    console.log(`Server running on port ${port}`)
})

server.addEventListener("error", (err)=>{
    Logger.error(err.error.message)
})
await server.listen({
    port: port
})