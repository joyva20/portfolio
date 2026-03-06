export function withBasePath(assetPath) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  if (!assetPath) return assetPath;

  // Leave absolute/virtual URLs unchanged
  if (
    assetPath.startsWith('http://') ||
    assetPath.startsWith('https://') ||
    assetPath.startsWith('data:') ||
    assetPath.startsWith('blob:')
  ) {
    return assetPath;
  }

  const normalized = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${basePath}${normalized}`;
}
