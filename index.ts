import cors from 'cors'
import express from 'express'

const app = express();

const port = process.env.PORT || 4564;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


// Returns current datetime in utc and unix
app.get('/api', (req, res) => {
    return res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    });
});

// Returns date timestamp in unix and utc
app.get("/api/:date", function (req, res) {
    const dateParam = req.params.date;

    const date = new Date(dateParam).toString() !== 'Invalid Date' ?
        new Date(dateParam)
        : new Date(parseInt(dateParam)).toString() !== 'Invalid Date'
            ? new Date(parseInt(dateParam))
            : null

    if (!date) {
        return res.json({
            error: "Invalid Date"
        });
    }

    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});