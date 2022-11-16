### javascript修改css样式的方法（四种）

#### 第一种：使用`对象.style.属性名="值"`来修改样式表的类名。

```js
div1.style.width="100px";
```

#### 第二种：使用`对象.style.cssText="属性名:值"`来修改嵌入式的css。

```js
div1.style.cssText="width:100px;height:100px;background: palevioletred;";
```

#### 第三种：使用`对象.setAttribute("class","类名")`来修改样式表的类名

```js
div1.setAttribute("class","div2")
div3.className="div3";//效果一样
```

#### 第四种：使用setAttribute()函数更改外联的css文件，从而改变元素的css。

```js
div1.setAttribute("href","css2.css");
```