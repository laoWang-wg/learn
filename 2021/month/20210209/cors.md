# 跨域资源共享

克服 ajax 的同源限制

1. 条件：需要浏览器和服务端同时支持
2. 实现：服务端实现了 cors 接口，就可以通信

## 两种请求

### 简单请求（simple request）

1. 请求方法是以下三种方法之一：
   - HEAD
   - GET
   - POST
2. HTTP 的头信息不超出以下几种字段：
   - Accept
   - Accept-Language
   - Content-Language
   - Last-Event-ID
   - Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain

#### 请求流程

主要是为了兼容 form 表单。form 表单一直可以跨域

可以直接发出 CORS 请求，在头部信息加入 origin 字段（origin：说明请求来自哪个源【协议+域名+端口】）

1. Access-Control-Allow-Origin：不允许，则不会包含该字段，浏览器根据这个信息，从而抛出错误。
2. withCredentials： 指定是否携带 cookie，默认是不携带的。（如果要协大 cookie 那么上面的字段不能设置成\*）

## 非简单请求

请求方法是 PUT 或 DELETE，或者 conten-type 的字段类型是 application/json
非简单请求的 CORS 请求，会在正式请求之前，增加一次请求，称为预检请求，会先询问是否在服务器许可名单中，只有得到肯定允许，才会发送请求

预检请求发送的是 OPTIONS 请求，关键字段是 origin
