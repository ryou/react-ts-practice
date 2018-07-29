import * as React from 'react';

interface InputProps {
    value: string;
    onChange: (text: string) => void | undefined;
}

interface InputStates {}

export class Input extends React.Component<InputProps, InputStates> {
    constructor(props: InputProps) {
        super(props);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;
        this.props.onChange(text);

        e.preventDefault();
    }

    render() {
        return React.createElement(
            'input',
            {
                type: 'text',
                value: this.props.value,
                onChange: (e) => { this.handleChange(e) },
            }
        );
    }
}
