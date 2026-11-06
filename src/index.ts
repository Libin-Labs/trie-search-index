export function prefixSearch(terms: readonly string[], prefix: string, limit = 100): string[] {
  if (
    !Array.isArray(terms) ||
    !terms.every((x) => typeof x === 'string') ||
    typeof prefix !== 'string'
  )
    throw new TypeError('Expected text terms and prefix');
  if (terms.length > 100000 || terms.some((x) => x.length > 1024) || prefix.length > 1024)
    throw new RangeError('Input size limit exceeded');
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 10000)
    throw new RangeError('Invalid result limit');
  const key = prefix.toLocaleLowerCase(),
    seen = new Set<string>(),
    out: string[] = [];
  for (const term of terms) {
    const normalized = term.toLocaleLowerCase();
    if (normalized.startsWith(key) && !seen.has(normalized)) {
      seen.add(normalized);
      out.push(term);
      if (out.length === limit) break;
    }
  }
  return out;
}
