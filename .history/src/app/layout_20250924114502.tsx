export const metadata = {
  title: "RC Servicios Generales",
  description: "",
  };
  
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="es" suppressHydrationWarning>
  <body className="min-h-screen bg-white text-gray-900 antialiased">
  {children}
  </body>
  </html>
  );
  }