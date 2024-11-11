import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { poppins } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className='relative h-screen container mx-auto max-w-6xl lg:px-6 px-1 flex flex-grow gap-4'>
            <aside className='col-span-2 hidden lg:block'>
              <Sidebar />
            </aside>
            <main className='flex-1 col-span-10 max-h-screen overflow-y-auto scrollbar-hide pt-2 pb-10 lg:pb-0'>
              {children}
            </main>
            <nav className='flex justify-center lg:hidden fixed left-1/2 -translate-x-1/2 bottom-4 w-full'>
              <div className='px-4'>
                <MobileNavbar />
              </div>
            </nav>
          </div>
        </Providers>
      </body>
    </html>
  );
}
