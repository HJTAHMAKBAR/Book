const info = {
  state: {
    browserType: navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)? 'phone':'pc'
  },
  mutations: {},
  actions: {}
}

export default info
