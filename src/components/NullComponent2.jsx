class SideEffect extends React.Component {
    state = {
      data: null,
    };
  
    fetchData() {
      // Side effect: fetching data
      fetch("/api/data")
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }
  
    render() {
      return (
        <div>
          <h1>Side Effect Example</h1>
          <div>{this.state.data ? this.state.data : "Loading..."}</div>
        </div>
      );
    }
  }
  