import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "العصماء إعلام | Alassmaa Media",
  description: "بوابة إعلامية إبداعية سينمائية في عجمان، الإمارات العربية المتحدة",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}