/*
1.3
Develop a program “Object Projection”. Input: any JSON object; prototype object. Output:
projected object. Projected object structure shall be intersection of source object and
prototype object structures. Values of properties in projected object shall be the same as
values of respective properties in source object.

Example:
const source = {
  prop11:{
      prop21:21,
      prop22:{
          prop31:31,
          prop32:32
      }
  },
  prop12:12
};

const prototype = {
  prop11:{
      prop22:null
  },
};

const res  = {
  prop11:{
      prop22:{
          prop31:31,
          prop32:32
      }
  },
};

*/



const projectObject = (src, prototype) => {
    const results = {};
  
    for (let key in prototype) {
      if (src.hasOwnProperty(key)) {
        results[key] = src[key];
      }
    }
  
    return results;
  };
  
  const src = {
    prop11: {
      prop21: 21,
      prop22: {
        prop31: 31,
        prop32: 32,
      },
    },
    prop12: 12,
  };
  
  const proto = {
    prop11: {
      prop22: null,
    },
  };
  
  const res = projectObject(src, proto);
  
  console.log("res: ", res);