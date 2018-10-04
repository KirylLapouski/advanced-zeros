function getZerosCount(number, base) {
  const multipliers = getSimpleMultipliers(base)
  const biggest = getTheBiggestNumber(multipliers)
  return Math.floor(countDivisionTime(number, biggest) / countEntries(multipliers,biggest))
}
// function createArray(number,step){
//   let array = []
//   for(let i = step;i<=number;i+=step){
//     array.push(i)
//   }
//   return array
// }
function getSimpleMultipliers(number){
  let j = 0, i = 2, a = new Array();
  do
  {
    if (number % i === 0) 
    {
      a[j] = i;
      j++;
      number = number / i;
    }
    else
      i++;
  }
  while (i < number);
    a[j] = i;
  return a
}

function getTheBiggestNumber(array){
  return array.reduce((biggestValue, currentValue)=> currentValue>biggestValue?currentValue:biggestValue ,0)
}

function countDivisionTime(n, base){
  function division(dividend,divider){
    let res = 0
    while(dividend%divider===0){
      res++;
      dividend = Math.floor(dividend/divider)
    }
    return res
  }

  let result = 0
  for(let i=base;i<=n;i+=base){
    result+=division(i,base)
  }
  return result
}

function countEntries(array,number){
  return array.filter(value=> value===number).length
}

module.exports =getZerosCount
