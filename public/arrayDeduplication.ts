/**
 * @desc 对给定数组去重，对引用类型浅 / 深比较
 * @desc 数组元素只可能是 String、Number、Boolean、Undefined、Null、Object、Array
 */

type BaseType = string | number | boolean | undefined | null;
type TArray = (BaseType | Record<string, BaseType> | BaseType[])[];

const arrayDeDuplication = (array: TArray): TArray => {};
