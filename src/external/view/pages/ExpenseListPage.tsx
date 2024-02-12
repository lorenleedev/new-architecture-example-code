import {MouseEventHandler, useEffect} from "react";
import useUserStore from "../../utils/store/user.ts";
import expenseInAdapter from "../../../internal/domain/expense/infrastructure/adapter/in/expense.in.ts";

const ExpenseListPage = () => {
    // 비용 리스트를 가져오는 비즈니스 로직을 호출하고, 비용 리스트를 보여준다.
    const userStore = useUserStore();

    const handleRefreshButtonClick:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        console.log('[0] 화면')
        expenseInAdapter.getExpenseList({id: userStore.user.id}).then((res) => {
            console.log('res', res)
        });
    }, []);

    // if(!expenses) return <div> is loading...</div>

    return (
        <div>
            {/*{expenses?.map((val)=>{*/}
            {/*    return (*/}
            {/*        <div>*/}
            {/*            {val.id}*/}
            {/*            {val.price}*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            <button onClick={handleRefreshButtonClick}>refresh</button>
        </div>
    );
};

export default ExpenseListPage;
