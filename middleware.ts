import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Bu varsayılan locale işlevi için bir yardımcı işlev
// Başka lokal kullanım açısından önemli değil
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || '';
  return 'tr';
}

export function middleware(request: NextRequest) {
  // Subdomain algılama
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  
  // Yerel geliştirmede localhost:3000 üzerinden erişim sorununu çözmek için
  if (host.includes('localhost') && url.pathname.startsWith('/apps')) {
    // localhost:3000/apps şeklinde erişim için bir şey yapmayız - normal işleme devam eder
    return NextResponse.next();
  }
  
  // Subdomain kontrolü
  if (host.startsWith('apps.')) {
    // Ana sayfa ise (/), /apps'e yönlendir
    if (url.pathname === '/') {
      url.pathname = '/apps';
      return NextResponse.redirect(url);
    }
    
    // Eğer /apps ile başlamıyorsa ama alt sayfa ise
    if (!url.pathname.startsWith('/apps')) {
      // URL'yi /apps altına taşıyız
      url.pathname = `/apps${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }
  
  return NextResponse.next();
} 