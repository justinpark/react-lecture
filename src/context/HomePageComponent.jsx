import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ToggleButton from './ToggleButton';

function RowBComponent() {
  return <Button>버튼1</Button>;
}

function RowCComponent() {
  return <Button>버튼2</Button>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent />
        <ToggleButton onPress={this.toggleLoading} />
      </div>
    );
  }
}

export default HomePageComponent;
