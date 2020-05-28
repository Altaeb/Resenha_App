import React from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

class CollapseComponent extends React.PureComponent {
    state = {
        collapsed: false,
    }
    render() {
        return (
            <Collapse
                {...this.props}
                onToggle={(isCollapsed) => this.setState({ collapsed: isCollapsed })}
            >
                <CollapseHeader style={this.props.styleItemHeader}>
                    {this.props.collapseHeader(this.state.collapsed)}
                </CollapseHeader>
                <CollapseBody style={this.props.styleItemBody}>
                    {this.props.collapseBody(this.state.collapsed)}
                </CollapseBody>
            </Collapse>
        )
    }
}

export default CollapseComponent;