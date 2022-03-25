import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const data_to_post = {
    email: 'admin@taptorestart.com',
    password: 'verysecret',
  };
  const data_to_patch = {
    email: 'test@taptorestart.com',
  };

  describe('/users', () => {
    it('/users (GET)', () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });
    it('/users (POST)', () => {
      return request(app.getHttpServer())
        .post('/users')
        .send(data_to_post)
        .expect(201)
        .then((response) => {
          expect(response.body.email).toEqual('admin@taptorestart.com');
          expect(response.body.password).toEqual('verysecret');
        });
    });
    it('/users (PATCH)', () => {
      return request(app.getHttpServer())
        .patch('/users')
        .send(data_to_patch)
        .expect(404);
    });
    it('/users (DELETE)', () => {
      return request(app.getHttpServer()).delete('/users').expect(404);
    });
  });

  describe('/users/:id', () => {
    it('/users/1 (GET)', () => {
      return request(app.getHttpServer())
        .get('/users/1')
        .expect('Content-Type', /json/)
        .expect(200);
    });
    it('/users/1 (PATCH)', () => {
      return request(app.getHttpServer())
        .patch('/users/1')
        .send(data_to_patch)
        .expect(200)
        .then((response) => {
          expect(response.body.email).toEqual('test@taptorestart.com');
        });
    });
    it('/users/1 (DELETE)', () => {
      return request(app.getHttpServer()).delete('/users/1').expect(200);
    });
  });
});
