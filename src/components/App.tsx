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

    reset() {
        this.setState({
            name: '',
            age: 0,
        });
    }

    render() {
        return (
            <div>
                <div>氏名：{ this.state.name }</div>
                <div>年齢：{ this.state.age }</div>
                <div>
                    <button
                        onClick={() => {this.reset();}}
                    >reset</button>
                </div>
                <div>
                    <Input
                        value={this.state.name}
                        onChange={(text) => { this.setName(text) }}
                    />
                </div>
                <div>
                    <Range
                        value={this.state.age}
                        onChange={(value) => { this.setAge(value) }}
                    />
                </div>
            </div>
        );
    }
}
