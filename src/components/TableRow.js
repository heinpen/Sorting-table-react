import React from 'react';

class TableRow extends React.Component {
  render() {
    const cellsData = this.props.row,
      filterText = this.props.filterText,
      properOrder = ['place', 'name', 'firingRate', 'score'],
      cells = [];

    let unsuitable = false;
    if (filterText) {
      const lowerCaseStat = cellsData.name.toLowerCase();
      const lowerCaseFilterText = filterText.toLowerCase();
      lowerCaseStat.indexOf(lowerCaseFilterText) === -1 ? (unsuitable = true) : (unsuitable = false);
    }

    properOrder.forEach((name) => {
      cells.push(<td>{cellsData[name]}</td>);
    });

    return unsuitable === false ? <tr>{cells}</tr> : '';
  }
}

export default TableRow;
