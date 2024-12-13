
/* 
1.1
Extend JS Date object with a method daysTo() which returns number of complete days between
any pair of JS date objects: d1.daysTo(d2) should return quantity of complete days from d1 to
d2
*/


Date.prototype.daysTo = function (date) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffDays = Math.round(
      Math.abs((date.getTime() - this.getTime()) / oneDay)
    );
  
    return diffDays;
  };

const d1 = new Date("2024-12-01");
const d2 = new Date("2024-12-12");

console.log(
    `Days between ${d1.toLocaleDateString()} and ${d2.toLocaleDateString()} :`,
    d1.daysTo(d2)
  );
// Output: 11