import {describe, expect, it} from 'vitest'
import {compareObjects, compareObjectArrays, commonKeys} from './functions'

describe('compareObjects', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    const obj3 = { a: 1, b: 2, c: 4 };
  
    it('should return true for equal objects', () => {
      expect(compareObjects(obj1, obj2)).toBe(true);
    });
  
    it('should return false for different objects', () => {
      expect(compareObjects(obj1, obj3)).toBe(false);
    });

    it('should handle empty objects', () => {
        expect(compareObjects({}, {})).toBe(true);
    });

    it('should handle real world objects', () => {
        expect(compareObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })).toBe(true);
    });
});

describe('compareObjectArrays', () => {
  const ObjArray0 = [
    { a: 1, b: 2, c: 3 },
    { d: 4, e: 5, f: 6 },
    { g: 7, h: 8, i: 9 },
    { j: 10, k: 11, l: 12 },
  ];

  const ObjArray1 = [
    { a: 1, b: 2, c: 3 },
    { d: 4, e: 5, f: 6 },
    { g: 7, h: 8, i: 9 },
    { j: 10, k: 11, l: 12 },
  ];

  it('should return true for equal object arrays', () => {
    expect(compareObjectArrays(ObjArray0, ObjArray1)).toBe(true);
  });

  it('should return false for different object arrays', () => {
    const ObjArray2 = [
      { a: 1, b: 2, c: 3 },
      { d: 4, e: 5, f: 6 },
      { g: 7, h: 8, i: 9 },
      { j: 10, k: 11, l: 13 },
    ];

    expect(compareObjectArrays(ObjArray1, ObjArray2)).toBe(false);
  });

  it('should handle different length object arrays', () => {
    const ObjArray3 = [
      { a: 1, b: 2, c: 3 },
      { d: 4, e: 5, f: 6 },
      { g: 7, h: 8, i: 9 },
    ];

    expect(compareObjectArrays(ObjArray1, ObjArray3)).toBe(false);
  });

  it('should handle real world object arrays', () => {
    const ObjArray4 = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Doe', age: 25 },
      { id: 3, name: 'Bob Smith', age: 40 },
      { id: 4, name: 'Alice Johnson', age: 35 },
      { id: 5, name: 'Michael Brown', age: 50 },
      { id: 6, name: 'Emily Davis', age: 45 },
      { id: 7, name: 'David Wilson', age: 55 },
    ];
    expect(compareObjectArrays(ObjArray4, ObjArray4)).toBe(true);
  })
});

describe('commonKeys', () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2, c: 3 };
  const obj3 = { d: 4, e: 5, f: 6 };

  it('should return an array of common keys', () => {
    expect(commonKeys(obj1, obj2)).toEqual(['a', 'b', 'c']);
  });

  it('if no common keys', () => {
    expect(commonKeys(obj1, obj3)).toEqual([]);
  });

  it('should handle empty objects', () => {
    expect(commonKeys({}, {})).toEqual([]);
  });

  it('should handle real world objects', () => {
    expect(commonKeys({ id: 1, name: 'John Doe', age: 30 }, { id: 1, name: 'John Doe', age: 30 })).toEqual(['id', 'name', 'age']);
  });
})