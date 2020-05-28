import React from 'react';
import { SHAMROCK } from '../../config/colors';
import LayoutPageTab from '../../components/LayoutPageTab';
import RoundedButton from '../../components/RoundedButton';
import { withNavigation } from 'react-navigation';

class Owners extends React.PureComponent {
    render() {
        return (
            <LayoutPageTab
                tabLeft={{ title: 'PENDENTES', route: 'OwnersPending' }}
                tabRight={{ title: 'CONCLUÍDOS', route: 'OwnersDone' }}
                tabName={'Proprietários'}
                filterRoute={'FilterOwners'}
                icon={'icon-proprietario'}
            >
                {this.props.children}
                <RoundedButton icon="icon-plus" size={62} color={SHAMROCK} onPress={() => this.props.navigation.navigate('CreateOwner')} />
            </LayoutPageTab>
        );
    }
}

export default withNavigation(Owners);
