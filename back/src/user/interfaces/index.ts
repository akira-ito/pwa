import { UserService } from '../domain/user.service';
import { UserMockRepository } from '../infrastructure/user-mock.repository';
import { UserGraphQLInterfaces } from './user-graphql.interfaces';

// DI
const repository = new UserMockRepository();
const service = new UserService(repository);
export default new UserGraphQLInterfaces(service).graphQL();
