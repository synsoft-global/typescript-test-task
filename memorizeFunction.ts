type Func<T, R> = (arg: T) => R;

function memoize<T, R>(func: Func<T, R>): Func<T, R> {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }

    const result = func(arg);
    cache.set(arg, result);
    return result;
  };
}