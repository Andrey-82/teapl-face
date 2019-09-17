import React from 'react';

export default class NodeHeaderData extends React.Component {
    render() {
        return (
            <div className="grow-2 z-depth-1">
                <h6>Course<span className="right">Last update: July 15th, 2019</span></h6>
                <h3 className="center">Name node</h3>
                <h5>Autor(s): Ivan Ivanov &amp; co</h5>
                <h6>Access: All</h6>
                <h6>Public: Yes</h6>
                <div className="switch">
                    <label>
                        light
                        <input id="colorTheme" type="checkbox" />
                        <span className="lever"></span>
                        black
                    </label>
                </div>
            </div>
        )
  }
}