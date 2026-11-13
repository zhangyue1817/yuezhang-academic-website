import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputRoot = path.join(packageRoot, 'dist', 'public');
const rootIndex = path.join(outputRoot, 'index.html');

await access(rootIndex);

for (const route of ['research', 'teaching', 'cv', 'contact']) {
  const routeDirectory = path.join(outputRoot, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(rootIndex, path.join(routeDirectory, 'index.html'));
}

const requiredFiles = [
  'research/index.html',
  'teaching/index.html',
  'cv/index.html',
  'contact/index.html',
  'cv.pdf',
  'featured-study.pdf',
  'favicon.svg',
];

for (const relativePath of requiredFiles) {
  await access(path.join(outputRoot, relativePath));
}

const builtAssets = await readdir(path.join(outputRoot, 'assets'));
if (!builtAssets.some((name) => /\.(jpe?g)$/i.test(name))) {
  throw new Error('The production output is missing the profile photograph.');
}
if (!builtAssets.some((name) => /\.png$/i.test(name))) {
  throw new Error('The production output is missing the featured-study figure.');
}

console.log(
  `Prepared GitHub Pages routes and verified ${requiredFiles.length} required files in ${outputRoot}.`,
);
