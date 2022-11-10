### 修改单选框和复选框的样式

1. 使用**appearance清除默认样式**

2. 使用 **input::after** 设置默认状态，设置content内容，并且**设置成透明色**，如果不在这里设置元素，而在选中后设置元素，则可能会导致画面晃动

3. 使用**input:checked::after** 设置选中状态，设置个颜色，让之前设置的content内容显示出来


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #ra1 {
      appearance: none;
      /* 清除掉自带的样式 */
      -webkit-appearance: none;
      /* 这是做兼容用的 只有谷歌浏览器作为参照 */
      outline: none;
      /* 部分浏览器清除自带的样式后外面会带有一圈边框 */
      width: 14px;
      /* 设置复选框的宽度 */
      height: 14px;
      font-size: 14px;
      /* 设置复选框的高度 */
      border: 1px solid gray;
      /* 给复选框加边框 */
      text-align: center;
      /* 实现复选框里面内容水平居中 */
      line-height: 14px;
      /* 实现复选框里面内容垂直居中 */
    }

    #ra1::after {
      content: '\2713';
      color: transparent;
    }

    #ra1:checked:after {
      color: red;
    }
  </style>
</head>

<body>
  <input type="radio" id="ra1" name="group1"> <label for="ra1">单选框1</label>
  <input type="radio" id="ra2" name="group1"> <label for="ra2">单选框2</label>
  <br>
  <hr>
  <input type="checkbox" id="checkbox1"><label for="checkbox1">复选框</label>
</body>

</html>
```

