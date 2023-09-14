export function useFormatMoney(money) {
  if (!money) return { result: '', money: undefined}
  
  let integerStr;
  let decimalsStr;
  if (String(money).includes('.')) {
    integerStr = String(money).slice(0, String(money).indexOf('.'));
    decimalsStr = String(money).slice(String(money).indexOf('.'));
  } else {
    integerStr = `${parseInt(money, 10)}`;
  }
  console.log(integerStr)
  console.log(decimalsStr)

  const resultArr = [];
  let current = '';
  for (let i = integerStr.length - 1; i >= 0; i--) {
    const num = integerStr[i];
    current = num + current;

    if (current.length === 3) {
      current = ` ${current}`;
      resultArr.unshift(current);
      current = '';
    }

    if (i === 0) {
      resultArr.unshift(current);
    }
  }

  let result;
  if (decimalsStr) {
    if (decimalsStr.length > 3) {
      decimalsStr = decimalsStr.slice(0, 3);
    }
    resultArr.push(decimalsStr);
    result = resultArr.join('');
  } else {
    result = resultArr.join('');
  }

  money = decimalsStr && decimalsStr.length === 1 ? parseInt(integerStr + decimalsStr) : parseFloat(integerStr + decimalsStr);

  return { result, money };
}
