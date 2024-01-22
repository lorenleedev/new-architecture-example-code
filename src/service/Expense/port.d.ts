import {User} from "../../domain/user";
import {Expense} from "../../domain/expense";



// Adapter를 통해 Application, Presentation Layer가 주입받을 서비스 객체의 타입 명시
// 글로벌로 선언 혹은 지역 타입으로 선언해도 무관해 보임
interface ExpenseService{
    getUserExpenses(id:User['id']):Promise<Expense[]>;
    updateExpense(id:Expense['id']):void;
    extractExpenseId (expense:Expense):Expense['id'];
}
