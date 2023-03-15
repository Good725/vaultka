import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='h-full overflow-x-hidden bg-[#001C34] text-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
