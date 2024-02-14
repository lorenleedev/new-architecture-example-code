import { UsecaseResponse } from '../../../../common/usecase.type.ts';
import Usecase from '../../../../common/usecase.ts';
import {
  GetExpenseUsecaseResponse
} from "../../infrastructure/type/getExpenseList.type.ts";

abstract class GetExpenseListUsecase implements Usecase<Promise<UsecaseResponse<GetExpenseUsecaseResponse>>> {
  abstract execute(): Promise<UsecaseResponse<GetExpenseUsecaseResponse>>;
}
export default GetExpenseListUsecase;