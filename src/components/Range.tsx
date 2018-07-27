import * as React from 'react';

interface RangeProps {
    onChange: (value: number) => void | undefined,
}

interface RangeStates {
    value: number;
}

export class Range extends React.Component<RangeProps, RangeStates> {
    constructor(props: RangeProps) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const number = Number(e.target.value);
        this.setState({ value: number });
        this.props.onChange(number);
    }

    render() {
        return React.createElement(
            'input',
            {
                type: 'range',
                onChange: (e) => { this.handleChange(e) },
            }
        );
    }
}
