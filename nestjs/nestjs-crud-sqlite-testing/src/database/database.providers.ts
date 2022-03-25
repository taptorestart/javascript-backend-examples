import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'better-sqlite3',
        database:
          process.env.NODE_ENV === 'test'
            ? ':memory:'
            : __dirname + '/user.sqlite',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: process.env.NODE_ENV === 'test',
        logging: process.env.NODE_ENV === 'dev',
      }),
  },
];
