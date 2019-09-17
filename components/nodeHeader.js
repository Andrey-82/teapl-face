import React from 'react';
import NodeHeaderData from './nodeHeaderData';
import NodeHeaderRels from './nodeHeaderRels';

export default class NodeHeader extends React.Component {
    render() {
        return (
            <div className="headerNode">
                <NodeHeaderData />
                <NodeHeaderRels />
            </div>
        )
  }
}