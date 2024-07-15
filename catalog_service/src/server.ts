import expressApp from "./expressApp";


const PORT = process.env.port || 8080;

export const startServer = async () => {
    expressApp.listen(PORT, () => {
        console.log("Listening on:", PORT)
    })

    process.on("uncaughtException", async (err) => {
        console.log(err);
    })
}


startServer().then(()=>{
    console.log("Server is up");
})