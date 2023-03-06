### 1、在标签中使用:data-** 进行绑定

### 2、在父元素使用 @click="clickChangeReact($event)"

```
<view @click="clickRow($event)">
	<view :data-id="item.id">{{item.date}}</view>
</view>
```

### 3、关于调用

```
clickRow(e) {
	// 判断点击的对象是否有这个属性
	if(!e.target.dataset.id && e.target.dataset.id !== 0) return true
	
	// e.target.dataset.id  获取绑定的data-id
	// TODOO...
}
```

