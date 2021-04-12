import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

const mockUserRepository = () => ({
  save: jest.fn()
})

describe('UserService', () => {
  let service: UserService
  let userRepository: UserRepository

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
  })

  describe('Create', () => {
    it('should throw when repository throw', async () => {
      jest.spyOn(userRepository, 'save').mockRejectedValueOnce(new BadRequestException())
      const creatUserDto = new CreateUserDto()
      const response = service.create(creatUserDto)
      await expect(response).rejects.toThrow(new BadRequestException())
    })

    it('should call repository with corrects params', async () => {
      const creatUserDto = new CreateUserDto()
      await service.create(creatUserDto)
      expect(userRepository.save).toBeCalledWith(creatUserDto)
    })

    it('should return an user if repository succeeds', async () => {
      const creatUserDto = {} as CreateUserDto & User
      jest.spyOn(userRepository, 'save').mockReturnValueOnce(Promise.resolve(creatUserDto))
      const response = await service.create(creatUserDto)
      expect(response).toEqual(creatUserDto)
    })
  })
})
