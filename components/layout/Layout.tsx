import MainNavigation from '@components/layout/MainNavigation'
import { ReactNode } from 'react'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}
export default Layout
