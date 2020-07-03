import { DefaultContext, Next } from 'koa';

export default () =>
  async function setContentTypeJson(
    ctx: DefaultContext,
    next: Next
  ): Promise<void> {
    ctx.type = 'application/json';
    await next();
  };
