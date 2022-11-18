import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "@next/font/google"

const inter = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
