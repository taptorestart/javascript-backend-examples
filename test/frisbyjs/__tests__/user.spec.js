import frisby from 'frisby';

const BASE_URL = 'http://localhost:3000';

frisby.baseUrl(BASE_URL);

const { Joi } = frisby;

const userSchema = Joi.object({
  id: Joi.number(),
  email: Joi.string(),
  password: Joi.string(),
  is_active: Joi.boolean(),
});

const usersSchema = Joi.array().items(userSchema);

describe('Test /users', () => {
  const createUser = () => ({
    email: `test${new Date().getTime()}@taptorestart.com`,
    password: 'password',
  });

  beforeAll(async () => {
    frisby.globalSetup({
      request: {
        baseUrl: BASE_URL,
      },
    });
  });

  describe('POST /users', () => {
    context('with correct data', () => {
      it('responses user', async () => {
        const { json } = await frisby.post('/users', createUser())
          .expect('status', 201)
          .expect('jsonTypes', userSchema);
        console.log(json);
      });
    });
  });

  describe('GET /users', () => {
    context('with correct data', () => {
      it('responses users', async () => {
        const { json } = await frisby.get('/users')
          .expect('status', 200)
          .expect('jsonTypes', usersSchema);
        console.log(json);
      });
    });
  });
});
