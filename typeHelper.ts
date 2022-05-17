/**
 * 强制指定对象的类型
```ts
    interface AB{
      a:number
      b:string
    }

    as<AB>({
      a:1,
      b:'sdf'
    })
```
 */
export const as = <T>(obj: T) => obj;
/**
 * 强制指定对象的类型，允许缺少字段
```ts
    interface AB{
      a:number
      b:string
    }

    as<AB>({
      a:1,
      b:'sdf'
    })
```
 */
export const asPartial = <T>(obj: Partial<T>) => obj;
/** 
 * 从给定类型中，提取key
*/
export const keyof = <T>(key: keyof T) => key;

// 获取async function的返回值
export type AsyncReturnType<T> = Parameters<Parameters<ReturnType<T>['then']>['0']>['0']

/** any function */
type AnyFunction = (...args: any) => any
/**
 * 获取函数的第N个参数类型
```ts
type SetPerson = (name: string, age: number) => void
type Name = ParamAt<SetPerson, 0> // string
type Age = ParamAt<SetPerson, 1> // age
```
 */
export type ParamAt<FUNCTION extends AnyFunction, POSITION extends number> = Parameters<FUNCTION>[POSITION]

/** null undefined 判断 */
export const isNil = <T>(obj: T | null | undefined): obj is null => obj == null;
/** 非 null undefined 判断 */
export const notNil = <T>(obj: T | null | undefined): obj is T => obj != null;