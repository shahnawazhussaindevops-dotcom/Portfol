import "./globals.css";

export const metadata = {
  title: 'Shah Nawaz Hussain — Linux & Cloud Infrastructure',
  description: 'Portfolio of Shah Nawaz Hussain, Linux System Administrator and Cloud Infrastructure Specialist.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
