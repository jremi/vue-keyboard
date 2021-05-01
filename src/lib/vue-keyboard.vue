
<template>
  <div class="keyboard-wrap">
    <div class="mask" @click="close()"></div>
    <div class="security-code-wrap">
      <label for="code">
        <p class="title">
          <span class="title-text" v-if="title">{{title}}</span>
          <span class="close" v-if="showClose" @click="close()"><i class="fa fa-remove"></i></span>
        </p>
        <div class="security-code-container">
          <p class="desc" v-if="type === 'verify'">{{verifyText}}</p>
          <p class="desc grey-9" v-if="type === 'password'">{{desc}}</p>
          <ul class="code-container">
            <li class="field-wrap" v-for="(item, index) in number" :key="index">
              <i class="char-field">{{type === 'password' ? value[index] ? '*' : '' :  value[index] || placeholder}}</i>
            </li>
          </ul>
          <div class="op-wrap" v-if="!pinValid">
            <p class="desc red" v-show="verifyBtn.desc">
              <i class="fa fa-spinner fa-pulse" v-if="loading"></i>
              {{verifyBtn.desc}}
            </p>
          </div>
          <div class="op-wrap" v-else>
            <p class="desc"></p>
          </div>
        </div>
      </label>
      <div class='keyboard'>
        <div class='key-row'>
          <div class='key-cell' data-num='1' @click.stop.prevent='_handleKeyPress'>1</div>
          <div class='key-cell' data-num='2' @click.stop.prevent='_handleKeyPress'>2</div>
          <div class='key-cell' data-num='3' @click.stop.prevent='_handleKeyPress'>3</div>
        </div>
        <div class='key-row'>
          <div class='key-cell' data-num='4' @click.stop.prevent='_handleKeyPress'>4</div>
          <div class='key-cell' data-num='5' @click.stop.prevent='_handleKeyPress'>5</div>
          <div class='key-cell' data-num='6' @click.stop.prevent='_handleKeyPress'>6</div>
        </div>
        <div class='key-row'>
          <div class='key-cell' data-num='7' @click.stop.prevent='_handleKeyPress'>7</div>
          <div class='key-cell' data-num='8' @click.stop.prevent='_handleKeyPress'>8</div>
          <div class='key-cell' data-num='9' @click.stop.prevent='_handleKeyPress'>9</div>
        </div>
        <div class='key-row'>
          <div class='key-cell disabled' data-num='-1' @click.stop.prevent='_handleKeyPress'></div>
          <div class='key-cell' data-num='0' @click.stop.prevent='_handleKeyPress'>0</div>
          <div class='key-cell disabled' data-num='D' @click.stop.prevent='_handleKeyPress'>Del</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vueKeyboard',
  props: {
    pinValid: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    showClose: {
      type: Boolean,
      default: false
    },
    verifyText: {
      type: String,
      default: null
    },
    number: {
      type: Number,
      default: 4
    },
    placeholder: {
      type: String,
      default: '-'
    },
    type: {
      type: String,
      default: 'verify'
    },
    loading: {
      type: Boolean,
      default: false
    },
    verifyBtn: {
      type: Object,
      default: function () {
        return {
          text: null,
          enable: false,
          desc: null
        }
      }
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '',
      mytime: this.time,
      timer: Function
    }
  },
  created () {
    document.addEventListener('touchstart', function () {}, false)
  },
  methods: {
    _handleKeyPress (e) {
      let num = e.target.dataset.num
      if (parseInt(num) !== -1) {
        switch (String(num)) {
          case 'D':
            this._handleDeleteKey()
            break
          default:
            this._handleNumberKey(num)
            break
        }
      }
    },
    _handleDeleteKey () {
      let S = this.value
      if (S.length) {
        this.value = S.substring(0, S.length - 1)
      }
    },
    _handleNumberKey (num) {
      let S = this.value
      if (this.value.length < this.number) {
        this.value = S + num
      }
      if (this.value.length === this.number) {
        if (S.length !== this.number) {
          this.$emit('submit', this.value)
        }
      }
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="css">
  body,p{
    margin:0;
    padding: 0;
    -webkit-overflow-scrolling: touch;
  }
</style>
<style scoped>
  /* .keyboard-wrap{
    position: relative;
    width: 100vw;
    height: 100vh;
    float: left;
  } */
  .mask{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.4)
  }
  .security-code-wrap {
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    /* z-index: 2; */
    background: #fff;
  }
  .title{
    text-align: center;
    line-height: 45px;
    font-size: 18px;
    border-bottom: 1px solid #dfdfdf;
    position: relative;
  }
  .security-code-container {
    text-align: center;
    padding: 10px;
  }
  .code-container {
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .field-wrap:first-of-type {
    border-left:1px solid #dfdfdf;
  }
  .field-wrap {
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    border-right: 1px solid #dfdfdf;
    text-align: center;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  .char-field {
    font-style: normal;
  }
  .keyboard {
      height: 220px;
      width: 100%;

  }
  .keyboard .key-row {
    display: flex;
    position: relative;
    height: 55px;
    line-height: 55px;
    font-family: arial;
    font-size: 20px;
  }
  .keyboard .key-row::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #d5d5d6;
      color: #d5d5d6;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
  }
  .keyboard .key-cell {
      flex: 1;
      -webkit-box-flex: 1;
      text-align: center;
      position: relative;
  }
  .keyboard .key-cell:active {
    background: rgba(26, 26, 26, 0.2);
    /* -webkit-tap-highlight-color:rgba(0, 0, 0, 0);   */
  }
  .keyboard .key-cell::after {
      content: '';
      position: absolute;
      overflow: hidden;
      top: 0;
      right: 0;
      bottom: 0;
      height: 200%;
      border-right: 1px solid #d5d5d6;
      color: #d5d5d6;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
  }
  .keyboard .key-cell:nth-last-child(1)::after {
      border-right: 0;
  }
  .keyboard .disabled {
      background: rgba(50, 50, 50, 0.12);
  }
  .op-wrap{height: 55px;}
  .btn{
    border: 1px solid #6679b3;
    border-radius: 5px;
    color: #6679b3;
    padding: 4px 8px;
    font-size: 12px;
  }
  .desc{
    line-height: 32px;
    font-size: 12px;
  }
  .close{
    position: absolute;
    right: 10px;
  }
  .text-wrap{
    padding: 10px
  }
  .forget{
    color: #6679b3;
    font-size: 12px;
  }
  .red{
    color: #e12e2e;
  }
</style>
