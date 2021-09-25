import React from 'react';
import SearchBar from './SearchBar';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      sortDirection: {
        place: '',
        firingRate: '',
        name: '',
        score: '',
      },
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(dir, name) {
    this.setState({
      sortDirection: {
        [name]: `${dir}`,
      },
    });
  }

  handleFilterTextChange(text) {
    this.setState({
      filterText: text,
    });
  }
  render() {
    return (
      <>
        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <Table
          onSortDirectionChange={this.handleSorting}
          sortDirection={this.state.sortDirection}
          headerContent={this.props.content[0]}
          fullContent={this.props.content}
          filterText={this.state.filterText}
        />
      </>
    );
  }
}

export default App;
