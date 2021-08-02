import LandingPage from "./landing-page"
import NoPage from "./no-page"
import WatchPage from "./watch-page"

const Page = props=>{
  console.log("props", props)
  
  switch(props?.page?.pageType || "landing" ){
    case "landing": return <LandingPage/>
    case "watch": return <WatchPage/>
    default: return <NoPage/>
  }
}

export default Page;