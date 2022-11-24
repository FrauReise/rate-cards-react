import React from "react";
import '../assets/styles/Rate.scss';


export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };
    }

    handleChange = () => {
        this.setState(
            {
                hovered: !this.state.hovered
            }
        );
    }

    render() {
        const { classHeader, rate, classBody, currency, period, speed } = this.props;
        return (
            <div className={this.state.hovered ? "rate_chosen" : 'rate'} onMouseOver={this.handleChange}>
                <div className={`rate-header ${classHeader}`}>Безлимитный {tarif}</div>
                <div className={`rate-price ${classBody}`}>
                    <span>{currency}</span>
                    <span className="price">{tarif}</span>
                    <span>{period}</span>
                </div>
                <div className="rate-speed">до {speed} Мбит/сек</div>
                <div className="rate-footer">Объем включенного трафика не ограничен</div>
            </div>
        )
    }
}