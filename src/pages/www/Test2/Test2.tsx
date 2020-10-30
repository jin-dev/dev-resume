import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import classnames from 'classnames';

interface Props extends WithTranslation {}
interface State {}

class Test2 extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <ol>
          <li data-target="#map" data-slide-to="0" className="">
            <span> </span>
            <span>아시아 및 오세아니아</span>
          </li>
          <li data-target="#map" data-slide-to="1" className="">
            <span> </span>
            <span>아메리카</span>
          </li>
          <li data-target="#map" data-slide-to="2" className="active">
            <span> </span>
            <span>유럽</span>
          </li>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Test2));
