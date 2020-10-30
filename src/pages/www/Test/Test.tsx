import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';

import { configActions } from '~/redux/modules/config';

import SimpleSlider from './SimpleSlider';

interface Props extends WithTranslation {
  ConfigActions: typeof configActions;
  viewLanguage: string;
}
interface State {}

class Test extends React.Component<Props, State> {
  public changeLang = e => {
    const { ConfigActions } = this.props;
    ConfigActions.setViewLanguage(e.target.value);
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      // nextArrow: <img src="/img/favicon.png" alt="" />,
      // prevArrow: <img src="/img/favicon.png" alt="" />,
      // dotsClass: s.sliderdots,
    };
    return (
      <view>
        <div>
          abcdefghijklmn
          <br />
          ABCDEFGHI
          <br />
          가나다라마바사
          <br />
          <img src="/img/favicon.png" alt="test" />
          <select onChange={this.changeLang} value={this.props.viewLanguage}>
            <option value="ko_KR">KO</option>
            <option value="en_US">EN</option>
            <option value="ja_JP">JP</option>
          </select>
          <div>
            <h2> Single Item</h2>
          </div>
        </div>
      </view>
    );
  }
}

const mapStateToProps = state => ({
  viewLanguage: state.config.viewLanguage,
});
const mapDispatchToProps = dispatch => ({
  ConfigActions: bindActionCreators(configActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Test));
