import Expense from "../../domain/expense.domain.ts";

// ...APIParams,...APIResponse는 API를 호출할 때 필요한 파라미터와 응답에 대한 타입을 정의합니다.
// ...UsecaseParams,...UsecaseResponse는 비즈니스 로직을 처리할 때 필요한 파라미터와 응답에 대한 타입을 정의합니다.

export interface GetExpenseAPIParams {

}

export interface GetExpenseAPIResponse {
    expenses: Expense[];
}

export interface GetExpenseUsecaseParams {
    id: string;
}

export interface GetExpenseUsecaseResponse {
    expenses: Expense[];
}

