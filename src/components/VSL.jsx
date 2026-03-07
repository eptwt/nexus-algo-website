import { useEffect } from 'react'

export default function VSL() {
  useEffect(() => {
    const v = window
    const i = document
    const d = 'Vidalytics'
    const a = 'vidalytics_embed_8gG043T4fSzhqxXA'
    const l = 'https://fast.vidalytics.com/embeds/xaUDT7_4/8gG043T4fSzhqxXA/'
    const y = '_' + d.toLowerCase()
    const c = d + 'L'

    if (!v[d]) v[d] = {}
    if (!v[c]) v[c] = {}
    if (!v[y]) v[y] = {}

    const vl = 'Loader'
    let vli = v[y][vl]
    let vsl = v[c][vl + 'Script']
    let vlf = v[c][vl + 'Loaded']
    let t
    const ve = 'Embed'

    if (!vsl) {
      vsl = function (u, cb) {
        if (t) { cb(); return }
        const s = i.createElement('script')
        s.type = 'text/javascript'
        s.async = 1
        s.src = u
        s.onload = function () { vlf = 1; cb() }
        i.getElementsByTagName('head')[0].appendChild(s)
      }
    }

    vsl(l + 'loader.min.js', function () {
      if (!vli) {
        const vlc = v[c][vl]
        vli = new vlc()
      }
      vli.loadScript(l + 'player.min.js', function () {
        const vec = v[d][ve]
        t = new vec()
        t.run(a)
      })
    })
  }, [])

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border/40 shadow-2xl">
          <div
            id="vidalytics_embed_8gG043T4fSzhqxXA"
            style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
          />
        </div>
      </div>
    </section>
  )
}
