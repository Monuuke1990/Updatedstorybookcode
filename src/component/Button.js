import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        const {
            text,
            className,
            variant,
            children,
        } = this.props
        let classValue = '';
        switch (variant) {
            case "primary":
                classValue = 'spade-btn spade-btn-primary'
                break;
            case "sm-primary":
                classValue = 'spade-btn-sm spade-btn-primary'
                break;
            case "sm-secondary":
                classValue = 'spade-btn-sm-flat spade-btn-secondary'
                break;
            case "secondary":
                classValue = 'spade-btn-lg-flat spade-btn-secondary'
                break;
            case "danger":
                classValue = 'spade-btn-lg-flat spade-btn-danger'
                break;
            case "sm-danger":
                classValue = 'spade-btn-sm-flat spade-btn-danger'
                break;
            case "primary-disabled":
                classValue = 'spade-btn spade-primary-disabled'
                break;
            case "secondary-disabled":
                classValue = 'spade-btn spade-secondary-disabled'
                break;
            case "primary-wide":
                classValue = 'spade-btn-wide spade-btn-primary'
                break;
            case "secondary-wide":
                classValue = 'spade-btn-wide spade-btn-secondary'
                break;
            case "danger-wide":
                classValue = 'spade-btn-wide spade-btn-danger'
                break;
            default:
                classValue = 'btn btn-primary'
        }
        return (

            <button className = { classValue } > { children } </button>
        )
    }
}