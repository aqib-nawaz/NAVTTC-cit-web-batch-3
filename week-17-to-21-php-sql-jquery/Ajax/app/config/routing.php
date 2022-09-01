<?php
use App\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Csrf\CsrfTokenManager;

$controllerPath = '../src/Controller/';

$app['csrf_manager'] = function() {
    return new CsrfTokenManager();
};
$app['password_hasher'] = function() {
    return new App\Password\Hasher();
};
$app['user_session'] = function() use ($app) {
    return new App\Session\UserSession($app['session']);
};

$app['homepage.controller'] = function() use ($app) {
    return new Controller\Homepage(
        $app['twig'],
        $app['monolog'],
        $app['em']
    );
};

$app['signup.form'] = function() use ($app) {
    return new \App\Form\SignUpForm(
        $app['csrf_manager'],
        $app['validator']
    );
};

$app['signup.controller'] = function() use ($app) {
    return new Controller\SignUp(
        $app['twig'],
        $app['monolog'],
        $app['session'],
        $app['url_generator'],
        $app['em'],
        $app['password_hasher'],
        $app['signup.form']
    );
};

$app['login.form'] = function() use ($app) {
    return new \App\Form\LoginForm(
        $app['csrf_manager'],
        $app['validator']
    );
};

$app['login.controller'] = function() use ($app) {
    return new Controller\Login(
        $app['twig'],
        $app['monolog'],
        $app['session'],
        $app['url_generator'],
        $app['em'],
        $app['password_hasher'],
        $app['login.form'],
        $app['user_session']
    );
};

$app['post.form'] = function() use ($app) {
    return new \App\Form\PostForm(
        $app['csrf_manager'],
        $app['validator']
    );
};

$app['post.controller'] = function() use ($app) {
    return new Controller\UserPost(
        $app['twig'],
        $app['url_generator'],
        $app['em'],
        $app['user_session'],
        $app['post.form']
    );
};

$app['dashboard.controller'] = function() use ($app) {
    return new Controller\Dashboard(
        $app['twig'],
        $app['session'],
        $app['user_session'],
        $app['em']
    );
};

// firewall
$userAuth = function (Request $request, Silex\Application $app) {
    if(!$app['user_session']->hasRole(\App\Model\UserRole::ROLE_USER)) {
        return new RedirectResponse(
            $app['url_generator']->generate('login')
        );
    }
};

$app->get('/', "homepage.controller:indexAction")->bind('home')->before($userAuth);
$app->get('/signup', "signup.controller:showFormAction")->bind('signup');
$app->post('/signup/registration', "signup.controller:userRegistrationAction")->bind('registration');

$app->get('/login', "login.controller:showFormAction")->bind('login');
$app->post('/login', "login.controller:loginCheckAction")->bind('login_check');
$app->get('/logout', "login.controller:logoutAction")->bind('logout');

$app->post('/post', "post.controller:submitPostAction")->bind('submit_post')->before($userAuth);
$app->get('/my-posts', "dashboard.controller:indexAction")->bind('dashboard')->before($userAuth);
