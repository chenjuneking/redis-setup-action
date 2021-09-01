import Redis from 'ioredis';

const host = process.env.REDIS_HOST || 'localhost';
const port = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379;
const password = process.env.REDIS_PASSWORD;

describe('Test redis', () => {
  let redis: Redis.Redis;

  beforeAll(() => {
    redis = new Redis({
      host,
      port,
      password,
    });
  });

  afterAll(() => {
    redis.disconnect();
  });

  test('set & get', async () => {
    const result = await redis.set('a', '1');
    expect(result).toBe('OK');

    const value = await redis.get('a');
    expect(value).toBe('1');
  });
});
