import { AddExpenseForm } from "./AddExpenseForm"
import { ExpenseTable } from "./ExpenseTable"

export const ExpenseMain = () => {
    return (
        <div>
            ExpenseMain component
            {/* LeftPane */}
            <div>
                <AddExpenseForm />
                {/* TODO: 정산 결과 컴포넌트 랜더링 */}
            </div>
            {/* RightPane */}
            <div>
                {/* TODO: 그룹명 헤더 랜더링 */}
                <ExpenseTable />
            </div>
        </div>
    )
}