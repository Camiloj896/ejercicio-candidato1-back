import { Test, TestingModule } from '@nestjs/testing';
import GetAllUsersUseCase from './../../src/aplication/user/getallUsers.usecase';
import { UserJson } from '../json/user.json';

describe('--- User Use Case ---', () => {

    let useCase: GetAllUsersUseCase;

    const eventModel = {
        handler: jest.fn().mockResolvedValue([UserJson])        
    };

    beforeEach( async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetAllUsersUseCase,
                {
                    provide: 'UserService',
                    useValue: eventModel,
                }
            ],
        }).compile();

        useCase = module.get<GetAllUsersUseCase>(GetAllUsersUseCase);
    });


    it('Get All', async () => {
        expect(useCase.handler()).resolves.toStrictEqual([UserJson]);
    });
    
});