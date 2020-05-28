import React from 'react';
import { SHAMROCK } from '../../config/colors';
import LayoutPageTab from '../../components/LayoutPageTab';
import RoundedButton from '../../components/RoundedButton';
import { withNavigation } from 'react-navigation';

class Animals extends React.PureComponent {
    render() {
        return (
            <LayoutPageTab
                tabLeft={{ title: 'PENDENTES', route: 'AnimalsPending' }}
                tabRight={{ title: 'CONCLUÍDOS', route: 'AnimalsDone' }}
                tabName={'Animais'}
                filterRoute={'FilterAnimals'}
                icon={'icon-animais'}
            >
                {this.props.children}
                <RoundedButton icon="icon-plus" size={62} color={SHAMROCK} onPress={() => this.props.navigation.navigate('CreateAnimal')} />
            </LayoutPageTab>
        );
    }
}

export default withNavigation(Animals);
