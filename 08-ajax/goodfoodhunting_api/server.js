const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 8080;

const { Pool } = require("pg");

//we want a pool of connection that is automatic
const pool = new Pool({
  database: "goodfoodhunting",
});
// pool.connect();

//routes - endpoints - getting all the dishes
app.get("/api/dishes", (req, res) => {
  let sql = "select * from dishes;";

  //   async function
  pool.query(sql, (err, dbRes) => {
    //inversion of control
    //   in node we have an convention, callback, error first
    res.json(dbRes.rows);
    // pool.end();
  });

  //you are not ready to reply to your client here
});

app.listen(PORT, () => {
  console.log("server is listening on port ${PORT}");
});


// httparty vs axios

// axios = used for single page app (spa)
// axios - sends requests - ajax
