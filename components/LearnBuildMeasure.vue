<template>
  <div class="flex justify-center mt-4">
    <div class="flex gap-12" style="max-width: 860px; width: 100%">
      <div class="flex flex-col items-center flex-1">
        <h3 class="text-base font-bold mb-4" style="color: #3b82f6">Product teams</h3>
        <div class="cycle-ring blue">
          <div class="cycle-node top">
            <span class="i-carbon-education text-lg"></span>
            <span class="text-xs font-semibold">Learn</span>
          </div>
          <div class="cycle-node right">
            <span class="i-carbon-build text-lg"></span>
            <span class="text-xs font-semibold">Build</span>
          </div>
          <div class="cycle-node left">
            <span class="i-carbon-chart-line text-lg"></span>
            <span class="text-xs font-semibold">Measure</span>
          </div>
          <svg class="cycle-arrows" viewBox="0 0 200 200">
            <defs>
              <marker id="arrow-blue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#3b82f6" />
              </marker>
            </defs>
            <path d="M 130,40 A 70,70 0 0,1 160,140" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)" />
            <path d="M 145,160 A 70,70 0 0,1 55,160" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)" />
            <path d="M 40,140 A 70,70 0 0,1 70,40" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)" />
          </svg>
        </div>
        <p class="text-xs mt-3 text-center" style="color: var(--nais-text-secondary); max-width: 220px">
          Users, needs, solutions
        </p>
      </div>

      <div class="flex flex-col items-center flex-1">
        <h3 class="text-base font-bold mb-4" style="color: #10b981">Platform teams</h3>
        <div class="cycle-ring green">
          <div class="cycle-node top">
            <span class="i-carbon-education text-lg"></span>
            <span class="text-xs font-semibold">Learn</span>
          </div>
          <div class="cycle-node right">
            <span class="i-carbon-build text-lg"></span>
            <span class="text-xs font-semibold">Build</span>
          </div>
          <div class="cycle-node left">
            <span class="i-carbon-chart-line text-lg"></span>
            <span class="text-xs font-semibold">Measure</span>
          </div>
          <svg class="cycle-arrows" viewBox="0 0 200 200">
            <defs>
              <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#10b981" />
              </marker>
            </defs>
            <path d="M 130,40 A 70,70 0 0,1 160,140" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
            <path d="M 145,160 A 70,70 0 0,1 55,160" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
            <path d="M 40,140 A 70,70 0 0,1 70,40" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
          </svg>
        </div>
        <p class="text-xs mt-3 text-center" style="color: var(--nais-text-secondary); max-width: 220px">
          Developer experience, capabilities
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cycle-ring {
  position: relative;
  width: 200px;
  height: 200px;
}

.cycle-arrows {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.cycle-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  z-index: 2;
  background: white;
  padding: 0.5rem;
  border-radius: 0.75rem;
}

.cycle-node.top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.cycle-node.right {
  bottom: 15%;
  right: 0;
}

.cycle-node.left {
  bottom: 15%;
  left: 0;
}

.blue .cycle-node {
  color: #3b82f6;
}

.green .cycle-node {
  color: #10b981;
}
</style>
