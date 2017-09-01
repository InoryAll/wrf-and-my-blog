import React from 'react';
import ReactDOM from 'react-dom';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../css/banner.css';

const BgElement = Element.BgElement;
export default class Banner extends React.Component {
    render() {
        return (
            <BannerAnim prefixCls="banner-user">
                <Element key="aaa"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                                 { id: 'title', value: 50, type: 'x' },
                                 { id: 'content', value: -30, type: 'x' },
                             ],
                         }}
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#364D79',
                        }}
                        id="bg"
                    />
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title"
                    >
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content"
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element key="bbb"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#64CBCC',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React222
                    </TweenOne>
                </Element>
            </BannerAnim>
        );
    }
}