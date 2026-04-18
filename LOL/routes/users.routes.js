const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/user.controller');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/logout', usersController.get_logout);

// Ruta que redirige a Google para que el usuario inicie sesión
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta a la que Google regresa con el resultado
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    (request, response) => {
        request.session.isLoggedIn = true;
        request.session.username = request.user.username;
        request.session.permisos = [];
        response.redirect('/personajes');
    }
);

module.exports = router;