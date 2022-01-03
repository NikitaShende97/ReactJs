function like(param) {
  let prev = param.parentElement.children[1];
  let preVal = prev.innerHTML;
  let newVal = parseInt(preVal) + 1;
  prev.innerHTML = newVal;
  console.log(newVal);
}

function dislike(param) {
  let prev = param.parentElement.children[1];
  let preVal = prev.innerHTML;
  let newVal = parseInt(preVal) + 1;
  prev.innerHTML = newVal;
  console.log(newVal);
}
export default { like, dislike };
