import { AddExpenseForm } from "./AddExpenseForm"

export const ExpenseMain = () => {
    return (
        <div>
            ExpenseMain component
            {/* LeftPane */}
            <div>
                <AddExpenseForm></AddExpenseForm>
                {/* TODO: 정산 결과 컴포넌트 랜더링 */}
            </div>
            {/* RightPane */}
            <div>
                {/* TODO: 그룹명 헤더 랜더링 */}
                {/* TODO: 비용 리스트 컴포넌트 랜더링 */}
            </div>
        </div>
    )
}