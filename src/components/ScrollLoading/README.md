# 滚动加载

#### 使用示例

```html
<scroll-loading loadingDistance="100" @onLoading="onLoading" @onReLoad="onReLoad" :isLoading="isLoading" :isFinish="isFinish" :loadingFailed="loadingFailed">
    <!-- 数据列表 -->
    <div slot="dataList">
        <div class="list-item" v-for="item in 10" :key="item">{{ item }}</div>
    </div>
    <!-- 自定义加载动画 — 若用户未定义则使用默认样式 -->
    <!-- <div slot="loadingBox" class="loading-box" v-if="isLoading">加载中</div> -->
    <!-- 自定义加载失败按钮 — 若用户未定义则使用默认样式 -->
    <!-- <div slot="loadingFailedBox" v-if="loadingFailed">加载更多</div> -->
</scroll-loading>
```

```javascript
import ScrollLoading from "@/src/components/ScrollLoading/ScrollLoading";

export default {
    components: {
        ScrollLoading,
    },
    data() {
        return {
            isLoading: false,
            isFinish: false,
            loadingFailed: false,
        };
    },
    methods: {
        onLoading() {
            console.log("到底了");
        },
        onReLoad() {
            console.log("重新加载");
        },
    },
};
```

```less
.scroll-loading-box {
  height: 500px; // 必须为滚动区域设置高度
  background: #f5f7fa;

  .list-item {
    height: 100px;
    margin-bottom: 20px;
    background: red;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
```

#### Attributes

| 参数 | 默认值 | 类型 | 说明 |
| ---- | ---- | ---- | ---- |
| loadingDistance | 0 | String | 开始加载下一页的底部距离 |
| isLoading | false | Boolean | 是否正在加载中 |
| isFinish | false | Boolean | 是否已加载到最后一页 |
| loadingFailed | false | Boolean | 是否加载失败 |

#### Events

| 事件名称 | 说明 |
| ---- | ---- |
| onLoading | 触底事件 |
| onReLoad | 重新加载 |
