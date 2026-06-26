import { readFileSync } from 'fs';
import path from 'path';

export default async function Icon() {
  const logoPath = path.join(process.cwd(), 'public', 'Logo.webp');
  const buffer = readFileSync(logoPath);

  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/webp',
    },
  });
}
