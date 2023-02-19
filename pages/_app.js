import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps })
{
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className='m-auto overflow-auto p-0 max-w-max'>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
