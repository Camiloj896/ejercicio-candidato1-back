import UserService  from '../../src/domain/user/service/user.service';
import { UserJson } from '../json/user.json';

describe('--- User Service ---', () => {

    const userService = new UserService({
        getAll: jest.fn().mockResolvedValue([UserJson]),
        get: jest.fn().mockResolvedValue(UserJson),
        create: jest.fn().mockResolvedValue(UserJson),
        update: jest.fn().mockResolvedValue(UserJson),
        delete: jest.fn().mockResolvedValue(UserJson)
    });

    it('GetAll', async () => {
        expect(userService.getAll()).resolves.toStrictEqual([UserJson]);
    });

    it('Get', () => {
        expect(userService.get(UserJson.id)).resolves.toStrictEqual(UserJson);
    });

    it('Create', () => {
        expect(userService.create(UserJson)).resolves.toStrictEqual(UserJson);
    });

    it('Update', () => {
        expect(userService.update(UserJson.id, UserJson)).resolves.toStrictEqual(UserJson);
    });

    it('Delete', () => {
        expect(userService.delete(UserJson.id)).resolves.toStrictEqual(UserJson);
    });
    
});