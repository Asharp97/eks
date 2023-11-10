<template>
  <div>
    <div class="faq-wrapper">
      <div class="faq" @click="openfaq[n] = !openfaq[n]" v-for="(f, n) in faq">
        <div class="question">
          <div class="t2">
            <span> 0{{ n + 1 }}. </span>
            {{ f.label }}
          </div>
          <div class="icons" :class="openfaq[n] ? 'open-icons' : ''">
            <Icon name="octicon:dash-16" class="right-icon icon" />
            <Icon name="octicon:dash-16" class="left-icon icon" />
          </div>
        </div>
        <div class="answer" :class="openfaq[n] ? 'open' : ''">
          <div class="p2"><br> {{ f.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['faq'])
const openfaq = ref([true])
</script>

<style lang="scss" scoped></style>