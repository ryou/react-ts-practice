import * as React from 'react';

interface RangeProps {
    value: number;
    onChange: (value: number) => void | undefined;
}

interface RangeStates {}

export class Range extends React.Component<RangeProps, RangeStates> {
    constructor(props: RangeProps) {
        super(props);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        this.props.onChange(value);

        e.preventDefault();
    }

    render() {
        return React.createElement(
            'input',
            {
                type: 'range',
                value: this.props.value,
                onChange: (e) => { this.handleChange(e) },
            }
        );
    }
}
