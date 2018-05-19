module.exports = (handler) => (event, ctx, cb) => {
    let called = false;
    const callback = (err, res) => {
        called = true;
        cb(err, res);
    };
    let mayBeAPromise = null;
    try {
        mayBeAPromise = handler(event, ctx, callback);
    } catch (error) {
        return cb(error, null);
    }
    if (mayBeAPromise instanceof Promise) return mayBeAPromise
        .then((response) => {
            if(!called) cb(null, response);
        })
        .catch((err) => {
            if (!called) cb(err);
        });

    if (mayBeAPromise.error && !called) return cb(mayBeAPromise.error, null);

    if (!called) cb(null, mayBeAPromise);
};
