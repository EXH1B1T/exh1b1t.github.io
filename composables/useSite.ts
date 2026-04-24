// Central configuration for the landing page.
// Edit here to change defaults — no code hunting required.

export const HEADLINES = {
  ownership: 'A portfolio site you actually own.',
  antisub:   'Stop paying rent on your portfolio.',
  craft:     'Photography deserves better than a template.',
  practical: 'Your photos. Your domain. Free, forever.'
} as const

export type HeadlineKey = keyof typeof HEADLINES

export const SITE_DEFAULTS = {
  heroVariant: 'A' as 'A' | 'B' | 'C',
  headlineKey: 'ownership' as HeadlineKey,
  primaryOs: 'mac' as 'mac' | 'windows',
  limeMode: 'restrained' as 'whisper' | 'restrained' | 'confident',
  limeHex: '#d4f541',

  // Flip to `false` when the desktop app is ready to ship — the site will
  // switch back to Download buttons + "v1.0 · free forever" badges.
  preLaunch: true,
  // Where the pre-launch CTA sends people. Defaults to the GitHub org so
  // visitors can Follow / Watch and self-subscribe to the first release —
  // no inbox to manage on our side.
  notifyUrl: 'https://github.com/EXH1B1T',
  // Shown in the top-right nav badge during pre-launch.
  preLaunchBadge: 'Coming soon · follow on GitHub'
}

export const PHOTOS = {
  heroA: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80',
  heroB: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
  heroC: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80',
  thumb1: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=75',
  thumb2: 'https://images.unsplash.com/photo-1502810365585-a0c41877d0af?w=400&q=75',
  thumb3: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=75',
  thumb4: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=75',
  thumb5: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&q=75',
  thumb6: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400&q=75',
  thumb7: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=75',
  thumb8: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=75',
  show1a: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80',
  show1b: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
  show1c: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80',
  show2a: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  show2b: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  show2c: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  show3a: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  show3b: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  show3c: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
  show4a: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
  show4b: 'https://images.unsplash.com/photo-1537907510278-10acdb198d0f?w=800&q=80',
  show4c: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
} as const

export const useSite = () => ({
  defaults: SITE_DEFAULTS,
  headlines: HEADLINES,
  photos: PHOTOS
})
