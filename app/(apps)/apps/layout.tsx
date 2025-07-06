"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar isBordered>
        <NavbarBrand>
          <Link href="/apps" className="font-bold text-inherit">
            Halit Uzan Apps
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/apps">
              Ana Sayfa
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://halituzan.com" target="_blank">
              halituzan.com
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="container mx-auto max-w-7xl flex-grow">
        {children}
      </main>

      <footer className="w-full py-6 px-4 border-t">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Halit Uzan Apps</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Mobil uygulamalar geliştiriyorum ve sizlerin hayatını kolaylaştırmayı hedefliyorum.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/apps" color="foreground">Ana Sayfa</Link>
                </li>
                <li>
                  <Link href="https://halituzan.com" color="foreground">halituzan.com</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">İletişim</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Sorularınız veya önerileriniz için benimle iletişime geçebilirsiniz.
              </p>
              <Link href="mailto:info@halituzan.com" className="mt-2 block">
                info@halituzan.com
              </Link>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Halit Uzan Apps. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 