import * as React from 'react';
import { Input } from './Input';
import { Range } from './Range';

interface AppProps {}
interface AppStates {
    name: string;
    age: number;
}

export class App extends React.Component<AppProps, AppStates> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            name: '',
            age: 0,
        };
    }

    setName(name: string) {
        this.setState({ name: name });
    }

    setAge(age: number) {
        this.setState({ age: age });
    }

    render() {
        return (
            <div>
                <div>{ this.state.name }:{ this.state.age }</div>
                <div>
                    <Input
                        onChange={(text) => { this.setName(text) }}
                    />
                </div>
                <div>
                    <Range
                        onChange={(value) => { this.setAge(value) }}
                    />
                </div>
            </div>
        );
    }
}
