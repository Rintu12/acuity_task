import { jsx } from "react/jsx-runtime"

const baseUrl = 'https://acuitysoftware.co/snap-on/api'

export async function getBrands() {
  return await fetch(`${baseUrl}/brands`, {
      method: "POST"
   })
}
export async  function getSeriesByBrands(brandid) {

   
  return await   fetch(`${baseUrl}/series?brand_id=${brandid}`,{
      method:'POST'
      // headers:customHeader
     })

}
export async function getserieslistBySeriesid(seriesId) {
 return  await fetch(`${baseUrl}/handset-list?series_id=${seriesId}`)
}