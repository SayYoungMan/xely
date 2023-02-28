/**
 * isXeliable gets list of input numbers 'X' and the output number 'y'
 * then returns whether it is possible to produce y from operations between numbers in X.
 * @param X - List of input numbers
 * @param y - Expected Output number
 * @param log - Boolean of whether you want the log of X and y or not
 *
 * @returns 'true' if y can be produced from X, otherwise 'false'
 */
export function isXeliable(X: number[], y: number, log?: boolean): boolean {
  if (log) {
    console.log(X, y)
  }

  // If no element in X, then not possible to make y whatsoever.
  if (X.length === 0) {
    return false
  }

  // If X has only one element, true only if the element in X is y.
  if (X.length === 1) {
    if (X[0] === y) {
      return true
    }
    return false
  }

  // Otherwise recursively check for all cases (+, -, *, /) for all combinations
  // 'popped' will always be number because we have taken care of cases where X.length is 0.
  for (let i = 0; i < X.length; i++) {
    const XCopy = [...X]
    const popped = XCopy.splice(i, 1)[0]!
    const res =
      isXeliable([...XCopy], y + popped, log) ||
      isXeliable([...XCopy], y - popped, log) ||
      isXeliable([...XCopy], popped - y, log) ||
      isXeliable([...XCopy], y * popped, log) ||
      isXeliable([...XCopy], y / popped, log) ||
      isXeliable([...XCopy], popped / y, log)

    if (res === true) {
      return true
    }
  }

  return false
}
