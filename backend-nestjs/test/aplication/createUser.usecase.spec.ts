import { Test, TestingModule } from '@nestjs/testing';
import CreateUserUseCase from './../../src/aplication/user/createUser.usecase';
import { UserJson } from '../json/user.json';

describe('--- User Use Case ---', () => {

    let useCase: CreateUserUseCase;

    const eventModel = {
        handler: jest.fn().mockResolvedValue(UserJson)
    };

    beforeEach( async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateUserUseCase,
                {
                    provide: 'UserService',
                    useValue: eventModel,
                }
            ],
        }).compile();

        useCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    });

    it('Create', async () => {
        expect(useCase.handler(UserJson)).resolves.toStrictEqual(UserJson);
    });
    
});