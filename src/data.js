const data = {
    transactions: [
        {
            name: "Wholefoods",
            amount: 50,
            t_date: "10-19-2020",
            category_id: 1,
            transaction_type_id: 1
        },
        {
            name: "Metro Card",
            amount: 107,
            t_date: "10-01-2020",
            category_id: 3,
            transaction_type_id: 1
        },
        {
            name: "Amazon",
            amount: 25,
            t_date: "10-02-2020",
            category_id: 2,
            transaction_type_id: 1
        },
        {
            name: "Sushi",
            amount: 40,
            t_date: "10-10-2020",
            category_id: 4,
            transaction_type_id: 1
        },
    ],
    transaction_types: [ { id: 1, name: "Expense" }, { id: 2, name: "Income" }],
    expense_categories: [ { id: 1, name: "Groceries"}, { id: 2, name: "Bills"}, { id: 3, name: "Entertainment"} ],
    income_categories: [ { id: 1, name: "Salary"}, { id: 2, name: "Refund"}, { id: 3, name: "Gift"} ]
}

export { data }