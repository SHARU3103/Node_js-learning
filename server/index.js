const http = require("http");

const  express =require("express");


const app = express();
app.get("/", (req, res) => {
    return res.send("Hello From Home page");
});

app.get("/about", (req, res) => {
   return res.send("Hello From Home about page");

});


const myServer = http.createServer(app);
//   if (req.url === "/favicon.ico") return res.end();

//   const log = `${Date.now()}: ${req.url} New Req Received\n`;

//   const myUrl = url.parse(req.url, true);

//   fs.appendFile("log.txt", log, (err) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") return res.end("HomePage");

//         break;

//       case "/about":
//         const username = myUrl.query.myname;
//         return res.end(`Hiii, ${username}`);

//       case "/search":
//         const search = myUrl.query.search_query;
//         return res.end("Here are your results for " + search);

//       case "/signup":
//         if (req.method === "GET") return res.end("This is a signup form");
//         else if (req.method === "POST") return res.end("Success");

//         break;

//       default:
//         return res.end("404 Not Found");
//     }
//   });


myServer.listen(5000, () => console.log("server Started!"));
