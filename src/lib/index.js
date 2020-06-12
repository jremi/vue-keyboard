import vueKeyboard from './vue-keyboard.vue' // 导入组件
const keyboard = {
  install (Vue, options) {
    Vue.component(vueKeyboard.name, vueKeyboard)// vueKeyboard.name 组件的name属性
  }

}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(keyboard);
}

export default keyboard // 导出..
