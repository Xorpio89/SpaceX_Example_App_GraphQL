import Link from 'next/link'
import { getLaunches } from '@/lib/spacex'

export default async function Home() {
  const launches = await getLaunches()
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <p className="text-[--color-space-muted] text-xs mb-1">LATEST MISSIONS</p>
        <h2 className="text-white text-3xl font-semibold">Launch Archive</h2>
        <p className="text-[--color-space-muted] mt-1 text-sm">{launches.length} missions · Click any to get an AI briefing</p>
      </div>
      <div className="grid gap-3">
        {launches.map((launch) => (
          <Link key={launch.flight_number} href={`/launch/${launch.flight_number}`}
            className="group flex items-center gap-4 bg-[--color-space-card] border border-[--color-space-border] rounded-lg px-5 py-4 hover:border-[--color-space-accent] transition-all">
            <div className="w-10 h-10 flex-shrink-0">
              {launch.links.mission_patch_small
                ? <img src={launch.links.mission_patch_small} alt={launch.mission_name} className="w-10 h-10 object-contain" />
                : <div className="w-10 h-10 rounded-full bg-[--color-space-border] flex items-center justify-center">🛸</div>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[--color-space-muted] text-xs font-mono">#{launch.flight_number}</span>
                <span className="text-white font-medium truncate">{launch.mission_name}</span>
              </div>
              <p className="text-[--color-space-muted] text-xs mt-0.5">{launch.rocket.rocket_name} · {launch.launch_year}</p>
            </div>
            <div className="flex-shrink-0">
              {launch.launch_success === true && <span className="text-xs px-2 py-0.5 rounded-full bg-green-950 text-green-400 border border-green-800">SUCCESS</span>}
              {launch.launch_success === false && <span className="text-xs px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">FAILED</span>}
              {launch.launch_success === null && <span className="text-xs px-2 py-0.5 rounded-full bg-[--color-space-border] text-[--color-space-muted]">UNKNOWN</span>}
            </div>
            <span className="text-[--color-space-muted] group-hover:text-[--color-space-accent] transition-colors">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
