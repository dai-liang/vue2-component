import HelloWorld from "../package/hello-world"; // 引入封装好的组件

const components = [HelloWorld]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
    components.forEach((com) => {
        Vue.component(com.name, com);
    });
};
// 这个方法以后再使用的时候可以被use调用
export default install;
