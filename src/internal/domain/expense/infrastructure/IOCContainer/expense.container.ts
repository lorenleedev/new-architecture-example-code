import { Container } from 'inversify';
import ExpenseFactory from '../DI/expense.factory';
import ApiService from "../../../../../external/thirdparty/API";

const container = new Container();

container.bind<ApiService>(ApiService).toSelf();
container.bind<ExpenseFactory>(ExpenseFactory).toSelf();

export default container;
