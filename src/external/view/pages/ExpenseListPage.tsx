import {MouseEventHandler, useEffect, useState} from "react";
import useUserStore from "../../thirdparty/store/user.ts";
import expenseInAdapter from "../../../internal/domain/expense/infrastructure/adapter/in/expense.in.ts";

const ExpenseListPage = () => {
    // 비용 리스트를 가져오는 비즈니스 로직을 호출하고, 비용 리스트를 보여준다.
    const userStore = useUserStore();
    const [expenses, setExpenses] = useState([]);

    const handleRefreshButtonClick:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

    }

    useEffect(() => {
        console.log('[0] 화면')
        // 도메인과 관련된 모든 요청은 inAdapter를 통해서만 가능하다.
        expenseInAdapter.getExpenseList({id: userStore.user.id}).then((res) => {
            setExpenses(res.data?.expenses)
        }).catch(e => {
            console.log('e', e)
        }).finally(() => {
            console.log('finally')
        });
    }, []);

    return (
        <div>
            {expenses?.map((val, index)=>{
                return (
                    <div key={index}>
                        {val?.id}
                        {val?.price}
                    </div>
                )
            })}
            <button onClick={handleRefreshButtonClick}>refresh</button>
        </div>
    );
};

export default ExpenseListPage;
