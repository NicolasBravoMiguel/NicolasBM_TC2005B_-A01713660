const express = require('express');
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
});


//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 



require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user.models');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/users/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    const nombre = profile.displayName;
    User.fetchOne(email).then(([usuarios]) => {
        if (usuarios.length > 0) {
            return done(null, usuarios[0]);
        }
        return User.saveGoogle(email, nombre).then(() => {
            return User.fetchOne(email).then(([nuevos]) => done(null, nuevos[0]));
        });
    }).catch(done);
}));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    User.fetchOne(username).then(([usuarios]) => {
        done(null, usuarios[0]);
    }).catch(done);
});

app.use(passport.initialize());
app.use(passport.session());

const csrf = require('csrf');
const csrfTokens = new csrf();

app.use((request, response, next) => {
    if (!request.session.csrfSecret) {
        csrfTokens.secret((err, secret) => {
            if (err) return next(err);
            request.session.csrfSecret = secret;
            next();
        });
    } else {
        next();
    }
});

app.use((request, response, next) => {
    request.csrfToken = () => csrfTokens.create(request.session.csrfSecret);
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return next();
    const token = request.body._csrf || request.headers['x-csrf-token'];
    if (!csrfTokens.verify(request.session.csrfSecret, token)) {
        const error = new Error('Invalid CSRF token');
        error.status = 403;
        return next(error);
    }
    next();
});

app.get('/', (request, response) => {
    response.redirect('/personajes');
});

const rutas_usuarios = require('./routes/users.routes');
app.use('/users', rutas_usuarios);
const rutas_personajes = require('./routes/personaje.routes');
app.use('/personajes', rutas_personajes);

app.use((error, request, response, next) => {
    response.status(500).send(`Error interno del servidor: ${error.stack}`);
});

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});