import React, { Component } from 'react';
import './style.less';

interface IProps {
    ragName: string;
    options: any;
}
interface IState {}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            adavatar: '',
        };
    }

    public render() {
        return (
            <div className={['header', ''].join(' ')}>
                <div className="header-info">
                    {/* <img src="https://jzxznb.github.io/src/hanbag.png" /> */}
                    {/* <a href={href}>
                        {name}
                        {href ? <i className="go-icon" /> : null}
                    </a> */}
                </div>
                <div className="back-ground">
                    <img src="https://jzxznb.github.io/src/hanbag.png" />
                </div>
            </div>
        );
    }
}
