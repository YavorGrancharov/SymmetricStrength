let remoteService = (() => {
    const BASE_URL = "https://baas.kinvey.com/";
    const APP_KEY = "kid_HkQnF4nSV";
    const USERNAME = 'user';
    const PASSWORD = "12345678";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64, 'Content-type': 'application/json'};

    function makeRequest(method, module, endpoint, auth) {
        let req;
        return req = {
            method,
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            headers: AUTH
        };
    }

    // Function to return GET promise
    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    // Function to return POST promise
    function post (module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    // Function to return PUT promise
    function update (module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove (module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();