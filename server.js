//uvoz modula
const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const { auth } = require('express-openid-connect');
const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 4080;
require('./db/data')

//uvoz modula s definiranom funkcionalnosti ruta
const homeRouter = require('./routes/home.routes');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: externalUrl || `https://localhost:${port}`,
  clientID: 'wqMbc1xDL6CejQZEihmbZkxaLFKdQxDI',
  issuerBaseURL: 'https://dev-8p0fwa68r7jq5z5q.us.auth0.com'
};

if (externalUrl) {
    const hostname = '127.0.0.1';
    app.listen(port, hostname, () => {
    console.log(`Server locally running at http://${hostname}:${port}/ and from
    outside on ${externalUrl}`);
    });
} else {
    http.createServer(app).listen(port, function () {
    console.log(`Server running at https://localhost:${port}/`);
    });
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//middleware - predlošci (ejs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware - statički resursi
app.use(express.static(path.join(__dirname, 'public')));

//middleware - dekodiranje parametara
app.use(express.urlencoded({ extended: true }));

//definicija ruta
app.use('/', homeRouter);

//pokretanje poslužitelja na portu 3000
app.listen(3000);


//cred za admina
//admin@proba.com
//Admin1234

//cred za usera
//user@proba.com
//User1234