import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './users.providers';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [...userProviders, UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return users', async () => {
      const newUserAdmin: CreateUserDto = {
        email: 'admin@taptorestart.com',
        password: 'verysecret',
      };
      const newUserCustomer: CreateUserDto = {
        email: 'customer@taptorestart.com',
        password: 'verysecret',
      };
      await service.create(newUserAdmin);
      await service.create(newUserCustomer);
      const users = await service.findAll();
      expect(users.length).toBe(2);
      expect(users[0].email).toBe(newUserAdmin.email);
      expect(users[0].password).toBe(newUserAdmin.password);
      expect(users[1].email).toBe(newUserCustomer.email);
      expect(users[1].password).toBe(newUserCustomer.password);
    });
  });

  describe('create', () => {
    it('should return new User', async () => {
      const newUser: CreateUserDto = {
        email: 'admin@taptorestart.com',
        password: 'verysecret',
      };
      const user = await service.create(newUser);
      expect(user.email).toEqual(newUser.email);
      expect(user.password).toEqual(newUser.password);
    });
  });

  describe('findOne', () => {
    it('should return selected user', async () => {
      const newUser: CreateUserDto = {
        email: 'admin@taptorestart.com',
        password: 'verysecret',
      };
      const user = await service.create(newUser);
      const userOne = await service.findOne(user.id);
      expect(user.email).toEqual(userOne.email);
      expect(user.password).toEqual(userOne.password);
    });
  });

  describe('remove', () => {
    it('should return removed user', async () => {
      const newUser: CreateUserDto = {
        email: 'admin@taptorestart.com',
        password: 'verysecret',
      };
      const user = await service.create(newUser);
      await service.remove(user.id);
      const userOne = await service.findOne(user.id);
      expect(userOne).toBeUndefined();
    });
  });

  describe('update', () => {
    it('should return updated user', async () => {
      const newUser: CreateUserDto = {
        email: 'admin@taptorestart.com',
        password: 'verysecret',
      };
      const user = await service.create(newUser);
      const updateUserDto: UpdateUserDto = {
        email: 'user@taptorestart.com',
        password: 'veryverysecret',
      };
      const userUpdated = await service.update(user.id, updateUserDto);
      expect(updateUserDto.email).toEqual(userUpdated.email);
      expect(updateUserDto.password).toEqual(userUpdated.password);
    });
  });

  afterAll(async () => {
    await module.close();
  });
});
