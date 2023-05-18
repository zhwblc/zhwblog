### 关于动态绑定style

在微信小程序中出现[Object, Object]的问题，这里在行内绑定的时候添加[]

例如：

```vue
<template>
	<view :style="[boxStyle]">
    </view>
</template>
<script>
	export default {
        data() {
            return {
                boxStyle: {
                    width: '200rpx',
                    height: '200rpx',
                    backgroundColor: 'red'
                }
            }
        }
    }
</script>
```

