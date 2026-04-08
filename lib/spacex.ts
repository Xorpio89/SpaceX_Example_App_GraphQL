export interface Launch {
  flight_number: number
  mission_name: string
  launch_year: string
  launch_date_local: string
  launch_success: boolean | null
  details: string | null
  links: { mission_patch_small: string | null; youtube_id: string | null }
  rocket: { rocket_name: string; rocket_type: string }
}
export async function getLaunches(): Promise<Launch[]> {
  const res = await fetch('https://api.spacexdata.com/v3/launches?limit=30&order=desc', { next: { revalidate: 3600 } })
  return res.json()
}
export async function getLaunch(id: string): Promise<Launch> {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/${id}`, { next: { revalidate: 3600 } })
  return res.json()
}
