const express = require("express");
const userRoutes = require('./routes/user.js');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port htpp://localhost:${PORT}`);
});

app.use('/users', userRoutes);