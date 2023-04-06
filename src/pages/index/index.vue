<script setup lang="ts">
const title = ref('Hello')
</script>

<template>
  <view class="content">
    <myHeader />
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text c-red>
        {{ title }}
      </text>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
