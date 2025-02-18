<template>
  <One /> <Two /> <Three /> <Four /> <Five /><Six /><Seven /><Eight /><Nine />
  <L1 @changeVal="changeVal" /><span>{{ num }}</span> <L2 /><L2_1 />
  {{ nns }}
</template>

<script>
import One from "./components/One.vue";
import Two from "./components/Two.vue";
import Three from "./components/Three.vue";
import Four from "./components/Four.vue";
import Five from "./components/Five.vue";
import Six from "./components/Six.vue";
import Seven from "./components/Seven.vue";
import Eight from "./components/Eight.vue";
import Nine from "./components/Nine.vue";
import L1 from "./components/L1.vue";
import L2 from "./components/L2.vue";
import L2_1 from "./components/L2_1.vue";
export default {
  components: {
    Two,
    One,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    L1,
    L2,
    L2_1,
  },
  mixins: [
    {
      data() {
        return { nns: "12r3243" };
      },
    },
  ],
  data() {
    return { num: 1 };
  },
  methods: {
    changeVal() {
      this.num++;
    },
  },
};
</script>

<style scoped>
* {
  margin: 20px;
}
</style>
