<script setup lang="ts">
interface ReasonItem {
  icon?: string
  title: string
  body: string
  tags?: string[]
  tone?: 'violet' | 'blue' | 'cyan'
}

interface LessonItem {
  icon?: string
  title: string
  description: string
  tone?: 'teal' | 'sky' | 'amber' | 'rose'
}

const props = withDefaults(defineProps<{
  reasons?: ReasonItem[]
  lessons?: LessonItem[]
  columns?: 1 | 2
}>(), {
  reasons: () => [],
  lessons: () => [],
  columns: 2,
})

const lessonToneColors: Record<NonNullable<LessonItem['tone']>, string> = {
  teal: '#5eead4',
  sky: '#7dd3fc',
  amber: '#fcd34d',
  rose: '#fda4af',
}

const totalClicks = props.reasons.length + props.lessons.length
</script>

<template>
  <ClickStepRegister :count="totalClicks" />
  <div
    class="grid gap-4"
    :style="{ gridTemplateColumns: props.columns === 2 ? '1fr 1fr' : '1fr' }"
  >
    <!-- Reasons Column -->
    <div v-if="props.reasons.length" class="flex flex-col gap-3">
      <div
        v-for="(reason, idx) in props.reasons"
        :key="`reason-${idx}`"
        class="neko-reason-block transition duration-450 ease-out"
        :class="[
          reason.tone ?? 'violet',
          $clicks < idx + 1 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0',
        ]"
        :style="{ transitionDelay: `${idx * 60}ms` }"
      >
        <div class="neko-reason-head">
          <div v-if="reason.icon" :class="reason.icon" />
          <strong>{{ reason.title }}</strong>
        </div>
        <div class="neko-reason-body">
          {{ reason.body }}
          <div v-if="reason.tags?.length" class="neko-reason-tags">
            <span v-for="tag in reason.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lessons Column -->
    <div v-if="props.lessons.length" class="flex flex-col gap-3">
      <div
        v-for="(lesson, idx) in props.lessons"
        :key="`lesson-${idx}`"
        class="neko-lesson-block transition duration-450 ease-out"
        :class="$clicks < props.reasons.length + idx + 1 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'"
        :style="{ transitionDelay: `${(props.reasons.length + idx) * 60}ms` }"
      >
        <div
          v-if="lesson.icon"
          :class="lesson.icon"
          :style="{ color: lessonToneColors[lesson.tone ?? 'teal'] }"
        />
        <div>
          <strong class="block text-base">{{ lesson.title }}</strong>
          <span class="block mt-2 text-sm opacity-55 leading-relaxed">{{ lesson.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
