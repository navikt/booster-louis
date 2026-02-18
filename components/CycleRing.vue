<script setup>
  defineProps({
    color: {
      type: String,
      default: '#3b82f6',
    },
    id: {
      type: String,
      default: 'blue',
    },
  })
</script>

<template>
  <div class="flex justify-center">
    <div class="cycle-ring">
      <div class="cycle-node top" :style="{ color }">
        <span class="i-carbon-education text-lg"></span>
        <span class="text-xs font-semibold">Learn</span>
      </div>
      <div class="cycle-node right" :style="{ color }">
        <span class="i-carbon-build text-lg"></span>
        <span class="text-xs font-semibold">Build</span>
      </div>
      <div class="cycle-node left" :style="{ color }">
        <span class="i-carbon-chart-line text-lg"></span>
        <span class="text-xs font-semibold">Measure</span>
      </div>
      <svg class="cycle-arrows" viewBox="0 0 200 200">
        <defs>
          <marker :id="`arrow-${id}`" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" :fill="color" />
          </marker>
        </defs>
        <path d="M 130,40 A 70,70 0 0,1 160,140" fill="none" :stroke="color" stroke-width="2" :marker-end="`url(#arrow-${id})`" />
        <path d="M 145,160 A 70,70 0 0,1 55,160" fill="none" :stroke="color" stroke-width="2" :marker-end="`url(#arrow-${id})`" />
        <path d="M 40,140 A 70,70 0 0,1 70,40" fill="none" :stroke="color" stroke-width="2" :marker-end="`url(#arrow-${id})`" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.cycle-ring {
  position: relative;
  width: 180px;
  height: 180px;
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
</style>
