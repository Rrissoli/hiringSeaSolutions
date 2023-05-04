import Image from 'next/image'
import { Inter } from 'next/font/google'
import PrincipalScreen from "../src/frontend/screen/principal"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PrincipalScreen/>
  )
}
