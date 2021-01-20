/**
 * 计算百分比 (pct是percentage缩写)
 * @param defaultValue - dividend === null || divisor === null 显示的默认值
 * @param dividend - 被除数
 * @param divisor - 除数
 * @param several - 保留小数点后几位
 * @returns 百分比
 * @example
 * ```ts
 * pct('--', 200, 20, 3) // -> 10.000%
 * pct('--', null, 20, 3) // -> --
 * ```
 */
export function pct<D>(
  defaultValue: D,
  dividend: number | string | null,
  divisor: number | string | null,
  several = 2,
) {
  if (dividend === null || divisor === null) return defaultValue;
  return ((Number(dividend) / Number(divisor)) * 100).toFixed(several) + "%";
}