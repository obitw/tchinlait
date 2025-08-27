/**
 * Returns the correct path for static assets in both development and production
 * @param path The path to the asset relative to the public directory (e.g., '/assets/img/logo/candia-logo.png')
 * @returns The correct path including the basePath in production
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development or if no basePath is needed
  if (process.env.NODE_ENV !== 'production') {
    return `/${cleanPath}`;
  }
  
  // In production, prepend the basePath
  return `/tchinlait/${cleanPath}`;
};
