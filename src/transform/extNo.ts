import { isNullable } from "../helper/guard";
/**
 * 为列表扩展序号字段 (ext是extend缩写,No是number order缩写)
 * @param page - 页码
 * @param pageSize - 每页条数
 * @param list - 数据列表
 * @returns 添加序号后的数据列表 `key=$No`
 * @example
 * ```ts
 * const list = [{name: '小明'}, {name: '小红'}]
 * extNo(1, 20, list) // -> [{$No: 1, name: '小明'}, {$No: 2, name: '小红'}]
 * extNo(2, 20, list) // -> [{$No: 11, name: '小明'}, {$No: 12, name: '小红'}]
 * ```
 */
export function extNo<T>(page: number, pageSize: number, list: T[] | null) {
  if (isNullable(list)) return [];
  return list.map((item, idx) => {
    return { ...item, $No: idx + 1 + (page - 1) * pageSize };
  });
}
