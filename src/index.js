module.exports = () =>
  async function setContentTypeJson(ctx, next) {
    ctx.type = 'application/json';
    await next();
  };
