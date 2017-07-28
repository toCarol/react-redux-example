import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

class HomeComponent extends React.Component {
    render() {
        const { keyword, updateKeyword, platforms, changePlatform, platform } = this.props;
        return (
            <div>
                <div>
                    <input type="text" value={keyword} onChange={updateKeyword} />
                    {/* <button onClick={updateKeyword}>Change</button> */}
                </div>
                <div>
                    <label htmlFor="">{keyword}</label>
                </div>
                <div>
                    {
                        platforms ?
                        platforms.map((p, key) => {
                            return (
                            <RadioInput 
                                key={key}
                                id={p.id}
                                defaultValue={platform}
                                label={p.name}
                                name={'platform'}
                                value={p.value}
                                onChange={changePlatform}
                            />
                            );
                        }) : 
                        null
                    }
                    <label>{platform}</label>
                    {/* <input type="radio" name="platform" id="mac" value={/>
                    <input type="radio" name="platform" id="windows"/> */}
                </div>
            </div>
        )
    }
}
export default HomeComponent;