import setupMiddleware from './index';
import { DefaultContext, Next } from 'koa';

describe('src/index', () => {
  let middleware: (ctx: DefaultContext, next: Next) => {};
  let ctx: DefaultContext;

  beforeEach(() => {
    ctx = {
      set: jest.fn()
    };
    middleware = setupMiddleware();
  });

  it('calls next()', async () => {
    const next = jest.fn();

    await middleware(ctx, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('sets ctx.type to application/json', async () => {
    const next = jest.fn();

    await middleware(ctx, next);

    expect(ctx.type).toBe('application/json');
  });
});
