import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Heading extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        const {
            text,
            className,
            children,
            variant,
        } = this.props


        let classValue = '';
        switch (variant) {
            case "display-1":
                classValue = 'heading-1'
                break;
            case "display-2":
                classValue = 'heading-2'
                break;
            case "display-3":
                classValue = 'heading-3'
                break;
             case "display-4":
                classValue = 'heading-4'
                break;
           
            default:
                classValue = 'heading-1'
        }

        return (

            <div className = { classValue }>
            { children } </div>
        )
    }
}