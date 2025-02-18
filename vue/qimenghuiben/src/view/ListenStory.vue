<script setup>
import SearchCard from "../components/SearchCard.vue";
import AudioCard from "../components/AudioCard.vue";
import { getAudioList } from "../api/index";
import { onMounted, ref, watch } from "vue";
import Player from "../components/Player.vue";

const list = ref([]); // 存放音频列表
const newId = ref(1); // 请求的ID，用来分页加载
const playId = ref(0); // 当前播放的音频ID
const language = ref(0); // 当前语言，0为默认语言，1为国语，3为英语
const loading = ref(false); // 请求加载中状态
const finished = ref(false); // 数据是否已加载完
const music = ref(null); // 当前正在播放的音频
const isShow = ref(false); // 控制播放器的显示与隐藏

// 监听语言变化，切换语言时重新加载数据
watch(language, () => {
  // 在语言切换时，先清空列表并重置ID
  list.value = [];
  newId.value = 1;
  finished.value = false;
  loadAudioList();
});

// 组件挂载后加载数据
onMounted(() => {
  loadAudioList(); // 初始加载
});

// 封装数据加载的逻辑
const loadAudioList = async () => {
  if (loading.value || finished.value) return; // 防止重复请求
  loading.value = true;

  try {
    const res = await getAudioList(newId.value, language.value);
    if (res.length === 0) {
      finished.value = true; // 如果没有更多数据，设置finished为true
    } else {
      list.value = list.value.concat(res); // 追加数据
      newId.value += 1; // 更新下次请求的ID
    }
  } catch (error) {
    console.error("加载数据失败:", error);
  } finally {
    loading.value = false;
  }
};

// 播放音频的控制函数
const play = (item, _) => {
  music.value = item;
  isShow.value = _; // 显示播放器
  playId.value = _ ? item.id : 0; // 设置播放ID
};

// 关闭播放器
const close = () => {
  isShow.value = false;
  playId.value = 0;
};
</script>

<template>
  <van-sticky>
    <SearchCard />
    <div style="margin-top: 0.5rem; background: white; padding: 1rem">
      <van-button
        v-show="language !== 1"
        @click="language = 1"
        style="margin-left: 1rem; padding: 0 1rem"
        size="small"
        plain
        type="success"
      >
        国语
      </van-button>
      <van-button
        v-show="language === 1"
        @click="language = 1"
        style="margin-left: 1rem; padding: 0 1rem"
        size="small"
        type="success"
        color="#5cd3b4"
      >
        国语
      </van-button>
      <van-button
        v-show="language !== 3"
        @click="language = 3"
        style="margin-left: 1rem; padding: 0 1rem"
        size="small"
        plain
        type="success"
      >
        英语
      </van-button>
      <van-button
        v-show="language === 3"
        @click="language = 3"
        style="margin-left: 1rem; padding: 0 1rem"
        size="small"
        type="success"
        color="#5cd3b4"
      >
        英语
      </van-button>
    </div>
  </van-sticky>

  <div style="background: white; border-top: 0.1rem solid #f2f2f2">
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadAudioList"
    >
      <AudioCard
        :play="play"
        v-for="item in list"
        :item="item"
        :key="item.id"
        :isPlay="playId === item.id"
      />
    </van-list>
  </div>

  <div style="position: sticky; bottom: 4rem">
    <Player v-if="isShow" :close="close" :music="music" />
  </div>
</template>

<style scoped></style>
