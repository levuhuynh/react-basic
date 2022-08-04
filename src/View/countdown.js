import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 5
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimesup();
            }
        }
    }

    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(5)

    useEffect(() => {

        if (count === 0) {
            props.onTimesup();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count]);

    return (
        <div>{count} hook</div>
    )
}


export { CountDown, NewCountDown };