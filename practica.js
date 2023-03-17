function getGiftsToRefill(a1, a2, a3) {
  const removeRepeat = (data) => {
    const newData = data.reduce((prev, value) => {
      if (!prev.includes(value)) {
        return [...prev, value];
      }
      return prev;
    }, []);
    return newData;
  };

  let a1NoRepeat = removeRepeat(a1);
  let a2NoRepeat = removeRepeat(a2);
  let a3NoRepeat = removeRepeat(a3);

  let gift = [...a1NoRepeat, ...a2NoRepeat, ...a3NoRepeat];
  gift = gift.reduce((prev, val, index, array) => {
    if (array.filter((el) => el === val).length > 1) {
      return prev;
    } else {
      return [...prev, val];
    }
  }, {});
  return gift;
}

const a1 = ['bike', 'car', 'bike', 'bike'];
const a2 = ['car', 'bike', 'doll', 'car'];
const a3 = ['bike', 'pc', 'pc'];

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['doll', 'pc']
console.log(gifts);
