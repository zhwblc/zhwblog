### 封装js实现拖拽

```js
// 封装拖拽方法
/**
 * drag(box)
 * box 拖拽对象（可以是任何元素节点）
 */
export default function drag (box) {
  // 鼠标按下事件
  box.onmousedown = function () {
    // debugger
    box.setCapture && box.setCapture() // 设置在鼠标按下时box捕获所有点击事件，setCapture在ie中生效
    console.log('鼠标按下')
    var ol = window.event.clientX - box.offsetLeft // 求鼠标到box左边的距离
    var ot = window.event.clientY - box.offsetTop // 求鼠标到box顶部的距离

    // 鼠标拖动事件，注意事件是绑给document的
    document.onmousemove = function (event) {
      console.log('鼠标移动')
      event = event || window.event // 拿到鼠标事件

      var left = event.clientX - ol // 鼠标当前坐标 - 鼠标在box中的偏离量 = box的坐标
      var top = event.clientY - ot

      box.style.left = left + 'px' // 将鼠标坐标赋值给box的位置属性
      box.style.top = top + 'px'
      console.log(box.style.left, box.style.top)

      return false // 取消拖拽后 浏览器的默认搜索事件
    }
    document.onmouseup = function () {
      // 鼠标抬起事件绑在document上，目的是为了防止box上面有元素遮罩，box的鼠标抬起事件失效
      document.onmousemove = null // 取消onmousemove事件
      document.onmouseup = null // 取消鼠标的onmouseup事件
      box.releaseCapture && box.releaseCapture() // 设置在鼠标抬起时box释放捕获的所有点击事件 releaseCapture在ie中生效
    }
  }
}

```

