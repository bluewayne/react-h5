/**
 * Created by liujinhe on 2017/4/7.
 */

import React from 'react';
import {Link} from 'react-router';
import NobleRule from './NobleRule'
import ReactDom from 'react-dom'

function NobleDetails(props, context) {

    const nobleRights = ["排名优先", "日常任务双倍奖励", "身份标识", "入场动画（电脑端）", "无发言限制", "贵族通道", "贵宾席", "(进入人满房间无限制)", "拒绝上麦"];

    let nobleRightsHtml = nobleRights.map(function (value) {
        return ( <li class="item-nbgd">value</li>);
    })


    return (
        <div className=''>

            <div class="detail-des"><span class="ds">千军齐发，扬鞭策马，万里扬沙，兵临城下，只为睹你笑靥如花，只为望你绝代风华。</span></div>

            <div class="bx-nbgd">
                <h2 class="hd-nbgd">基础贵族特权</h2>
                <div class="bd-nbgd">
                    <ul class="list-nbgd">
                        {nobleRightsHtml}
                    </ul>
                </div>
            </div>

        </div>
    );

}

ReactDom.render(<NobleDetails />, document.getElementById('app'))


// export default noble_details;
