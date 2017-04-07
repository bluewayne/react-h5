/**
 * Created by liujinhe on 2017/4/7.
 */

import React from 'react';
import {Link} from 'react-router';

function NobleRule(props,context) {

    const {imageClass,imageUrl,nobleName,ruleList}=props;

    let ruleMarkup = ruleList.map(function (item) {
        return (<li class="item-syng">
            {item}
        </li>)

    })

    return (
        <div className=''>

            <li class="item-nbfj">
                <h4 class="yxt"><span class="yt">
                        <img class={imageClass} src={imageUrl}/>{nobleName}</span></h4>
                <ul class="list-syng">
                    {ruleMarkup}
                </ul>
            </li>
        </div>
    );
}


export default NobleRule;
