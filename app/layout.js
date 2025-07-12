import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyTrail",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header*/}
          <Header />

          <main className="min-h-screen">{children}</main>
          {/* footer*/}
          <footer className="bg-gray-100 text-gray-600 py-8 border-t">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-sm">
              {/* Left: Logo + Description */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src="/logo.png"
                  alt="MoneyTrail Logo"
                  className="h-10 mb-2"
                />
                <p className="max-w-sm">
                  <strong>MoneyTrail</strong> — Your smart finance companion.
                  Track, manage, and grow your money with ease.
                </p>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
                <h3 className="text-md font-semibold text-gray-800">
                  📞 Contact Us
                </h3>

                <a
                  href="https://github.com/yourusername/moneytrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition"
                >
                  GitHub Repository
                </a>

                <div className="space-y-1">
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> <strong>Devansh Singh:</strong>
                    <a
                      href="mailto:sdevansh9027@email.com"
                      className="hover:underline"
                    >
                      sdevansh9027@email.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> <strong>Your Friend:</strong>
                    <a
                      href="mailto:friend@email.com"
                      className="hover:underline"
                    >
                      friend@email.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom center message */}
            <div className="mt-8 text-center text-xs text-gray-500">
              Made with ❤️ by Devansh Singh & Priyanshu Pal
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
