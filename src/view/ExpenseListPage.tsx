import {useExampleExpenseApplication} from "../application/expense/exampleExpenseApplication.ts";
import {MouseEventHandler} from "react";

const ExpenseListPage = () => {
    const {getExpenseWithUserId, expenses}=useExampleExpenseApplication()


    const handleRefreshButtonClick:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        getExpenseWithUserId()
    }

    if(!expenses) return <div> is loading...</div>

    return (
        <div>
            {expenses.map((val)=>{
                return (
                    <div>
                        {val.id}
                        {val.price}
                    </div>
                )
            })}
            <button onClick={handleRefreshButtonClick}>refresh</button>
        </div>
    );
};

export default ExpenseListPage;
