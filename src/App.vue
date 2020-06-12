<template>
  <div id="app">
    <div class="page">
      <button class="btn" @click="showVerify=!showVerify">验证码验证</button>
      <button class="btn" @click="showPassword=!showPassword">支付密码验证</button>
    </div>
    <vue-keyboard :number="4" :verifyBtn='verifyBtn' :loading="loading" :phone="phone" @submit="submit" @close="cancel" @on-time-change="onTimeChange" v-if="showVerify"></vue-keyboard>
    <vue-keyboard v-if="showPassword" type="password" :number="6" placeholder=' ' desc="您正在更改重要信息，输入密码支付进行安全验证" @submit="checkPayPwd" @close="showPassword = false"  @forget="forgetPassword"></vue-keyboard>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      phone: '15587168512',
      showVerify: false,
      loading: false,
      verifyBtn: {
        text: '获取验证码',
        enable: true,
        desc: '验证码发送成功，请注意查收'
      },
      showPassword: false
    }
  },
  methods: {
    submit (data) {
      const self = this
      self.loading = true
      self.verifyBtn.enable = false
      setTimeout(function () {
        self.loading = false
        self.verifyBtn.enable = true
        self.verifyBtn.text = '重新获取'
        self.verifyBtn.desc = '验证码错误或超时，请重新获取'
        // console.log(data)
      }, 3000)
    },
    cancel () {
      const self = this
      self.showVerify = false
    },
    checkPayPwd (data) {
      // const self = this
      setTimeout(function () {
        window.alert('密码正确')
        // console.log(data)
      }, 3000)
    },
    onTimeChange (val) {
      this.time = val
    },
    forgetPassword () {
      window.alert('忘记密码逻辑')
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .page {
    padding: 10px;
  }
</style>
