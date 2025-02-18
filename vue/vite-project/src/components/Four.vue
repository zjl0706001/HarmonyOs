<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
  computed: {
    fullname() {
      return this.firstname + this.lastname;
    },
  },
};
</script>

<template>
  <div>
    <input v-model="firstname" /><input v-model="lastname" />{{ fullname }}
  </div>
</template>

<style scoped></style>
