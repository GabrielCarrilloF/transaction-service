import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("¡Servidor funcionando correctamente!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
