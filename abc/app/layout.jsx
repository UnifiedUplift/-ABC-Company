import '@/styles/global.css'
const RootLayout = ({children}) => {
  return (
    <html>
        <body>
        <main className=''>
            {children}
        </main>
        </body>
    </html>
  )
}

export default RootLayout