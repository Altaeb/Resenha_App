import React from 'react';
import { SHAMROCK } from '../../config/colors';
import LayoutPageTab from '../../components/LayoutPageTab';
import RoundedButton from '../../components/RoundedButton';
import { withNavigation } from 'react-navigation';

class Properties extends React.PureComponent {
    render() {
        return (
            <LayoutPageTab
                tabLeft={{ title: 'PENDENTES', route: 'PropertiesPending' }}
                tabRight={{ title: 'CONCLUÍDOS', route: 'PropertiesDone' }}
                tabName={'Propriedades'}
                filterRoute={'FilterProperties'}
                icon={'icon-propriedade'}
            >
                {this.props.children}
                <RoundedButton icon="icon-plus" size={62} color={SHAMROCK} onPress={() => this.props.navigation.navigate('CreateProperties')} />
            </LayoutPageTab>
        );
    }
}

export default withNavigation(Properties);
