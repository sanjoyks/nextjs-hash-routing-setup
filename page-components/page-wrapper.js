import LandingPage from "./landing-page"
import NoPage from "./no-page"
import WatchPage from "./watch-page"
import TVPage from "./tv-page";

const Page = props=>{
  console.log(props)
  switch(props?.page?.page_type || "landing" ){
    case "landing": return <LandingPage {...props}/>
    case "watch": return <WatchPage {...props}/>
    case "tv": return <TVPage {...props}/>
    default: return <NoPage {...props}/>
  }
}

export default Page;