import LandingPage from "./landing-page"
import NoPage from "./no-page"
import WatchPage from "./watch-page"
import TVPage from "./tv-page";
import getBFF from "../api/getBFF"

const Page = props=>{
  console.log(props)
  switch(props?.page?.page_type || "landing" ){
    case "landing": return <LandingPage {...props}/>
    case "watch": return <WatchPage {...props}/>
    case "tv": return <TVPage {...props}/>
    default: return <NoPage {...props}/>
  }
}


Page.getInitialProps =  async(appContext)=>{
  console.log(appContext)
  const { asPath="/" } = appContext;
  console.log("asPath=====", asPath)
  console.log("calling bff", asPath);
  console.log(asPath)
  // const {asPath=""}= appContext.ctx;
  // console.log("calling get BFF for ", asPath, appContext.toString());
  const response = await getBFF(asPath) ;
  // const appContextValue = await App.getInitialProps(appContext)
  // console.log("appContextValue", appContextValue);
  debugger
  return {...response.data, };
}

export default Page;