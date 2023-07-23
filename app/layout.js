import '@styles/globals.css'

export const metadata = {title:"PromtShare",description:"Discover and share AI prompts"}
const RootLayout = ({children}) => {return(
  <html lang="en">
    <body><div className='main'><div className='gradient'/></div></body>
    <main className='app'>{children}</main>
  </html>
)}
export default RootLayout;