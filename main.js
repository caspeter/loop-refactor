'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce((num, prev)=>{
      return prev = prev + num;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.filter(num => {
      return num.hasOwnProperty(prop);
    })
    // for(var i = 0; i < arr.length; i++){
    //   if(arr[i].hasOwnProperty(prop)){
    //     return true;
    //   }
    // }
    // return false;
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
    // for (var i = 0; i < arr.length; i++){
    //   if(!arr[i].hasOwnProperty(prop)){
    //     return false;
    //   }
    // }
    // return true;
  },

  stringMatch: (arr, str) => {

    // let matches = [];
    // for(var i = 0; i < arr.length; i++){
    //   if (arr[i].includes(str)){
    //     matches.push(arr[i]);
    //   }
    // }
    // return matches;
  },
};
