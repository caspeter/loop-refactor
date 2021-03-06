'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: every

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce((num, prev)=>{
      return prev = prev + num;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some((num) => {
      return num.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map((item)=>{
      let obj = {};
        obj.first = item[0];
        obj.last = item[1];
        return obj;
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every((item) =>{
      return item.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    return arr.filter((item) =>{
      return item.includes(str);
    }, []);
  },
};
