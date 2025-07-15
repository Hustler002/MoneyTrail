import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Mail } from "lucide-react";
import ThemeProvider from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyTrail",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
          {/* header */}
          <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-shadow duration-300">
            <Header />
          </header>

          <main className="min-h-screen transition-all duration-500">
            <ThemeProvider>{children}</ThemeProvider>
          </main>

          {/* footer */}
          <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-sm">
              {/* Left: Logo + Description */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left transition-opacity duration-700">
                <img
                  src="/logo.png"
                  alt="MoneyTrail Logo"
                  className="h-10 mb-2 transition-transform duration-500 hover:scale-105"
                />
                <p className="max-w-sm">
                  <strong>MoneyTrail</strong> — Your smart finance companion.
                  Track, manage, and grow your money with ease.
                </p>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3 transition-opacity duration-700">
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
                  📞 Contact Us
                </h3>

                <a
                  href="https://github.com/Hustler002/MoneyTrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  GitHub Repository
                </a>

                <div className="space-y-1">
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> <strong>Devansh Singh:</strong>
                    <a
                      href="mailto:sdevansh9027@email.com"
                      className="hover:underline transition-colors duration-300"
                    >
                      sdevansh9027@email.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> <strong>Priyanshu Pal:</strong>
                    <a
                      href="mailto:priyanshupalpp2203@gmail.com"
                      className="hover:underline transition-colors duration-300"
                    >
                      priyanshupalpp2203@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom center message */}
            <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 transition-opacity duration-700">
              © {new Date().getFullYear()} MoneyTrail. All rights reserved. <br />
              Made with ❤️ by Devansh & Priyanshu
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
