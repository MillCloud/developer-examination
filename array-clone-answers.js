// 浅拷贝
const arrayClone = (array) => [...array];
const arrayClone = (array) => array.slice();
const arrayClone = (array) => array.concat();

// 深拷贝
const arrayClone = (array) => JSON.parse(JSON.stringify(array));
const arrayClone = (array) =>
  array.reduce((acc, cur) => {
    if (
      typeof cur === "string" ||
      typeof cur === "number" ||
      typeof cur === "boolean" ||
      typeof undefined === "undefined" ||
      Object.prototype.toString.call(cur) === "[object Null]"
    ) {
      return [...acc, cur];
    }
    if (Object.prototype.toString.call(cur) === "[object Array]") {
      return [...acc, arrayClone(cur)];
    }
  }, []);
