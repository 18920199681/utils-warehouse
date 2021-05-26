<template>
  <div>HelloWorld</div>
</template>

<script>
import { dateFormat } from "../utils/dateFormat";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log("当前日期", dateFormat(new Date(), "YYYY-MM-DD"));
  },
};
</script>
