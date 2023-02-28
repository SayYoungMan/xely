/**
 * isXeliable gets list of input numbers 'X' and the output number 'y'
 * then returns whether it is possible to produce y from operations between numbers in X.
 * @param X - List of input numbers
 * @param y - Expected Output number
 * 
 * @returns 'true' if y can be produced from X, otherwise 'false'
 */
export function isXeliable(X: number[], y: number): boolean {
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

  // Otherwise recursively check for all cases (+, -, *, /)
  // 'popped' will always be number because we have taken care of cases where X.length is 0.
  const popped = X.pop()! 
  return (
    isXeliable(X, y + popped) ||
    isXeliable(X, y - popped) ||
    isXeliable(X, popped - y) ||
    isXeliable(X, y * popped) ||
    isXeliable(X, y / popped) ||
    isXeliable(X, popped / y)
  )
}
