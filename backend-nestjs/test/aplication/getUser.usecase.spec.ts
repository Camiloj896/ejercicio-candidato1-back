import { Test, TestingModule } from '@nestjs/testing';
import GetUserUseCase from './../../src/aplication/user/getUser.usecase';
import { UserJson } from '../json/user.json';

describe('--- User Use Case ---', () => {

    let useCase: GetUserUseCase;

    const eventModel = {
        handler: jest.fn().mockResolvedValue(UserJson)
    };

    beforeEach( async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetUserUseCase,
                {
                    provide: 'UserService',
                    useValue: eventModel,
                }
            ],
        }).compile();

        useCase = module.get<GetUserUseCase>(GetUserUseCase);
    });


    it('Get', async () => {
        expect(useCase.handler(UserJson.id)).resolves.toStrictEqual(UserJson);
    });
    
});