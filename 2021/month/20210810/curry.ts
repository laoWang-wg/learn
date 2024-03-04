/**
 *
 * @param fn
 * @param args
 */
function curry(fn: Function, args: number[] = []): Function {
	const len: number = fn.length
	return function (...arg: number[]): Function | number {
		const newArg: number[] = args.concat(arg)
		if (newArg.length < len) {
			return curry.call(null, fn, newArg)
		} else {
			return fn(newArg)
		}
	}
}
