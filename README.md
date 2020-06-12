# vue-verify-keyboard

> 一个适用于验证码以及密码校验的虚拟数字键盘

> a Virtual numeric keypboard for Verification code or Password

![使用方法](https://gitee.com/taoyouyou/keyboard/raw/master/gif5.gif)



## 引入组件并注册

```
import vueKeyboard from 'vue-verify-keyboard'

Vue.use(vueKeyboard)
```

## 使用方法




for Verification:
``` bash

<vue-verify-keyboard :number="codeNum" :time="30" :verifyBtn='verifyBtn' :loading="loading" :phone="phone" @submit="submit" @send="sendCode"  @close="close" @on-time-change="onTimeChange" v-if="showKeyboard"></vue-verify-keyboard>

```
for Password:
``` bash

<vue-verify-keyboard v-if="showPassword" type="password" :number="6" placeholder=' ' desc="您正在更改重要信息，输入密码支付进行安全验证" @submit="checkPayPwd" @close="showPassword = false"  @forget="forgetPassword"></vue-verify-keyboard>

```



### 属性
- type: String 控件类型(verify || password),默认为verify
- number: Array 验证码长度
- placeholder: String 占位符

- verifyBtn: Object 支持自动定义验证码按钮文字，描述，以及按钮状态 (仅用于验证码组件)
- loading: Boolean 控制验证码状态 (仅用于验证码组件)
- phone: Number 自定义传入需要发送验证码的手机号  (仅用于验证码组件)
- time: Number 自定义倒计时的秒数 (仅用于验证码组件)

- desc: 描述  (仅用于密码组件)

### 方法
- submit 完成输入验证码之后自动触发该方法，验证码作为传入的参数
- sendCode 发送验证码
- close 关闭组件
- forget 忘记密码 (仅用于密码组件)
