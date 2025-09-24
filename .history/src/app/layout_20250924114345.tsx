export const metadata = {
  title: "Protagonist – Landing",
  description: "Replica responsive con placeholders",
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