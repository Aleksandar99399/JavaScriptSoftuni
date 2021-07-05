function aggregateElements(items) {
  let sum = 0;
  let sum2 = 0;
  let concatResult = "";
  for (var i = 0; i < items.length; i++) {
    const currentItem = items[i];
    sum += currentItem;
    concatResult += currentItem;
    sum2 += 1 / currentItem;
  }

  console.log(sum);
  console.log(sum2);
  console.log(concatResult);
}
