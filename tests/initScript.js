var oldRequest = Request;
Request = function(url, config) {
    const req = new oldRequest(url, config)
    req.clone = () => {
        return new Request(url, config);
    }
    return req;
};
Request.prototype = oldRequest.prototype;
Request.prototype.constructor = Request;
