import express from "express";
import "dotenv/config";
import routes from "./routes/routes";
import { processReservations } from "./utility/utility";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1", routes);

try {
    if (!PORT) {
        throw Error;
    }

    app.listen(PORT, () => {
        console.log(`Server is running on the ${PORT}`);
    });

} catch {
    console.log(`Not able to start server`);
    process.exit(1);
}
