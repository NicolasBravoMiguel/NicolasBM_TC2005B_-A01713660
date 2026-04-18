const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/user.controller');
const User = require('../models/user.models');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/logout', usersController.get_logout);

// Ruta que redirige a Google para que el usuario inicie sesión
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta a la que Google regresa con el resultado
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    (request, response, next) => {
        request.session.isLoggedIn = true;
        request.session.username = request.user.username;
        User.getPermisos(request.user.username).then(([permisos]) => {
            request.session.permisos = permisos;
            return request.session.save(() => response.redirect('/personajes'));
        }).catch(next);
    }
);

module.exports = router;