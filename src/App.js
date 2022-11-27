import Expenses from '../src/components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 298.9,
      date: new Date(2022, 11, 25),
    },
    {
      id: 2,
      title: 'TV',
      amount: 298.9,
      date: new Date(2022, 11, 25),
    },
    {
      id: 3,
      title: 'Phone bill',
      amount: 298.9,
      date: new Date(2022, 11, 25),
    },
    {
      id: 4,
      title: 'Pet shop',
      amount: 298.9,
      date: new Date(2022, 11, 25),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
