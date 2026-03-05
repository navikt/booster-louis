---
theme: default
title: Booster 2026
titleTemplate: '%s'
info: |
  ## Booster 2026
  Presentasjon
author: Louis
keywords: booster, presentasjon
htmlAttrs:
  lang: 'no'
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
layout: cover
routerMode: hash
fonts:
  sans: 'Inter'
  serif: 'Poppins'
  mono: 'JetBrains Mono'
---

<!-- Slide 1: Cover -->

::logo::
<div class="flex justify-center">
  <h1 class="text-6xl font-black">🚀</h1>
</div>

::default::
<h1 class="text-5xl font-black mt-4">Booster 2026</h1>
<p class="text-xl mt-2" style="color: var(--nais-text-secondary)">There is more to life than KPIs!</p>
<p class="text-xl mt-2" style="color: var(--nais-text-secondary)">Louis Dieffenthaler, Head of Platform in Nav</p>

---
layout: default
---

<!-- Slide 2: Intro -->

::header::
<h1 class="text-3xl font-bold">About expectations</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-6">
  <ul class="text-lg" style="max-width: 700px; color: var(--nais-text-secondary); list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
    <li v-click>The things we talk about are my own experiences and reflections</li>
    <li v-click>Your context is different from mine</li>
    <p v-click> -> Do not view this as a blueprint :)</p>
    <p></p>
    <li v-click>Also, Hans Kristian provided the template for the presentation. Thank you!</li>
  </ul>
</div>

---
layout: default
---

<!-- Slide 2: Intro -->

::header::
<h1 class="text-3xl font-bold">Spoiler: What my message is</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-6">
  <div style="max-width: 700px; color: var(--nais-text-secondary); display: flex; flex-direction: column; gap: 1rem;">
    <p v-click class="text-lg">Everything you as a leader achieve is an <b>indirect</b> effect. You do not achieve anything directly.</p>
    <p v-click class="text-lg">You should spend more time together with the teams. And that means going out of your comfort zone.</p>
    <p v-click class="text-lg">Do so, and you will:</p>
    <ul class="text-lg" style="list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
      <li v-click>Earn trust</li>
      <li v-click>Help the teams with stuff that really matters</li>
      <li v-click>Have more fun because well-being(<img src="/logos/intellij.svg" style="display:inline;height:1.2em;vertical-align:middle;" />) > well-being(<img src="/logos/powerpoint.svg" style="display:inline;height:1.2em;vertical-align:middle;" />) :)</li>
    </ul>
  </div>
</div>


---
layout: default
---

<!-- Slide 3: Agenda -->

::header::
<h1 class="text-3xl font-bold">Agenda</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-6">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge accent">
        <span class="i-carbon-presentation-file text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why do we have platforms?</h3>
      <p class="text-xs mt-2" style="color: var(--nais-text-secondary);">About Nav, the product teams and how the platforms help</p>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge blue">
        <span class="i-carbon-code text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why talk about trust?</h3>
      <p class="text-xs mt-2" style="color: var(--nais-text-secondary);">What is it, really? And why care? </p>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge green">
        <span class="i-carbon-chat text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">How I *try* to earn trust</h3>
      <p class="text-xs mt-2" style="color: var(--nais-text-secondary);"> Being present and humble, but also bringing my perspective and views </p>
    </div>
  </div>
</div>

---
layout: default
---

::default::
<div class="flex justify-center items-center h-full">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 1;">
      <div class="icon-badge accent">
        <span class="i-carbon-presentation-file text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why do we have platforms?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge blue">
        <span class="i-carbon-code text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why talk about trust?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge green">
        <span class="i-carbon-chat text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">How I *try* to earn trust</h3>
    </div>
  </div>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">The purpose of Nav</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center items-center gap-16 mt-8">
  <div v-click class="flex flex-col items-center">
    <img src="/images/need-money.svg" style="height: 240px;" />
  </div>
  <div v-click class="flex flex-col items-center">
    <img src="/images/need-job.svg" style="height: 240px;" />
  </div>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">...achieved by 100+ product teams</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex items-start justify-center mt-4 gap-12">
  <ul class="text-lg" style="max-width: 400px; color: var(--nais-text-secondary); list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
    <li v-click>They know their users</li>
    <li v-click>They know the potential solutions</li>
  </ul>
  <CycleRing color="#3b82f6" id="product" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">...powered by the platforms</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex items-start justify-center mt-4 gap-12">
  <ul class="text-lg" style="max-width: 400px; color: var(--nais-text-secondary); list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
    <li v-click>Take some of the burden off teams</li>
    <li v-click>Encourage teams to do what we want them to do</li>
    <li v-click>Enforce teams to do what we want them to do</li>
  </ul>
  <CycleRing color="#10b981" id="platform" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Teams and platforms </h1>
<div class="gradient-bar"></div>

::default::
<MissionStack />

---
layout: quote
---

# You want to hire smarter people than you

— Someone at LinkedIn (I assume)


---
layout: default
---

::default::
<div class="flex justify-center items-center h-full">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge accent">
        <span class="i-carbon-presentation-file text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why do we have platforms?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 1;">
      <div class="icon-badge blue">
        <span class="i-carbon-code text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why talk about trust?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge green">
        <span class="i-carbon-chat text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">How I *try* to earn trust</h3>
    </div>
  </div>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">What is trust, really?</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex flex-col items-center mt-8 gap-6">
  <div class="flex items-center gap-8">
    <div v-click class="nais-card flex flex-col items-center text-center px-8 py-6" style="min-width: 200px;">
      <div style="font-size: 2.5rem;">❤️</div>
      <h3 class="text-lg font-bold mt-3">Intention</h3>
      <p class="text-sm mt-2" style="color: var(--nais-text-secondary);">Do you want to achieve the same thing as me?</p>
    </div>
    <div v-click class="text-3xl font-bold" style="color: var(--nais-text-secondary);">×</div>
    <div v-click class="nais-card flex flex-col items-center text-center px-8 py-6" style="min-width: 200px;">
      <div style="font-size: 2.5rem;">🛠️</div>
      <h3 class="text-lg font-bold mt-3">Skill</h3>
      <p class="text-sm mt-2" style="color: var(--nais-text-secondary);">Are you able to achieve that?</p>
    </div>
  </div>
  </div>


---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Do I trust you? It depends</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-8">
  <table style="border-collapse: collapse; max-width: 700px; width: 100%; font-size: 1rem;">
    <thead>
      <tr>
        <th style="padding: 0.75rem 1.25rem; border-bottom: 2px solid var(--nais-border);"></th>
        <th style="padding: 0.75rem 1.25rem; border-bottom: 2px solid var(--nais-border); text-align: center;">❤️ Intention</th>
        <th style="padding: 0.75rem 1.25rem; border-bottom: 2px solid var(--nais-border); text-align: center;">🛠️ Ability</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); color: var(--nais-text-secondary);">To fly me back to Oslo</td>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); text-align: center; font-size: 1.5rem;">✅</td>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); text-align: center; font-size: 1.5rem;">❌</td>
      </tr>
      <tr>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); color: var(--nais-text-secondary);">To set policies in our GCP-organization</td>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); text-align: center; font-size: 1.5rem;">✅</td>
        <td v-click style="padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--nais-border); text-align: center; font-size: 1.5rem;">✅</td>
      </tr>
    </tbody>
  </table>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Is trust so important?</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-4">
  <div class="flex flex-col items-center" style="max-width: 700px; width: 100%; gap: 0;">
    <div class="flex gap-3" style="width: 100%;">
      <div style="flex: 1; background: #ecfdf5; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👷 👷</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Team A</span>
      </div>
      <div style="flex: 1; background: #ecfdf5; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👷 👷 👷</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Team B</span>
      </div>
      <div style="flex: 1; background: #ecfdf5; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👷 👷</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Team C</span>
      </div>
    </div>
    <div class="flex" style="width: 100%;">
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding: 0.5rem 0;">
        <span style="color: var(--nais-border); font-size: 1rem;">⬆️</span>
        <span class="text-xs" style="color: var(--nais-text-secondary);">instructions</span>
        <span class="text-xs mt-1" style="color: var(--nais-text-secondary); font-style: italic;">"communicated and understood"</span>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding: 0.5rem 0;">
        <span style="color: var(--nais-border); font-size: 1rem;">⬇️</span>
        <span class="text-xs" style="color: var(--nais-text-secondary);">output (KPIs)</span>
        <span class="text-xs mt-1" style="color: var(--nais-text-secondary); font-style: italic;">"what they built solved the problems"</span>
      </div>
    </div>
    <div style="background: #eff6ff; border: 1px solid var(--nais-border); border-radius: 0.75rem; padding: 0.75rem 1.5rem; width: 100%; text-align: center;">
      <div style="font-size: 1.5rem;">🧑‍💼</div>
      <h3 class="text-sm font-bold mt-1">Leader</h3>
      <span class="text-xs" style="color: var(--nais-text-secondary); font-style: italic;">"knows everything"</span>
    </div>
  </div>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">In reality</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-2">
  <div class="flex flex-col items-center" style="max-width: 820px; width: 100%; gap: 0;">
    <div class="flex gap-3 flex-wrap justify-center" style="width: 100%; padding-bottom: 1.5rem;">
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👩‍💻</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Developer</span>
      </div>
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👨‍🎨</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Designer</span>
      </div>
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">📊</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Analyst</span>
      </div>
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">🧬</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Data scientist</span>
      </div>
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">🔧</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Data engineer</span>
      </div>
      <div style="background: #eff6ff; border: 1px solid var(--nais-border); padding: 0.5rem 0.75rem; border-radius: 0.5rem; text-align: center;">
        <div style="font-size: 1.2rem;">👩‍💼</div>
        <span class="text-xs" style="color: var(--nais-text-secondary);">Product mgr</span>
      </div>
      <div style="padding: 0.5rem 0.5rem; display: flex; align-items: center;">
        <span class="text-lg font-bold" style="color: var(--nais-text-secondary);">…</span>
      </div>
    </div>
    <div class="flex justify-center" style="z-index: 3; margin: -0.25rem 0;">
      <div class="i-carbon-arrow-down text-xl" style="color: #3b82f6"></div>
    </div>
    <div class="platform-group" style="width: 100%;">
      <div class="flex gap-3" style="width: 100%;">
        <div style="flex: 1; background: #ecfdf5; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem;">
          <h3 class="text-sm font-bold" style="color: #10b981">
            <img src="/logos/nais.svg" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;" />
            Nais
          </h3>
          <div style="font-size: 0.9rem; margin-top: 0.25rem;">👩‍💻 👨‍💻 👩‍💻 👨‍💻</div>
          <div class="flex items-center gap-2 mt-2">
            <div class="tech-pill green"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" style="width: 16px; height: 16px" title="Kubernetes" /></div>
            <div class="tech-pill green"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style="width: 16px; height: 16px" title="Postgres" /></div>
            <div class="tech-pill green"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" style="width: 16px; height: 16px" title="Kafka" /></div>
            <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
          </div>
        </div>
        <div style="flex: 1; background: #f5f3ff; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem;">
          <h3 class="text-sm font-bold" style="color: #8b5cf6">Data platform</h3>
          <div style="font-size: 0.9rem; margin-top: 0.25rem;">👨‍💻 👩‍💻 👨‍💻</div>
          <div class="flex items-center gap-2 mt-2">
            <div class="tech-pill purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" style="width: 16px; height: 16px" title="BigQuery" /></div>
            <div class="tech-pill purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" style="width: 16px; height: 16px" title="Airflow" /></div>
            <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
          </div>
        </div>
        <div style="flex: 1; background: #fffbeb; border: 1px solid var(--nais-border); padding: 0.75rem 1rem; border-radius: 0.5rem;">
          <h3 class="text-sm font-bold" style="color: #f59e0b">Platforce</h3>
          <div style="font-size: 0.9rem; margin-top: 0.25rem;">👩‍💻 👨‍💻</div>
          <div class="flex items-center gap-2 mt-2">
            <div class="tech-pill amber"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" style="width: 16px; height: 16px" title="Salesforce" /></div>
            <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center" style="z-index: 3; margin: -0.25rem 0;">
    </div>
    <div class="flex flex-col items-center gap-1" style="padding: 0.75rem 1.5rem;">
      <div style="font-size: 2rem">🤔</div>
      <h3 class="text-sm font-bold" style="color: var(--nais-text-secondary)">Louis</h3>
    </div>
  </div>
</div>

---
layout: quote
---

# You need to trust the smart people!

---
layout: quote
---

# ...and

---
layout: quote
---

# ...YOU need to earn their trust!


---
layout: default
---

::default::
<div class="flex justify-center items-center h-full">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge accent">
        <span class="i-carbon-presentation-file text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why do we have platforms?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 0.3;">
      <div class="icon-badge blue">
        <span class="i-carbon-code text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">Why talk about trust?</h3>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6" style="opacity: 1;">
      <div class="icon-badge green">
        <span class="i-carbon-chat text-xl"></span>
      </div>
      <h3 class="text-base font-bold mt-3">How I *try* to earn trust</h3>
    </div>
  </div>
</div>


---
layout: default
---

::header::
<h1 class="text-3xl font-bold">What is trust, really?</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex flex-col items-center mt-8 gap-6">
  <div class="flex items-center gap-8">
    <div v-click class="nais-card flex flex-col items-center text-center px-8 py-6" style="min-width: 200px;">
      <div style="font-size: 2.5rem;">❤️</div>
      <h3 class="text-lg font-bold mt-3">Intention</h3>
      <p class="text-sm mt-2" style="color: var(--nais-text-secondary);">Do you want to achieve the same thing as me?</p>
    </div>
    <div v-click class="text-3xl font-bold" style="color: var(--nais-text-secondary);">×</div>
    <div v-click class="nais-card flex flex-col items-center text-center px-8 py-6" style="min-width: 200px;">
      <div style="font-size: 2.5rem;">🛠️</div>
      <h3 class="text-lg font-bold mt-3">Skill</h3>
      <p class="text-sm mt-2" style="color: var(--nais-text-secondary);">Are you able to achieve that?</p>
    </div>
  </div>
  </div>




---
layout: default
---

::default::
<div class="flex justify-center items-center h-full">
  <img src="/images/calendar-zoom.svg" style="height: 380px;" />
</div>

---
layout: quote
---

# "I`m curious"

---
layout: quote
---

# "Do you enjoy this stuff?"

---
layout: quote
---

# And fix stuff you should fix.


---
layout: default
---

::header::
<h1 class="text-3xl font-bold">What my message is</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-6">
  <div style="max-width: 700px; color: var(--nais-text-secondary); display: flex; flex-direction: column; gap: 1rem;">
    <p class="text-lg">Everything you as a leader achieve is an indirect effect. You do not achieve anything directly.</p>
    <p class="text-lg">Hire smart people and trust them</p>
    <p class="text-lg">Hire smart people and earn <b>their trust</b> <3 </p>

  </div>
</div>

---
layout: cta
---
<!-- Slide 6: Avslutning -->

::header::
<div class="flex flex-col items-center gap-4">
  <h1 class="text-4xl font-black">Takk for meg!</h1>
  <div class="gradient-bar" style="width: 120px;"></div>
</div>

::default::
<div class="flex flex-col items-center gap-6">
  <p class="text-lg" style="color: var(--nais-text-secondary);">Please, reach out!</p>
</div>
