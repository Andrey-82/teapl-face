import React from 'react';

export default class NodeHeaderRels extends React.Component {
    render() {
        return (
            <div className="grow-1 z-depth-1">
		<h5 className="center">Relations</h5>
		<div>Parent nodes:</div>
		<div>Child nodes:</div>
                <div className="center">
                <a className="btn"><i className="material-icons left">edit</i> edit </a>
                                <br />
                        <a href="/admin2016/teapl/js/LiteAccordion-master/#slide-one">All nodes</a>
                                <br />
                        <a href="/admin2016/teapl/js/LiteAccordion-master/#slide-two">My nodes</a>
		</div>
            </div>
        )
    }
}