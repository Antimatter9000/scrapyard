import React from 'react';
import PropTypes from 'prop-types';

export default class TextWriter extends React.Component {
    charTime = 30

    state = {
        writtenText: ''
    }

    render() {
        return <>{this.state.writtenText}</>
    }

    componentDidMount() {
        this.triggerTextWriter()
    }

    triggerTextWriter = () => {
        const write = this.props.write;     
        if(write && this.props.children.length){
            const delay = this.props.delay || 0;
            setTimeout(this.writeText, delay);
        } else {
            this.setState({ writtenText: this.props.text });
        }
    }

    writeText = () => {
        let interval = setInterval(() => {
            const character = this.props.children.charAt(this.state.writtenText.length);
            const writtenText = this.state.writtenText + character;
            this.setState({ writtenText });
            if (this.state.writtenText.length >= this.props.children.length) {
                this.props.finished();
                clearInterval(interval);
            }
        }, this.charTime);
    }
}

TextWriter.propTypes = {
    children: PropTypes.string
}
