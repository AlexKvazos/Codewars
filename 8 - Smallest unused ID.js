function nextId(params) {
  const list = params.sort((a, b) => a - b);
  let result;
  if (params.length === 0 || params[0] !== 0) return 0;
  list.forEach((item) => {
    const next = item + 1;
    if (!result && list.indexOf(next) === -1) result = next;
  });
  return result;
}

// console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
