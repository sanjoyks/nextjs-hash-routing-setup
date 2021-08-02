export const getData  = async(asPath)=>{
    console.log(asPath)
    const response = await getBFF(asPath) ;
    return {...response.data, };
  }