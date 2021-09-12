import { BadRequestException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

const mockUserRepository = () => ({
  save: jest.fn()
})

const mockUserService = () => ({
  create: jest.fn(),
  findAll: jest.fn()
});


describe('UserController', () => {
  let userRepository: UserRepository
  let controller: UserController
  let service: UserService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
        {
          provide: UserService,
          useFactory: mockUserService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create', () => {
    it('should throw when service throw', async () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new BadRequestException())
      const creatUserDto = new CreateUserDto()
      const response = controller.create(creatUserDto)
      await expect(response).rejects.toThrow(new BadRequestException())
    })

    it('should call service with corrects params', async () => {
      const creatUserDto = new CreateUserDto()
      await controller.create(creatUserDto)
      expect(service.create).toBeCalledWith(creatUserDto)
    });

    it('should return an user if service succeeds', async () => {
      const creatUserDto = {} as CreateUserDto & User
      jest.spyOn(service, 'create').mockReturnValueOnce(Promise.resolve(creatUserDto))
      const response = await controller.create(creatUserDto)
      expect(response).toEqual(creatUserDto)
    })
  })

  describe('Find All', () => {
    it('should throw when service throw', async () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new BadRequestException())
      const response = controller.findAll()
      await expect(response).rejects.toThrow(new BadRequestException())
    })

    it('should call service with corrects params', async () => {
      await controller.findAll()
      expect(service.findAll).toBeCalledWith()
    })

    it('should return all users if service succeeds', async () => {
      const userList = [] as User[]
      jest.spyOn(service, 'findAll').mockReturnValueOnce(Promise.resolve(userList))
      const response = await controller.findAll()
      expect(response).toEqual(userList)
    })
  })
})
