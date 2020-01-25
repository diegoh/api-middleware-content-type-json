const assert = require('assert');
const td = require('testdouble');

describe('src/index', () => {
  let setupMiddleware;
  let setContentTypeJson;
  let ctx;

  beforeEach(() => {
    ctx = {
      set: td.function()
    };
    setupMiddleware = require('./index');
    setContentTypeJson = setupMiddleware();
  });

  afterEach(() => {
    td.reset();
  });

  it('exports a function', () => {
    assert.strictEqual(typeof setContentTypeJson, 'function');
  });

  it('returns a function', () => {
    assert.strictEqual(typeof setupMiddleware(), 'function');
  });

  it('calls next()', async () => {
    const next = td.function();

    await setContentTypeJson(ctx, next);
    td.verify(next());
  });

  it('sets ctx.type to application/json', async () => {
    const next = td.function();

    await setContentTypeJson(ctx, next);
    assert.strictEqual(ctx.type, 'application/json');
  });
});
