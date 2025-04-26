import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-01-23"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 28.28,
    date: new Date("2024-01-23"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 3.99,
    date: new Date("2025-01-23"),
  },
  {
    id: "e4",
    description: "Golf clubs",
    amount: 499.99,
    date: new Date("2025-04-23"),
  },
  {
    id: "e5",
    description: "Laptop",
    amount: 789.85,
    date: new Date("2025-04-19"),
  },
  {
    id: "e6",
    description: "Garden Furniture",
    amount: 350.99,
    date: new Date("2025-03-23"),
  },
  {
    id: "e7",
    description: "New flip flops",
    amount: 23.99,
    date: new Date("2024-05-23"),
  },
  {
    id: "e8",
    description: "Chicago Bulls Jersey",
    amount: 99.99,
    date: new Date("2024-12-23"),
  },
  {
    id: "e9",
    description: "Horse racing Tikets",
    amount: 72.23,
    date: new Date("2025-01-11"),
  },
  {
    id: "e10",
    description: "BBQ",
    amount: 154.97,
    date: new Date("2025-04-12"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
