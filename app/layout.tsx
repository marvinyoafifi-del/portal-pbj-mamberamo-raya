import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal PBJ Kabupaten Mamberamo Raya",
  description: "Pusat informasi, transparansi, dokumen, dan layanan Pengadaan Barang/Jasa Kabupaten Mamberamo Raya.",
  openGraph: {
    title: "Portal PBJ Kabupaten Mamberamo Raya",
    description: "Transparan • Terhubung • Melayani",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portal PBJ Mamberamo Raya" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
