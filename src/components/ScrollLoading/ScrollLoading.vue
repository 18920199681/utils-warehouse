<template>
  <div class="scroll-loading-box" ref="scrollLoadingBox">
    <div ref="dataList">
      <!-- 数据列表 -->
      <slot name="dataList"></slot>

      <!-- 加载动画 -->
      <slot name="loadingBox"></slot>

      <!-- 加载动画 -->
      <slot name="loadingFailedBox"></slot>

      <!-- 默认加载动画 -->
      <div class="default-loading-box" v-if="!hasLoadingBox && isLoading">
        <loading-animate />
        <div class="loading-content">正在加载更多…</div>
      </div>

      <!-- 加载失败-重新加载按钮 -->
      <div class="loading-failed not-select" v-if="!hasLoadingFailedBox && loadingFailed">
        <span @click="onReLoad">加载更多酒店</span>
      </div>

      <!-- 加载完所有数据 -->
      <slot name="loadingOver" v-if="isFinish"></slot>
    </div>
  </div>
</template>

<script>
import loadingAnimate from "./LoadingAnimate";

export default {
  components: {
    loadingAnimate,
  },
  props: {
    // 开始加载下一页的底部距离
    loadingDistance: {
      type: String,
      default: "0",
    },

    // 是否加载中
    isLoading: {
      type: Boolean,
      default: false,
    },

    // 是否已加载到最后一页
    isFinish: {
      type: Boolean,
      default: false,
    },

    loadingFailed: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // 使用者是否自定义加载动画
    hasLoadingBox() {
      return !!this.$slots.loadingBox;
    },

    // 使用者是否自定义加载失败按钮
    hasLoadingFailedBox() {
      return !!this.$slots.loadingFailedBox;
    },
  },

  mounted() {
    this.$refs.scrollLoadingBox.addEventListener("scroll", this.onScroll);
  },

  methods: {
    /* 滚动事件 */
    onScroll() {
      const C_H = this.$refs.scrollLoadingBox.offsetHeight; // 可滚动区域高度
      const S_T = this.$refs.scrollLoadingBox.scrollTop; // 已滚动距离
      const S_H = this.$refs.dataList.offsetHeight; // 内容高度

      // 已滚动到指定位置(底部)
      if (S_H - (C_H + S_T) <= Number(this.loadingDistance)) {
        if (this.isFinish) {
          this.isLoading = false;
          return false;
        }

        if (this.isLoading) {
          return false;
        }

        this.onLoading();
      }
    },

    /* 页面滚动到底部的回调 */
    onLoading() {
      this.$emit("onLoading");
    },

    onReLoad() {
      this.$emit("onReLoad");
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-loading-box {
  overflow-y: scroll;

  .default-loading-box {
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* 加载文字 */
    .loading-content {
      margin-left: 10px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #00cd96;
    }
  }

  .loading-failed {
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 200px;
      height: 40px;
      background: rgba(0, 205, 150, 0.15);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      color: #00cd96;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 0;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0);
}
</style>
