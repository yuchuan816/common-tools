<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { ElMessage } from 'element-plus'
import { delay, random } from 'lodash'
import Tone, { pitches, synth } from '@/utils/tone'

interface Pitches {
  firstIndex: number
  secondIndex: number
  firstNotes: string
  secondNotes: string
}

const getRadomIntervalPitches = () => {
  const octave = 4

  const firstIndex = random(0, 6)
  const secondIndex = random(0, 6)

  if (firstIndex === secondIndex) {
    return getRadomIntervalPitches()
  }

  return {
    firstIndex,
    secondIndex,
    firstNotes: `${pitches[firstIndex]}${octave}`,
    secondNotes: `${pitches[secondIndex]}${octave}`,
  }
}

const speakByInterval = (firstNotes: string, secondNotes: string) => {
  const now = Tone.now()
  synth.triggerAttackRelease(firstNotes, '8n', now)
  synth.triggerAttackRelease(secondNotes, '8n', now + 0.5)
}

const radomIntervalPitches = ref<Pitches | null>(null)
let isTopToBottom = false

// 是否存在音符
const isExistPitches = computed(() => {
  return unref(radomIntervalPitches) !== null
})

const checkResults = () => {
  const { firstIndex, secondIndex, firstNotes, secondNotes } = unref(radomIntervalPitches)!

  if (firstIndex - secondIndex > 0 === isTopToBottom) {
    // 第一个音减第二个音大于0，就是从上往下走
    // 结果为正确，提示并播放下个
    ElMessage.success(`${firstNotes} -> ${secondNotes}`)
    delay(handleRefresh, 300)
  } else {
    // 错误，提示并重新播放
    ElMessage.error('回答错误！')
    delay(handlePlay, 300)
  }
}

const handlePlay = () => {
  const { firstNotes, secondNotes } = unref(radomIntervalPitches)!
  speakByInterval(firstNotes, secondNotes)
}

const handleRefresh = () => {
  radomIntervalPitches.value = getRadomIntervalPitches()
  handlePlay()
}

const handleTop = () => {
  isTopToBottom = false
  checkResults()
}

const handleBottom = () => {
  isTopToBottom = true
  checkResults()
}
</script>

<template>
  <div class="MelodyPitchPractice">
    <ElCard header="旋律音程高低判断">
      <div class="buttons-wrapper">
        <ElButton icon="Refresh" size="large" circle @click="handleRefresh" />
        <ElButton
          icon="VideoPlay"
          size="large"
          circle
          color="#229453"
          :disabled="!isExistPitches"
          @click="handlePlay"
        />
        <div class="arrows-wrapper">
          <ElButton
            color="#126e82"
            icon="Top"
            size="large"
            circle
            :disabled="!isExistPitches"
            @click="handleTop"
          />
          <ElButton
            class="bottom-button"
            color="#c1651a"
            icon="Bottom"
            size="large"
            circle
            :disabled="!isExistPitches"
            @click="handleBottom"
          />
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped>
.MelodyPitchPractice {
  .buttons-wrapper {
    display: flex;
    align-items: center;

    .arrows-wrapper {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--el-border-color-light);
      padding: 16px;
      margin-left: 24px;

      .bottom-button {
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }
}
</style>
