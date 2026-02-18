<template>
  <div class="flex justify-center mt-2">
    <div class="flex flex-col items-center" style="max-width: 820px; width: 100%; gap: 0">

      <div
        v-click
        class="flex gap-3"
        style="width: 100%; border-radius: 1rem 1rem 0 0; overflow: hidden;"
      >
        <div style="flex: 1; background: #eff6ff; border: 1px solid var(--nais-border); border-bottom: none; padding: 0.75rem 1rem; text-align: center;">
          <div style="font-size: 1.2rem;">👩‍💻 👨‍🎨 👩‍💼</div>
        </div>
        <div style="flex: 1; background: #eff6ff; border: 1px solid var(--nais-border); border-bottom: none; padding: 0.75rem 1rem; text-align: center;">
          <div style="font-size: 1.2rem;">👨‍💻 👩‍💻 👨‍💼 👩‍🎨</div>
        </div>
        <div style="flex: 1; background: #eff6ff; border: 1px solid var(--nais-border); border-bottom: none; padding: 0.75rem 1rem; text-align: center;">
          <div style="font-size: 1.2rem;">👩‍💻 👨‍💻 👩‍💼</div>
        </div>
        <div style="flex: 1; background: #eff6ff; border: 1px solid var(--nais-border); border-bottom: none; padding: 0.75rem 1rem; text-align: center;">
          <div style="font-size: 1.2rem;">👨‍🎨 👩‍💻 👨‍💼 👨‍💻</div>
        </div>
      </div>

      <div v-click class="flex justify-center" style="z-index: 3; margin: -0.25rem 0">
        <div class="i-carbon-arrow-down text-xl" style="color: #3b82f6"></div>
      </div>

      <div
        v-click
        class="platform-group"
        style="width: 100%;"
      >
        <div class="flex gap-3" style="width: 100%;">
          <div
            style="
              flex: 1;
              background: #ecfdf5;
              border: 1px solid var(--nais-border);
              padding: 1rem 1.25rem;
              border-radius: 0.5rem;
            "
          >
            <h3 class="text-sm font-bold" style="color: #10b981">
            <img src="/logos/nais.svg" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;" />
            Nais
          </h3>
            <div style="font-size: 0.9rem; margin-top: 0.25rem;">👩‍💻 👨‍💻 👩‍💻 👨‍💻</div>
            <p class="text-xs mt-1" style="color: var(--nais-text-secondary)">Can we build and maintain the application?</p>
            <div class="flex items-center gap-2 mt-2">
              <div class="tech-pill green">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                  style="width: 16px; height: 16px"
                  title="Kubernetes"
                />
              </div>
              <div class="tech-pill green">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  style="width: 16px; height: 16px"
                  title="Postgres"
                />
              </div>
              <div class="tech-pill green">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
                  style="width: 16px; height: 16px"
                  title="Kafka"
                />
              </div>
              <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
            </div>
          </div>
          <div
            style="
              flex: 1;
              background: #f5f3ff;
              border: 1px solid var(--nais-border);
              padding: 1rem 1.25rem;
              border-radius: 0.5rem;
            "
          >
            <h3 class="text-sm font-bold" style="color: #8b5cf6">Data platform</h3>
            <div style="font-size: 0.9rem; margin-top: 0.25rem;">👨‍💻 👩‍💻 👨‍💻</div>
            <p class="text-xs mt-1" style="color: var(--nais-text-secondary)">Do we solve the user needs?</p>
            <div class="flex items-center gap-2 mt-2">
              <div class="tech-pill purple">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                  style="width: 16px; height: 16px"
                  title="BigQuery"
                />
              </div>
              <div class="tech-pill purple">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg"
                  style="width: 16px; height: 16px"
                  title="Airflow"
                />
              </div>
              <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
            </div>
          </div>
          <div
            style="
              flex: 1;
              background: #fffbeb;
              border: 1px solid var(--nais-border);
              padding: 1rem 1.25rem;
              border-radius: 0.5rem;
            "
          >
            <h3 class="text-sm font-bold" style="color: #f59e0b">Platforce</h3>
            <div style="font-size: 0.9rem; margin-top: 0.25rem;">👩‍💻 👨‍💻</div>
            <p class="text-xs mt-1" style="color: var(--nais-text-secondary)">Can we build an maintain the low-code applications?</p>
            <div class="flex items-center gap-2 mt-2">
              <div class="tech-pill amber">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
                  style="width: 16px; height: 16px"
                  title="Salesforce"
                />
              </div>
              <span class="text-xs" style="color: var(--nais-text-secondary)">…</span>
            </div>
          </div>
        </div>
      </div>

      <div v-click class="flex justify-center" style="z-index: 3; margin: -0.25rem 0">
      </div>

      <div
        v-click
        class="flex flex-col items-center gap-1"
        style="padding: 0.75rem 1.5rem;"
      >
        <div style="font-size: 2rem">🤔</div>
        <h3 class="text-sm font-bold" style="color: var(--nais-text-secondary)">Louis</h3>
      </div>

    </div>
  </div>
</template>

<style scoped>
.platform-group {
  border: 2px dashed var(--nais-border);
  border-radius: 1rem;
  padding: 0.75rem;
  background: var(--nais-surface);
}
</style>
