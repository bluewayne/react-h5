/**
 * Created by liujinhe on 2017/4/7.
 */

import React from 'react';
import ReactDom from 'react-dom'
//import { AppContainer } from 'react-hot-loader'

import NobleDetails from './NobleDetails.js'

//function NobleDetails(props, context) {
//
//    const nobleRights = ["排名优先", "日常任务双倍奖励", "身份标识", "入场动画（电脑端）", "无发言限制", "贵族通道", "贵宾席", "(进入人满房间无限制)", "拒绝上麦"];
//
//    let nobleRightsHtml = nobleRights.map(function (value) {
//        return ( <li className="item-nbgd" key={value}>{value}</li>);
//    })
//
//    console.log('come to nobelDetails');
//
//    return (
//        <div className=''>
//
//            <div className="detail-des"><span className="ds">千军齐发，扬鞭策马，万里扬沙，兵临城下，只为睹你笑靥如花，只为望你绝代风华。</span></div>
//
//            <div className="bx-nbgd">
//                <h2 className="hd-nbgd">基础贵族特权</h2>
//                <h2 className="hd-nbgd">基础贵族特权</h2>
//
//                <h2 className="hd-nbgd">基础贵族特权</h2>
//                <h2 className="hd-nbgd">基础贵族特权</h2>
//                <h2 className="hd-nbgd">基础贵族特权</h2>
//
//                <div className="bd-nbgd">
//                    <ul className="list-nbgd">
//                        {nobleRightsHtml}
//                    </ul>
//                </div>
//            </div>
//
//        </div>
//    );
//
//}

function renderComponent(Component){

    ReactDom.render(<Component />, document.getElementById('app'))

};

    renderComponent(NobleDetails); // 进行渲染

//
//
if (module.hot) {
    module.hot.accept(); // 接受模块更新的事件，同时阻止这个事件继续冒泡
    renderComponent(NobleDetails); // 进行渲染
}

//// export default noble_details;



/*
这个是 react-hot-loader 的配置
 */
//const render = Component => {
//    ReactDom.render(
//        <AppContainer>
//            <Component />
//        </AppContainer>,
//        document.getElementById('app')
//    )
//}
//render(NobleDetails)
//
//if (module.hot) {
//    module.hot.accept('./NobleDetails.js', () => { render(NobleDetails) })
//}
