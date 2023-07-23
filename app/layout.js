import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {title:"PromtShare",description:"Discover and share AI prompts"}
const RootLayout = ({children}) => {return(
  <html lang="en">
    <body><div className='main'><div className='gradient'/></div></body>
    <main className='app'><Nav></Nav>{children}</main>
  </html>
)}
export default RootLayout;