type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(
  m: Awaitable<T>,
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  return (resolved as any).default || resolved
}
