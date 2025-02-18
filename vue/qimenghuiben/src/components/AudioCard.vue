<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps(["item", "play", "isPlay"]);
const go = (id) => {
  router.push({ name: "Detail", params: { id: id } });
};
</script>

<template>
  <div
    @click="go(item.goods_id)"
    style="
      display: grid;
      grid-template-columns: 2fr 5fr 2fr;
      padding: 1rem 1rem 3rem 1rem;
    "
  >
    <div>
      <img style="height: 8rem; width: 6rem" :src="item.cover_image" alt="" />
    </div>
    <div>
      <div class="title">{{ item.title }}</div>
      <div
        style="
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 4fr;
        "
      >
        <div>
          <svg
            t="1739016934897"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3623"
            width="24"
            height="24"
          >
            <path
              d="M512 128c-211.744 0-384 172.256-384 384s172.256 384 384 384 384-172.256 384-384-172.256-384-384-384z m0 704c-176.448 0-320-143.552-320-320s143.552-320 320-320 320 143.552 320 320-143.552 320-320 320z"
              fill="#8a8a8a"
              p-id="3624"
            ></path>
            <path
              d="M660.736 606.112L528 529.344V320c0-17.664-14.336-32-32-32s-32 14.336-32 32v224c0 11.872 14.752 21.824 24.352 27.328 2.656 4 9.952 7.616 14.4 10.176l132 80c15.296 8.832 31.872 3.584 40.704-11.712s0.608-34.848-14.72-43.68z"
              fill="#8a8a8a"
              p-id="3625"
            ></path>
          </svg>
        </div>
        <div style="padding-top: 0.21rem; color: #8a8a8a">
          {{
            (Math.floor(item.time / 60) < 10
              ? "0" + Math.floor(item.time / 60)
              : Math.floor(item.time / 60)) +
            ":" +
            (item.time % 60)
          }}
        </div>
        <div style="padding-top: 0.2rem">
          <svg
            t="1739017559596"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5208"
            width="20"
            height="20"
          >
            <path
              d="M224.089812 799.750078H192.099809a187.781318 187.781318 0 0 1-191.940019-191.940019 187.781318 187.781318 0 0 1 191.940019-191.940018h31.990003z m-63.980006-316.381131A122.841612 122.841612 0 0 0 64.139796 607.810059a122.841612 122.841612 0 0 0 95.97001 124.441113zM831.899871 799.750078h-31.990003V415.870041h31.990003a187.781318 187.781318 0 0 1 191.940019 191.940018 187.781318 187.781318 0 0 1-191.940019 191.940019z m31.990003-316.381131v248.882225A122.841612 122.841612 0 0 0 959.859884 607.810059a122.841612 122.841612 0 0 0-95.97001-124.441112zM863.889874 959.700094v-63.980007a31.990003 31.990003 0 0 0 31.990004-31.990003h63.980006a93.730709 93.730709 0 0 1-95.97001 95.97001zM735.929862 895.720087h127.960012v63.980007h-127.960012z"
              fill="#8a8a8a"
              p-id="5209"
            ></path>
            <path
              d="M656.914554 1023.6801a95.970009 95.970009 0 1 1 95.97001-95.970009 95.970009 95.970009 0 0 1-95.97001 95.970009z m0-127.960013a31.990003 31.990003 0 1 0 31.990003 31.990004 31.990003 31.990003 0 0 0-31.990003-31.990004zM863.889874 351.890034h-63.980006a287.910028 287.910028 0 1 0-575.820056 0H160.109806a351.890034 351.890034 0 1 1 703.780068 0z"
              fill="#8a8a8a"
              p-id="5210"
            ></path>
          </svg>
        </div>
        <div style="padding-top: 0.21rem; color: #8a8a8a">
          {{ item.play_num }}
        </div>
      </div>
      <div style="display: flex; padding: 0 1rem; box-sizing: border-box">
        <img
          style="height: 2.5rem; border-radius: 50%"
          :src="item.expert_info.avatar"
          alt=""
        /><img
          style="height: 1rem; position: relative; left: -0.6rem; top: 1.4rem"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABUpJREFUSA2VVk1MXFUUPvfNAKVIsSGaFkocrErUuGBBQkwqLlpNTGxJIF2wcG2MG/eNKxI3Jm6MujKmC6JNMbRpdIELGzY0jaFWasU2QEuh0XbKz1AGZt671++7fx3An3rmzXvnnnvO951z7n0zV8ljyMMrn3dXdNYvWh/ROm3XqW4TkwnGS0b0ojHZhDIy9nTfh1P/Baf+zaF07ctBXa0Ma627SGCyDBwgMhoXxjo8vS5mRpn01MGjH539J9y/JSz/drqzmmUjkqW9BEVVrEYMiDRIAyHtnLdj2JmETUjMZF6yoQNvfjy3kzjZaSjfGOlLtbmMyF7OGXwUPoa6gY4U+aTQbjPmkAq+yjn0plouL3z3QR/9amUbYfnGmT6dZuOAbGWgg3XuHFtwDGtJOcuknDNifDKwtEIdXzi/nTQSlufPdKJFo0Cti0yIqq0uJEBMW4nLxepujh3wacEA8jqjstH58+93eleJhFI1I6zMgbmEbSVgJ0TAYWDQQwJM0NqsIVj9UhhpRQiwnVjCrdnRQbTFrpkzgwLMIZS2UBVbRp3CRJyKu7u8lbM1YqT31th7g7TkecO7NOxWyK1b04vv0LxLss1lWb36lWXSntWR4o7ricJrsu+5N2Lc+sIleXCFjQODmGFMnE0q8+e6Me5iPfyEdsWoGiW3Z7+ouiZXrbf7YqW+pSDNh49G78rqoixPj7oxQbXpmj/3bncevxL9LkvOcZeJlG//gKy0qIb9sudATwShUtfcLtnmmvNlgtTqm6Tl5UEk67aErpalOHUaJHh/6aCZFrAz6U9AfsQNHS2TydYXJS3dkcr9afAiqEbyzYd8F9ymIFDLSwOSa2i2Xlzj5avfSFYu1kRBtfDZkcQY1c4ZttNZ3cO+d0gpXV/idJT8vkNWpzelqfC61D9ZsDpv63M/yub969DIAAmOVJW0JyihzU/ZzNlSOtkHbunabYZFyTdil+f2Ak5J/f7Dsrfj1Ti39WBWSjfHsSwexLPFd1OrNtd0H0LHsGmYBPW0tBABg1LfckiShn3S3PU2fFy62daarPzytS3M2WD3cy4BRKOfiagEfzG7JVSoK2vYJMvbHOrQwuYXTkiSb7R2/mivTGPdqhs1fkCwlcJEYqffxaYxiy5H+rpdatfP+9Gart7iI0rDU69gtx6M49LsuFRWF0JB0b7TgP/MRRY5ESpkIi4ZbCFkZO24VXesY2gjkTf/vCblO5fsmjLhbRKAWZ0Dn0CFaiy4WRJMco4391B2p5qssg2Lg3Tjvqz9fsGB0cAkCR7EAoQB3HJqLKkvnJgC8kz4aWP2NsYHsk5YdlXJBNauf4uXuuq2tAevrd62iPy2ApkpnPhiyu5SAJ5ywH5tEWyJHyW36/Uo3fw+vty2+bYwJusrdCQRAa08xYElbHj2JM4gajIm42OYISvnsLIyH8HKd3+SSnEmgj1KjsvBUiEIsom44eQz/Z/Zc058D1WdGoJLkQkyhiTuyZZCsg1c96RaWpKN2xdpsT5BsTwMilbG4WOkiAewnUTCxsLJuSRRAwDHopDR5hf87LpWir/K+o0L+HHCwQnCRCwH7+7yVs5ClFSV5AYKxz+dcwbf0jBofH7oYpLPHUNska0hIAVjW+3WHz+LSR/GyjnnfHDn5QNclxQw5FjH8U8u0i9IrDAYSJpPVA+CJoONOAQhMcUCOjXabIXeQSVqMp9IT8db28kY4nPy0TsePAibtDqMs2hX7QE4nE1rz6s8JON/HQfh7P8fhHfwyjKO+jgB9wPUHvXxh9pm/ye1WcLv6GJm0omcSh7rqP8Xqb+9ofyl6lUAAAAASUVORK5CYII="
          alt=""
        /><span style="display: block; margin-top: 0.7rem; color: #4e4e4e">{{
          item.expert_info.name
        }}</span>
      </div>
    </div>
    <div>
      <van-button
        v-show="!isPlay"
        @click.stop="play(item, true)"
        color="#ff7b68"
        style="display: block; margin-top: 2rem; padding-top: 0.15rem"
        round
        type="success"
      >
        <div style="display: flex">
          <div>
            <svg
              t="1739018498104"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6616"
              width="20"
              height="20"
            >
              <path
                d="M231.253333 929.28a25.173333 25.173333 0 0 1-25.173333-25.173333V119.893333a25.173333 25.173333 0 0 1 39.68-20.48l561.066667 392.106667a25.173333 25.173333 0 0 1 0 42.666667L245.76 924.586667a25.173333 25.173333 0 0 1-14.506667 4.693333z"
                fill="#fcfcfc"
                p-id="6617"
              ></path>
            </svg>
          </div>

          <div style="margin: 0.12rem">播放</div>
        </div>
      </van-button>
      <van-button
        v-show="isPlay"
        @click.stop="play(item, false)"
        color="#6ad487"
        style="display: block; margin-top: 2rem; padding-top: 0.15rem"
        round
        type="success"
      >
        <div style="display: flex">
          <div>
            <svg
              t="1739084016181"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4196"
              width="20"
              height="20"
            >
              <path
                d="M309.3 130.7h-70.9c-24.3 0-44 19.7-44 44v674.5c0 24.3 19.7 44 44 44h70.9c24.3 0 44-19.7 44-44V174.7c0-24.3-19.7-44-44-44z m476.3 0h-70.9c-24.3 0-44 19.7-44 44v674.5c0 24.3 19.7 44 44 44h70.9c24.3 0 44-19.7 44-44V174.7c0-24.3-19.7-44-44-44z"
                p-id="4197"
                fill="#ffffff"
              ></path>
            </svg>
          </div>

          <div style="margin: 0.12rem">暂停</div>
        </div>
      </van-button>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 15rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
