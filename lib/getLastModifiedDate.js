import fs from 'fs';

export function getLastModifiedDate(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime;
}