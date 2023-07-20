const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const path = require('path');


// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()) // allows to receive information from front end in json format
const corsOptions = {
    exposedHeaders: "Authorization"
  };
app.use(cors(corsOptions)) // allows us to communicate with APIs we create on frontend

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


