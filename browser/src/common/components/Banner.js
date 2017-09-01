import React from 'react';
import ReactDOM from 'react-dom';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../css/banner.css';
import trj from '../../static/images/trj.png';
import wrf from '../../static/images/wrf.png';

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
                            background: '#64CBCC',
                        }}
                        id="bg"
                    />
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title"
                    >
                        <div className="item">
                            <img src={trj} alt="trj"/>
                            <span className="split">&&</span>
                            <img src={wrf} alt="wrf"/>
                        </div>
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content"
                    >
                        TRJ and WRF , 这里是他们的故事
                    </TweenOne>
                </Element>
                <Element key="bbb"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#E2BF81',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <div className="single-item">
                            <img src={trj} alt="trj"/>
                        </div>
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        这里是TRJ的故事
                    </TweenOne>
                </Element>
                <Element key="ccc"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#FFAAA6',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <div className="single-item">
                            <img src={wrf} alt="wrf"/>
                        </div>
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        这里是wrf的故事
                    </TweenOne>
                </Element>
            </BannerAnim>
        );
    }
}