import Alert from './alert.vue'

let AlertCtor

function AlertConstructor (opts = {}){
  const vm = new AlertCtor({
    el: document.createElement('div'),
    propsData: opts
  })

  document.body.appendChild(vm.$el)

  setTimeout(() => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    vm.$destroy()
  }, 3000)
}

export default function (Vue) {
  Vue.prototype['$' + Alert.name] = AlertConstructor

  AlertCtor = Vue.extend(Alert)
}