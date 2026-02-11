import './globals.css';

export const metadata = {
  title: 'El Mapa del Ayer',
  description: 'Sanación emocional y autodescubrimiento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
