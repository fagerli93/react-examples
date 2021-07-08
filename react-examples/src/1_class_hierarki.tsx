import React from "react";

interface State {
  navn: string;
  clicks: number;
}

interface Props {}

export class HelloClass extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    // 1
    this.state = {
      navn: "Simon",
      clicks: 0,
    } as State;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, clicks: this.state.clicks + 1 });
  }

  componentDidMount() {
    // 3
  }

  componentDidUpdate() {
    // 4
  }

  componentWillUnmount() {
    // 5
  }

  render() {
    // 2
    return (
      <div>
        <h1>
          Hei, {this.state.navn} - {this.state.clicks}
        </h1>
        <button onClick={this.handleClick}>Kul knapp</button>
      </div>
    );
  }
}
