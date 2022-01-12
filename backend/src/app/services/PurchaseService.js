
const rest = (value, note) => value % note;

const changePurchase = (purchaseValue, payment) => {
  const noteChange = (note, value) => {
    if (change - rest(note, value) === 0) {
      return 0;
    }
    const notes = (change - rest(value, note)) / note;
    change = change - (notes * note);
    return notes;
  };
  let change = payment - purchaseValue;


  return {
    change,
    'notes of 100': noteChange(100, change),
    'notes of 10': noteChange(10, change),
    'notes of 1': noteChange(1, change)
  };
};



module.exports = changePurchase;
