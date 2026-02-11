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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, fontFamily: 'serif' }}>
        {children}
      </body>
    </html>
  )
}
