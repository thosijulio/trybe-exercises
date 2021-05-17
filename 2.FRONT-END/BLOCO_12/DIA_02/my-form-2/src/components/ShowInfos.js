import React from 'react';

class ShowInfos extends React.Component {
    constructor() {
        super();
    }

    show() {
        return 
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.infos).map((key, index) => <p>{ `${key}: ${Object.values(this.props.infos)[index]}` }</p>)}
            </div>
        )
    }
}

export default ShowInfos;