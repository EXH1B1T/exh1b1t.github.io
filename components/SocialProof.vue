<script setup lang="ts">
const props = defineProps<{
  lime: string
  limeMode: 'whisper' | 'restrained' | 'confident'
}>()

const testimonials = [
  {
    q: 'I switched from Squarespace the week I installed it. Same site, no rent.',
    who: 'Mira Lindqvist',
    role: 'Editorial & fashion'
  },
  {
    q: 'The publish button is honestly the first thing that has ever made git feel invisible.',
    who: 'Atlas & Paper',
    role: 'Landscape & travel'
  },
  {
    q: 'I own a repo now. I don\'t know what that means but my site loads in a second.',
    who: 'Lina Okafor',
    role: 'Documentary weddings'
  }
]
</script>

<template>
  <section class="sec proof" :style="{
    background: '#0f0f0f',
    color: '#e8e8e8',
    padding: '120px 48px',
    borderTop: '1px solid rgba(255,255,255,0.06)'
  }">
    <div :style="{ maxWidth: '1360px', margin: '0 auto' }">
      <SectionTag
        number="07"
        label="Early reads"
        color="rgba(232,232,232,0.4)"
        :accent="props.limeMode !== 'whisper' ? props.lime : 'rgba(232,232,232,0.6)'"
      />
      <h2 :style="{
        fontFamily: `'Cormorant Garamond', serif`,
        fontWeight: 400,
        fontSize: '56px',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        margin: '28px 0 56px',
        color: '#f4f2ed',
        maxWidth: '860px',
        textWrap: 'balance'
      }">
        From the photographers already using it.
      </h2>
      <div class="proof-grid" :style="{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px'
      }">
        <div v-for="(t, i) in testimonials" :key="i" :style="{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '6px',
          padding: '32px 28px 28px',
          position: 'relative'
        }">
          <div :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: '40px',
            fontStyle: 'italic',
            fontWeight: 400,
            color: props.limeMode === 'confident' ? props.lime : 'rgba(232,232,232,0.3)',
            lineHeight: 0,
            marginBottom: '18px',
            marginTop: '14px'
          }">"</div>
          <p :style="{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: '22px',
            lineHeight: 1.35,
            fontWeight: 400,
            letterSpacing: '-0.005em',
            margin: '0 0 28px',
            color: '#f4f2ed',
            textWrap: 'balance'
          }">
            {{ t.q }}
          </p>
          <div :style="{
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontFamily: `'Inter', sans-serif`,
            fontSize: '12px'
          }">
            <span :style="{ color: '#f4f2ed', fontWeight: 500 }">{{ t.who }}</span>
            <span :style="{ color: 'rgba(232,232,232,0.45)' }">{{ t.role }}</span>
          </div>
        </div>
      </div>
      <div :style="{
        marginTop: '32px',
        fontFamily: `'JetBrains Mono', monospace`,
        fontSize: '10.5px',
        color: 'rgba(232,232,232,0.35)',
        letterSpacing: '0.05em',
        textAlign: 'center'
      }">
        ※ PRE-LAUNCH — quotes are placeholders from early testers, will be replaced at public launch.
      </div>
    </div>
  </section>
</template>
