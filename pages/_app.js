import { useRouter } from 'next/dist/client/router';
import React,  { useEffect, useState } from 'react';
import '../styles/globals.css'
import Navigation from "../components/navigation"
import getBFF from '../api/getBFF';
import App from "next/app";


function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [resp , setResponse] = useState({})

  useEffect(() => {
    const handleStart = async (url, { shallow }) => {
      setIsLoading(true)
      const resp = await getData(url);
      setResponse(resp);
      setIsLoading(false)
    }
    const handleStop = () => {
      console.log(`Router Change Stops: ${Component.name}`)
    }

    router.events.on("hashChangeStart", handleStart);
    router.events.on("hashChangeComplete", handleStop)

  }, [router]);
  return (
  <>
    <Navigation />
    {isLoading ?<span>Loader</span>:<Component {...pageProps} {...resp} />}
  </>)
}

const getData  = async(asPath)=>{
  console.log(asPath)
  const response = await getBFF(asPath) ;
  return {...response.data, };
}

export default MyApp
