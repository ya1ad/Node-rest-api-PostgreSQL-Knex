const express = require("express");
const todos = require("./routes/todos");
const app = express();

app.use(express.json());
app.use("/api/v1/todo", todos);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
