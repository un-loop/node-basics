/**
 * Co like framework for composing functions
 * 
 * @param funcs - functions to compose. Each function fn(data, next) 
 * will be called with the output of the previous result. next() is a 
 * function that invokes the next function further now the chain.
 */
module.exports = (...funcs) => {
  function* funcGenerator() {
    for(let func of funcs) {
      yield func;
    }
  }

  const iterator = funcGenerator();

  const next = (...input) => {
    const result = iterator.next();
    if (result.done) {
      return input;
    }

    return result.value(...input, next);
  }

  return next;
}



///****************** */
const first = middleware(func1, func2, func3);
first();