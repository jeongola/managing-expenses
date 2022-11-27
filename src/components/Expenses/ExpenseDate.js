import './ExpenseDate.css';

function ExpenseDate(expenses) {
  const month = expenses.date.toLocaleString('en-US', { month: 'long' });
  const day = expenses.date.toLocaleString('en-US', { day: '2-digit' });
  const year = expenses.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
