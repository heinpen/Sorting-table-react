import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.sortControlling = this.sortControlling.bind(this);
  }

  sorting(dir, value) {
    const data = this.props.fullContent;
    // Get the values needed sorting from content data
    // and put in arrayNames.
    const arrayNames = data.map((obj) => obj[value]);
    if (value === 'name' && dir === 'up') {
      if (dir === 'up') {
        arrayNames.sort();
      } else {
        arrayNames.reverse();
      }
    } else if (value !== 'name' && dir === 'down') {
      arrayNames.sort(function sorting(a, b) {
        return b - a;
      });
    } else {
      arrayNames.sort(function sorting(a, b) {
        return a - b;
      });
    }
    // Create new sorted data.
    this.sortedData = data.map((obj, index) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i][value] === arrayNames[index]) {
          return data[i];
        }

      }
      return false;
    });
  }

  sortControlling(e) {
    // Check pressed key.
    if (e.code !== undefined && e.code !== 'Enter') {
      return;
    }
    const id = e.target.id;
    e.preventDefault();
    if (this.props.sortDirection[id] === 'down') {
      this.props.onSortDirectionChange('up', `${id}`);
      this.sorting('up', `${id}`);
    } else {
      this.props.onSortDirectionChange('down', `${id}`);
      this.sorting('down', `${id}`);
    }
  }

  render() {
    const fullContent = this.sortedData || this.props.fullContent;

    const rows = fullContent.map((row) => <TableRow row={row} filterText={this.props.filterText} />);

    return (
      <table className="sort-table">
        <thead>
        <tr>
          <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="place" tabIndex="0">
            Place
          </th>
          <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="name" tabIndex="0">
            Name
          </th>
          <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="firingRate" tabIndex="0">
            Firing Rate
          </th>
          <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="score" tabIndex="0">
            Score
          </th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
