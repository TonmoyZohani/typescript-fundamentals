/*============================================================================
 Problem - 1                         
============================================================================*/

const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }

  return value;
};

console.log(formatValue("hello")); // HELLO
console.log(formatValue(5)); // 50
console.log(formatValue(true)); // 10

/*============================================================================
 Problem - 2                         
============================================================================*/

const getLength=(value:string|any[]):number=>{
  if(typeof value==="string"){
    return value.length;
  }else if(Array.isArray(value)){
    return value.length;
  }
  return 0;
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));