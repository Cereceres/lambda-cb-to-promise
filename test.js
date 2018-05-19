const assert = require('assert');

const handlerPromise = require('./index');


describe('test to handler promise support', () => {
    it('should pass the callback', (done) => {
        const _event = {};
        const _ctx = {};
        handlerPromise((event, ctx, cb) => {
            assert.deepEqual(event, _event);
            assert.deepEqual(ctx, _ctx);
            cb(null);
        })(_event, _ctx, done);
    });

    it('should catch the promise returned', (done) => {
        const _event = {};
        const _ctx = {};
        handlerPromise((event, ctx) => {
            assert.deepEqual(event, _event);
            assert.deepEqual(ctx, _ctx);
            return Promise.resolve(null);
        })(_event, _ctx, done);
    });

    it('should catch the error returned in promise', (done) => {
        const _event = {};
        const _ctx = {};
        handlerPromise((event, ctx) => {
            assert.deepEqual(event, _event);
            assert.deepEqual(ctx, _ctx);
            return Promise.reject('error');
        })(_event, _ctx, (err) => {
            assert(err === 'error');
            done();
        });
    });


    it('should catch the promise', (done) => {
        const _event = {};
        const _ctx = {};
        handlerPromise((event, ctx, cb) => {
            assert.deepEqual(event, _event);
            assert.deepEqual(ctx, _ctx);
            cb(null);
            return Promise.reject('error');
        })(_event, _ctx, done);
    });
});
