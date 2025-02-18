<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import { onMounted, ref, watch } from "vue";
import {
  getGoodsDetail,
  getCommentList,
  getLikeList,
  createComment,
} from "../api/index.js";
const score1 = ref(0);
const score2 = ref(0);
const title1 = ref("");
const title2 = ref("");
const data = ref("");
const commentList = ref();
const translator = ref();
const message = ref("");
const desc = ref("");
watch(
  () => route.params.id,
  () => {
    router.go(0);
  },
);
// 格式化文本
const formatText = (text) => {
  return text.replaceAll("<img", `<img style="  width: 100%;"`);
};
onMounted(() => {
  getGoodsDetail(route.params.id).then((res) => {
    desc.value = formatText(res.goods_desc);
    console.log(desc.value);
    data.value = res;
    translator.value = data.value.translator.translator;
    score1.value = data.value.goods_ability_list[0].score * 20;
    score2.value = data.value.goods_ability_list[1].score * 20;
    title1.value = data.value.goods_ability_list[0].title;
    title2.value = data.value.goods_ability_list[1].title;
  });
  getCommentList(route.params.id).then((res) => {
    commentList.value = res;
  });
});
const goToTag = (labelId) => {
  router.push(`/Tag/${labelId}`);
};
const goToDetail = (id) => {
  router.push(`/Detail/${id}`);
};
const goToBookList = (id) => {
  router.push(`/BookList/${id}`);
};
// 猜你喜欢
const active = ref(0);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const newId = ref(0);
const onLoad = async (type) => {
  if (loading.value || finished.value) return; // 防止重复请求
  loading.value = true;
  try {
    const res = await getLikeList(type, newId.value);
    if (res.length === 0) {
      finished.value = true;
    } else {
      list.value = list.value.concat(res);
      newId.value += 10;
    }
  } catch (error) {
    console.error("加载数据失败:", error);
  } finally {
    loading.value = false;
  }
};
// 评论
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const onSubmit = () => {
  createComment(message.value, route.params.id).then((res) => {
    console.log(res);
  });
  show.value = false;
};
</script>

<template>
  <div class="box">
    <header>
      <div class="head">
        <div>
          <img
            style="
              height: 15rem;
              box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
            "
            :src="data.goods_img"
            alt=""
          />
        </div>
        <div style="margin-left: 1rem">
          <div style="font-size: 1.5rem; font-weight: bold">
            {{ data.goods_name }}
          </div>
          <div style="margin: 0.8rem 0">
            <van-button
              style="margin: 0.2rem"
              v-for="_ in data.label_list"
              size="small"
              type="primary"
              color="#fff4f2"
              @click="goToTag(_.label_id)"
            >
              <span style="color: #ff5c38"> {{ _.label_name }} </span>
            </van-button>
          </div>
          <div style="display: grid; grid-template-columns: 2fr 3fr">
            <div style="color: #404040">
              <div>作者</div>
              <div>出版社</div>
              <div>译者</div>
            </div>
            <div style="color: #808080">
              <div>{{ data.author }}</div>
              <div>{{ data.press_name }}</div>
              <div>{{ translator }}</div>
            </div>
          </div>
          <div style="margin: 0.8rem 0">
            <van-button
              style="
                margin-left: 0.5rem;
                margin-top: 0.5rem;
                border-radius: 5rem;
              "
              type="primary"
              color="#f5f5f5"
            >
              <span style="color: #666666"> 购买实体绘本 </span>
            </van-button>
          </div>
        </div>
      </div>
      <div style="display: flex">
        <img
          style="height: 3.5rem; margin: 0 1rem"
          src="data:image/png;base64,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"
          alt=""
        />
        <div style="margin-left: 1rem; color: #808080; width: 18rem">
          <div style="height: 60%; display: flex">
            <div style="width: 8rem">{{ title1 }}</div>
            <van-slider
              style="margin-top: 0.4rem; height: 0.5rem"
              v-model="score1"
            >
              <template #button />
            </van-slider>
          </div>
          <div style="height: 60%; display: flex">
            <div style="width: 8rem">{{ title2 }}</div>
            <van-slider
              style="height: 0.5rem; margin-top: 0.5rem"
              v-model="score2"
            >
              <template #button />
            </van-slider>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div style="margin: 1rem; padding: 0.1rem 0.5rem; background: white">
    <h2>达人怎么说</h2>
    <div
      class="expertSpeak"
      style="
        padding: 0.5rem 1rem;
        overflow: hidden;
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.1);
      "
      v-for="item in data.expert_speak_list"
    >
      <div style="display: grid; grid-template-columns: 1fr 5fr">
        <div>
          <img
            style="height: 3rem; border-radius: 50%"
            :src="item.avatar"
            alt=""
          />
        </div>
        <div>
          <div style="font-size: 1.2rem; font-weight: bold">
            {{ item.name }}
            <img
              style="height: 1rem; margin-left: 0.5rem"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABUpJREFUSA2VVk1MXFUUPvfNAKVIsSGaFkocrErUuGBBQkwqLlpNTGxJIF2wcG2MG/eNKxI3Jm6MujKmC6JNMbRpdIELGzY0jaFWasU2QEuh0XbKz1AGZt671++7fx3An3rmzXvnnnvO951z7n0zV8ljyMMrn3dXdNYvWh/ROm3XqW4TkwnGS0b0ojHZhDIy9nTfh1P/Baf+zaF07ctBXa0Ma627SGCyDBwgMhoXxjo8vS5mRpn01MGjH539J9y/JSz/drqzmmUjkqW9BEVVrEYMiDRIAyHtnLdj2JmETUjMZF6yoQNvfjy3kzjZaSjfGOlLtbmMyF7OGXwUPoa6gY4U+aTQbjPmkAq+yjn0plouL3z3QR/9amUbYfnGmT6dZuOAbGWgg3XuHFtwDGtJOcuknDNifDKwtEIdXzi/nTQSlufPdKJFo0Cti0yIqq0uJEBMW4nLxepujh3wacEA8jqjstH58+93eleJhFI1I6zMgbmEbSVgJ0TAYWDQQwJM0NqsIVj9UhhpRQiwnVjCrdnRQbTFrpkzgwLMIZS2UBVbRp3CRJyKu7u8lbM1YqT31th7g7TkecO7NOxWyK1b04vv0LxLss1lWb36lWXSntWR4o7ricJrsu+5N2Lc+sIleXCFjQODmGFMnE0q8+e6Me5iPfyEdsWoGiW3Z7+ouiZXrbf7YqW+pSDNh49G78rqoixPj7oxQbXpmj/3bncevxL9LkvOcZeJlG//gKy0qIb9sudATwShUtfcLtnmmvNlgtTqm6Tl5UEk67aErpalOHUaJHh/6aCZFrAz6U9AfsQNHS2TydYXJS3dkcr9afAiqEbyzYd8F9ymIFDLSwOSa2i2Xlzj5avfSFYu1kRBtfDZkcQY1c4ZttNZ3cO+d0gpXV/idJT8vkNWpzelqfC61D9ZsDpv63M/yub969DIAAmOVJW0JyihzU/ZzNlSOtkHbunabYZFyTdil+f2Ak5J/f7Dsrfj1Ti39WBWSjfHsSwexLPFd1OrNtd0H0LHsGmYBPW0tBABg1LfckiShn3S3PU2fFy62daarPzytS3M2WD3cy4BRKOfiagEfzG7JVSoK2vYJMvbHOrQwuYXTkiSb7R2/mivTGPdqhs1fkCwlcJEYqffxaYxiy5H+rpdatfP+9Gart7iI0rDU69gtx6M49LsuFRWF0JB0b7TgP/MRRY5ESpkIi4ZbCFkZO24VXesY2gjkTf/vCblO5fsmjLhbRKAWZ0Dn0CFaiy4WRJMco4391B2p5qssg2Lg3Tjvqz9fsGB0cAkCR7EAoQB3HJqLKkvnJgC8kz4aWP2NsYHsk5YdlXJBNauf4uXuuq2tAevrd62iPy2ApkpnPhiyu5SAJ5ywH5tEWyJHyW36/Uo3fw+vty2+bYwJusrdCQRAa08xYElbHj2JM4gajIm42OYISvnsLIyH8HKd3+SSnEmgj1KjsvBUiEIsom44eQz/Z/Zc058D1WdGoJLkQkyhiTuyZZCsg1c96RaWpKN2xdpsT5BsTwMilbG4WOkiAewnUTCxsLJuSRRAwDHopDR5hf87LpWir/K+o0L+HHCwQnCRCwH7+7yVs5ClFSV5AYKxz+dcwbf0jBofH7oYpLPHUNska0hIAVjW+3WHz+LSR/GyjnnfHDn5QNclxQw5FjH8U8u0i9IrDAYSJpPVA+CJoONOAQhMcUCOjXabIXeQSVqMp9IT8db28kY4nPy0TsePAibtDqMs2hX7QE4nE1rz6s8JON/HQfh7P8fhHfwyjKO+jgB9wPUHvXxh9pm/ye1WcLv6GJm0omcSh7rqP8Xqb+9ofyl6lUAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div style="font-size: 0.9rem; color: #8a8a8a">
            {{ item.user_title }}
          </div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
      <p
        style="line-height: 1.8rem; color: #4e4e4e"
        v-html="formatText(item.description)"
      ></p>
    </div>
    <div style="margin-top: 2rem; font-size: 1.4rem; font-weight: bold">
      简介
    </div>
    <div
      style="
        padding: 0.5rem 1rem;
        overflow: hidden;
        box-shadow: 0 1rem 1rem #e6e6e6;
      "
    >
      <p
        class="desc"
        style="line-height: 1.8rem; color: #4e4e4e"
        v-html="desc"
      ></p>
    </div>
    <div
      style="
        margin-top: 2rem;
        font-size: 1.4rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
      "
    >
      <div>读过用户怎么说</div>
      <div>
        <van-cell title="评论" is-link @click="showPopup" />
        <van-popup
          v-model:show="show"
          position="bottom"
          :style="{ height: '15%' }"
        >
          <van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field
                v-model="message"
                placeholder="评论"
                :rules="[{ required: true, message: '请输入评论内容' }]"
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-button round block type="primary" native-type="submit">
                提交
              </van-button>
            </div>
          </van-form>
        </van-popup>
      </div>
    </div>
    <div
      style="
        padding: 0.5rem 1rem;
        overflow: hidden;
        box-shadow: 0 1rem 1rem #e6e6e6;
      "
    >
      <div v-for="user in commentList" :key="user.id">
        <div
          style="display: grid; grid-template-columns: 1fr 5fr; padding: 1rem 0"
        >
          <div>
            <img
              style="height: 3rem; border-radius: 50%"
              :src="user.user_info.avatar"
              alt=""
            />
          </div>
          <div style="padding: 0 0.5rem">
            <div style="font-size: 1.2rem; font-weight: bold">
              {{ user.user_info.username }}
            </div>
            <div style="font-size: 1rem; color: #8a8a8a; line-height: 1.8rem">
              {{ user.user_info.birthday_title }}
            </div>
            <div style="padding: 1rem 0">{{ user.message }}</div>
            <div
              style="
                font-size: 1rem;
                color: #8a8a8a;
                line-height: 1.8rem;
                display: flex;
                justify-content: space-between;
              "
            >
              <div>{{ user.show_time }}</div>
              <div>回复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 2rem; font-size: 1.4rem; font-weight: bold">
      <van-tabs
        v-model:active="active"
        @click-tab="
          list = [];
          onLoad(active + 1);
        "
      >
        <van-tab title="猜你喜欢"
          ><div
            style="
              padding: 0.5rem 1rem;
              overflow: hidden;
              box-shadow: 0 1rem 1rem #e6e6e6;
            "
          >
            <van-list
              :loading="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad(1)"
              style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
              "
            >
              <div
                @click="goToDetail(item.goods_id)"
                v-for="item in list"
                :key="item.id"
              >
                <div>
                  <div>
                    <img style="width: 7rem" :src="item.goods_thumb" alt="" />
                  </div>
                  <div
                    style="
                      font-size: 1.2rem;
                      font-weight: bold;
                      text-align: center;
                    "
                  >
                    {{ item.goods_name }}
                  </div>
                </div>
              </div>
            </van-list>
          </div></van-tab
        >
        <van-tab title="推荐书单"
          ><div
            style="
              padding: 0.5rem 1rem;
              overflow: hidden;
              box-shadow: 0 1rem 1rem #e6e6e6;
            "
          >
            <van-list
              :loading="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad(2)"
              style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
              "
            >
              <div
                @click="goToBookList(item.goods_id)"
                v-for="item in list"
                :key="item.id"
              >
                <div style="background: #f5f5f5; padding: 1rem 0.5rem">
                  <div
                    style="
                      margin: 0.5rem 0;
                      width: 10rem;
                      font-size: 1rem;
                      font-weight: bold;
                      text-align: center;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    "
                  >
                    {{ item.goods_name }}
                  </div>
                  <div style="text-align: center">
                    <img style="width: 7rem" :src="item.goods_thumb" alt="" />
                  </div>
                </div>
              </div>
            </van-list></div
        ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped>
.box {
  padding: 2rem 1rem;
  background: white;
}
.head {
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid #eee;
}
</style>
