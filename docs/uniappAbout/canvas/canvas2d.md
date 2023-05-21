### 1、在微信中实例化

> 使用query.select()进行实例化，获取到node节点，使用canvas.getContext('2d')实例化上下文

```js
<canvas type="2d" canvas-id="elBgId" id="elBgId"></canvas>

const query = uni.createSelectorQuery().in(this)
        query
            .select('#' + this.elBgId)
            .fields({
              node: true,
              size: true
            })
            .exec(res => {
              if (res[0]) {
                const canvas = res[0].node;
                const ctx = canvas.getContext('2d');
              }
            });
```
### 2、画圆成椭圆的问题

如果只设置了canvas的style:{width: 200px;height: 200px}，就会导致画出来的圆形，变成椭圆；

> 原因：canvas的画布是300*150的画布，如果只设置了canvas的宽高，只是对画布进行了不等比缩小，导致画出来的图形产生形变；
>
> 解决方法：同时设置canvas的属性width和height，就可以了

代码如下：

```
<canvas height="200" width="200" type="2d" canvas-id="elBgId" id="elBgId"
              style="{
				width: '200px',
				height: '200px'}"></canvas>
```

### 3、边缘模糊有毛边处理

> 这里采用等比放大大的画布画出来，然后放在等比缩小的盒子里显示，一般使用屏幕的像素比
>
> 注意：这时候画出来样式的大小也要跟着等比放大

代码如下：

```vue
<template> 
<canvas height="widthPx" width="widthPx" type="2d" class="u-canvas-bg" :canvas-id="elBgId" :id="elBgId"
              :style="{
				width: widthPx + 'px',
				height: widthPx + 'px'
			}"></canvas>
</template>

<script>
export default {
  data() {
    return {
      elBgId: 'uCircleProgressBgId', 
      elId: 'uCircleProgressElId',
      widthPx: 200,
      pixelRatio: 1
    }
 [CircleProgress](..%2F..%2F..%2F..%2FCircleProgress) },
  created() {
    //   获取像素比
    this.pixelRatio = uni.getWindowInfo().pixelRatio
  },
  mounted() {
    // 在h5端，必须要做一点延时才起作用，this.$nextTick()无效(HX2.4.7)
    setTimeout(() => {
      this.drewCircle();
    }, 50);
  },
  methods: {
    drewCircle() {
      const query = uni.createSelectorQuery().in(this)
      query
          .select('#' + this.elBgId)
          .fields({
            node: true,
            size: true
          })
          .exec(res => {
            if (res[0]) {
              const canvas = res[0].node;
              const ctx = canvas.getContext('2d');
              // 等比放大画布
              canvas.width = this.widthPx * this.pixelRatio
              canvas.height = this.widthPx * this.pixelRatio
              // 设置圆环宽度 等比放大
              ctx.lineWidth = this.borderWidthPx * this.pixelRatio
              // 开始描绘路径
              ctx.beginPath();
              // 设置一个原点(110,110)，半径为100的圆的路径到当前路径
              let radius = this.widthPx * this.pixelRatio / 2;

              ctx.arc(radius, radius,
                  radius - this.borderWidthPx * this.pixelRatio,
                  0, 2 * Math.PI, false);

              // 对路径进行描绘
              ctx.stroke();
            }
          });
    }
  }
}
</script>

```

