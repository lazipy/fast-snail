import Vue from 'vue';
import Message from './Main';
const Constructor = Vue.extend(Message);

let instances = [];

const $Message = function (options) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let instance = new Constructor({
    propsData: options,
    data: {
      visible: false
    }
  });

  instance.vm = instance.$mount();
  instance.visible = true;

  if (instances.length > 0) {
    const beforeInstance = instances.pop();
    beforeInstance.close();
  }
  instances.push(instance);
};

['success', 'warning', 'info', 'error'].forEach(type => {
  $Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    $Message(options);
  };
});

export default $Message;
