<script setup lang="ts">
const { defaults, headlines } = useSite()

// To tweak the default look, edit `composables/useSite.ts`.
const t = defaults
const headline = headlines[t.headlineKey]

const Hero = computed(() => {
  if (t.heroVariant === 'B') return resolveComponent('HeroB')
  if (t.heroVariant === 'C') return resolveComponent('HeroC')
  return resolveComponent('HeroA')
})
</script>

<template>
  <div :style="{ background: '#0f0f0f', overflow: 'hidden' }">
    <component :is="Hero"
      :headline="headline"
      :primary-os="t.primaryOs"
      :lime="t.limeHex"
      :lime-mode="t.limeMode"
    />
    <Promise3Up :lime="t.limeHex" :lime-mode="t.limeMode" />
    <HowItWorks :lime="t.limeHex" :lime-mode="t.limeMode" />
    <Showcase :lime="t.limeHex" :lime-mode="t.limeMode" />
    <HonestFAQ :lime="t.limeHex" :lime-mode="t.limeMode" />
    <Comparison :lime="t.limeHex" :lime-mode="t.limeMode" />
    <SocialProof :lime="t.limeHex" :lime-mode="t.limeMode" />
    <FinalCTA :primary-os="t.primaryOs" :lime="t.limeHex" :lime-mode="t.limeMode" />
    <SiteFooter :lime="t.limeHex" />
  </div>
</template>
