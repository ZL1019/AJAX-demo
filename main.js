myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest() //声明一个XMLHttpRequest对象
  request.open('get', 'http://jack.com:8001/xxx') // 配置request
  //第一个参数为method，二：URL，三：默认异步 四五：用户，密码啥的
  //第一个参数 可为任意的method:get,post,put.delete(大小写都行)
  request.send()//发送请求
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){//4表示整个响应过程完成
      console.log('请求响应都完毕了')
      console.log(request.status)
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        console.log(typeof request.responseText)//类型为 string
        console.log(request.responseText)
        let string = request.responseText
        // 把符合 JSON 语法的字符串
        // 转换成 JS 对应的值
        let object = window.JSON.parse(string) 
        // JSON.parse 是浏览器提供的,把string 变成对象
        console.log(typeof object)
        console.log(object)
        console.log('object.note')
        console.log(object.note)

      }else if(request.status >= 400){
        console.log('说明请求失败') 
      }

    }
  }
})
