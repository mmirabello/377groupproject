const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static('public'));

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example
app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
  fetch(baseURL)
    .then(r => r.json())
    .then(data => data.map(c => c.location + "," + c.posted_speed))
    .then(data => {
        var speedCameras = [];
        data.forEach(function(thing) {
            var infoSplit = thing.split(/[\n,]+/)
            var address = infoSplit[0] + ", " + infoSplit[1].trim() + ", " + infoSplit[2].trim()
            var lat = infoSplit[5].replace("(", "").trim()
            var long = infoSplit[6].replace(")", "").trim()
            var postedSpeed = infoSplit[7]
            var enforcementSpeed = infoSplit[8]
            // var current = address + "|" + lat + "|" + long + "|" + postedSpeed
            var current = [address, lat, long, postedSpeed]
            speedCameras.push(current)
        })  

        console.log(speedCameras);
        res.send({ data: speedCameras });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));