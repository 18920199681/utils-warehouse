<template>
  <div>
    <span>HelloWorldHelloWorldHelloWorld</span>
  </div>
</template>

<script>
import { dateFormat } from "/@/utils/dateFormat";
import Apis from "/@/service/apis/test";

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
    console.log("当前日期", dateFormat(new Date()));
    Apis.queryTest({});
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/public.scss";

span {
  width: 60px;
  background: $main-color;
  @include ellipsis(3);
  margin-bottom: 10px;
}
</style>
