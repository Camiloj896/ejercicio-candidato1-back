import { Test, TestingModule } from '@nestjs/testing';
import DeleteUserUseCase from './../../src/aplication/user/deleteUser.usecase';
import { UserJson } from '../json/user.json';

describe('--- User Use Case ---', () => {

    let useCase: DeleteUserUseCase;

    const eventModel = {
        handler: jest.fn().mockResolvedValue(UserJson)        
    };

    beforeEach( async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteUserUseCase,
                {
                    provide: 'UserService',
                    useValue: eventModel,
                }
            ],
        }).compile();

        useCase = module.get<DeleteUserUseCase>(DeleteUserUseCase);
    });

    it('Delete', async () => {
        expect(useCase.handler(UserJson.id)).resolves.toStrictEqual(UserJson);
    });
    
});