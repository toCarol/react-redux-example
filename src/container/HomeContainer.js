import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeComponent from '../components/HomeComponent';
import * as homeActions from '../actions/homeActions';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.updateKeyword = this.updateKeyword.bind(this);
        this.changePlatform = this.changePlatform.bind(this);
    }
    updateKeyword(e) {
        const keyword = e.target.value;
        const { actions } = this.props;
        actions.updateKeyword(keyword);
    }
    changePlatform(e) {
        const platform = e.target.value;
        const { actions } = this.props;
        actions.changePlatform(platform);
    }
    render() {
        const { keyword, platforms, platform } = this.props;
        return (
            <HomeComponent
                keyword={keyword}
                updateKeyword={this.updateKeyword}
                platforms={platforms}
                platform={platform}
                changePlatform={this.changePlatform}
            />
        )
    }
}
HomeContainer.propTypes = {
    keyword: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    const { keyword, platforms, platform } = state.home;
    return {
        keyword,
        platforms,
        platform
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);