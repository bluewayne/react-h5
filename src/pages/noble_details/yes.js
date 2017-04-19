/**
 * Created by liujinhe on 2017/4/7.
 */

import React from 'react';
import ReactDom from 'react-dom'

import NobleDetails from './NobleDetails.js'


function renderComponent(Component) {

    ReactDom.render(<Component />, document.getElementById('app'))

};

renderComponent(NobleDetails); // 进行渲染

//
if (module.hot) {
    module.hot.accept(); // 接受模块更新的事件，同时阻止这个事件继续冒泡
    renderComponent(NobleDetails); // 进行渲染
}
