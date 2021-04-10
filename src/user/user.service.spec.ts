import { Test, TestingModule } from '@nestjs/testing'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

const mockUserRepository = () => ({
});

describe('UserService', () => {
  let service: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        }],
    }).compile()

    userRepository = module.get<UserRepository>(UserRepository)
    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  });
})
