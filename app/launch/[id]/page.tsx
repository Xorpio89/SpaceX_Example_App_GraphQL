'use client'
import { useEffect, useState } from 'react'
import { useCopilotReadable } from '@copilotkit/react-core'
import Link from 'next/link'
import type { Launch } from '@/lib/spacex'

export default function LaunchPage({ params }: { params: { id: string } }) {
  const [launch, setLaunch] = useState<Launch | null>(null)

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${params.id}`).then(r => r.json()).then(setLaunch)
  }, [params.id])

  useCopilotReadable({
    description: 'Current SpaceX mission details',
    value: launch ? { mission: launch.mission_name, flightNumber: launch.flight_number, rocket: launch.rocket.rocket_name, year: launch.launch_year, success: launch.launch_success, details: launch.details } : 'Loading...',
  })

  if (!launch) return <div className="flex items-center justify-center h-64 text-[--color-space-muted]">Loading...</div>

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link href="/" className="text-[--color-space-muted] text-sm hover:text-white mb-6 inline-block">← Back</Link>
      <div className="flex items-start gap-6 mb-8">
        {launch.links.mission_patch_small && <img src={launch.links.mission_patch_small} alt={launch.mission_name} className="w-24 h-24 object-contain" />}
        <div>
          <p className="text-[--color-space-muted] text-xs font-mono mb-1">MISSION #{launch.flight_number}</p>
          <h1 className="text-white text-3xl font-semibold">{launch.mission_name}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[--color-space-muted] text-sm">{launch.rocket.rocket_name} · {launch.launch_year}</span>
            {launch.launch_success === true && <span className="text-xs px-2 py-0.5 rounded-full bg-green-950 text-green-400 border border-green-800">SUCCESS</span>}
            {launch.launch_success === false && <span className="text-xs px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">FAILED</span>}
          </div>
        </div>
      </div>
      {launch.details && (
        <div className="bg-[--color-space-card] border border-[--color-space-border] rounded-lg p-5 mb-6">
          <p className="text-[--color-space-muted] text-xs font-mono mb-2">MISSION SUMMARY</p>
          <p className="text-slate-300 text-sm leading-relaxed">{launch.details}</p>
        </div>
      )}
      <div className="bg-[--color-space-card] border border-[--color-space-accent]/30 rounded-lg p-5">
        <p className="text-[--color-space-accent] text-xs font-mono mb-1">🤖 AI MISSION BRIEFING</p>
        <p className="text-[--color-space-muted] text-sm">Open the chat (bottom right) — the AI already knows this mission.</p>
      </div>
      {launch.links.youtube_id && (
        <div className="mt-6">
          <p className="text-[--color-space-muted] text-xs font-mono mb-3">LAUNCH VIDEO</p>
          <iframe className="w-full rounded-lg border border-[--color-space-border]" height="400" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`} allowFullScreen />
        </div>
      )}
    </div>
  )
}
