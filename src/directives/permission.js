import store from '@/store'

function checkPermission (el, binding) {
  const arr = binding.value
  if (arr && arr instanceof Array) {
    const points = store.state.user.userInfo.permission.points

    const hasPermission = points.some(point => {
      return arr.includes(point)
    })
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error('要传入一个数组')
  }
}

export default {
  mounted (el, binding) {
    checkPermission(el, binding)
  },
  updated (el, binding) {
    checkPermission(el, binding)
  }
}
// 先要定义检测函数
// 用户要给自定用指令传入一个数组
// 然后判断一下, 后端返回的权限数据里面有没有数据包含在数组里面
// 如果没有包含的话 , 那么 el.remove() 直接删除节点
// 然后最后在全局挂载一下这个自定义指令
