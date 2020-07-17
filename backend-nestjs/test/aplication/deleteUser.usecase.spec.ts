import { Test, TestingModule } from '@nestjs/testing';
import UpdateUserUseCase from './../../src/aplication/user/updateUser.usecase';
import { UserJson } from '../json/user.json';

describe('--- User Use Case ---', () => {

    let useCase: UpdateUserUseCase;

    const eventModel = {
        handler: jest.fn().mockResolvedValue(UserJson)
    };

    beforeEach( async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateUserUseCase,
                {
                    provide: 'UserService',
                    useValue: eventModel,
                }
            ],
        }).compile();

        useCase = module.get<UpdateUserUseCase>(UpdateUserUseCase);
    });

    it('Update', async () => {
        expect(useCase.handler(UserJson.id, UserJson)).resolves.toStrictEqual(UserJson);
    });
    
});