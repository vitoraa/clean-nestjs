import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { UserRepository } from '../src/user/user.repository'
import { CreateUserDto } from '../src/user/dto/create-user.dto'

describe('UserController (e2e)', () => {
  let app: INestApplication
  let repository: UserRepository

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    repository = moduleFixture.get('UserRepository');
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    await repository.query(`DELETE FROM public."user";`);
  });

  describe('FindAll', () => {
    it('should return an empy list', () => {
      return request(app.getHttpServer())
        .get('/user')
        .expect(200)
        .expect([])
    })

    it('should return all users', () => {
      const createUserDto = new CreateUserDto()
      repository.insert(createUserDto)
      return request(app.getHttpServer())
        .get('/user')
        .expect(200)
        .expect([])
    })
  })
})