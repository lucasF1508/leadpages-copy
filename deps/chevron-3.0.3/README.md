# Chevron (JavaScript)

Chevron is an authentication library using security Tokens. For full API documentation, you can read the generated docs by cloning the repo and opening `./docs/index.html`.

## Getting Started

### Installing
Chevron is intended to be installed as a node module by [npm](https://www.npmjs.com/). It also supports [jspm](http://jspm.io/) as an es6 module. It is published on the private Leadpages registry as `@lp/chevron`

To set up the Leadpages registry with your local npm, run

    npm login --registry http://npm.leadpages.io:8080 --scope @lp

And use the login credentials for your @ave81 email account that you use in the [default test environment](https://my.leadpagestest.net/). You can then `npm install` the package with

    `npm install @lp/chevron`

Alternatively, you may clone the repo and build the module yourself using

    $npm run build

and run the tests with

    $npm run tests


### Usage
To use chevron, instantiate a new chevron object.

    var chevron = new Chevron();

From here, you can call the `login` method to make a post request to that `authURL`.

    chevron.login('superSmartPerson', 'password').then(function () {
      doSomethingNeat();
    });

By default, chevron will communicate with the production version of Leadpages SSO, you can
pass a variety of options into the constructor to modify this behavior.

| Option Name | Choices | Function |
| ENV | 'PRODUCTION', 'DEVELOPMENT', 'LOCAL' | specifies the environment that chevron is expected to run in
| ssoUrl | 'url string' | specifies the location of the sso server for cross domain credential storage
| authUrl | 'url string' | specifies the url for chevron to use for authentication requests
| sessionUrl | 'url string' | specifies the url for fetching the current session

In the vast majority of cases, you will not need to pase any options into chevron, if you need chevron to authenticate with test or local environments, pass in the ENV option: E.G.

    var chevron = new Chevron({ ENV: 'DEVELOPMENT' });

Chevron also fully supports the use of the lp config library, if you wish you can place the ENV configuration under a CHEVRON key: E.G.

    config = {
      CHEVRON: {
        ENV: 'DEVELOPMENT'
      }
    }

Chevron will now have the auth it needs to make authenticated requests. You can either use the `http` method which is basically a wrapper around `XMLHttpRequest` that uses promises, otherwise use the `buildAuthHeaders` method to get a hold of the security token or access id/key pair.

    chevron.http({
      method: 'GET',
      url: '/super/secret/api'
    }).then(function (xhr) {
      console.log(JSON.parse(xhr.response));
    });

    /******
     * OR *
     ******/

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/super/secret/api');

    xhr.onreadystatechange = function () {
      if (xhr.readystate !== 4) { return; }

      console.log(JSON.parse(xhr.response));
    }

    var headers = chevron.buildAuthHeaders();
    for (var key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send();

The `http` method uses a `request` method that acts as a wrapper around whatever transport layer is being used by your application. Subclass chevron and override the `request` method to wrap a call to your application's transport library, and ensure that SSO authentication being used for every request.

When you want to logout, call the `chevron.logout()` to delete the session and remove all local traces of the security token token

    chevron.logout();
    chevron.http({ ... })
    // => Promise.reject()
