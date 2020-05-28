import React from 'react';
import { SHAMROCK } from '../../config/colors';
import LayoutPageTab from '../../components/LayoutPageTab';
import RoundedButton from '../../components/RoundedButton';
import { withNavigation } from 'react-navigation';

class Exams extends React.PureComponent {
    render() {
        return (
            <LayoutPageTab
                tabLeft={{ title: 'PENDENTES', route: 'ExamPending' }}
                tabRight={{ title: 'ENVIADOS', route: 'ExamSent' }}
                tabName={'Exames'}
                filterRoute={'FilterExam'}
                icon={'icon-lab'}
            >
                {this.props.children}
                <RoundedButton icon="icon-plus" size={62} color={SHAMROCK} onPress={() => this.props.navigation.navigate('CreateExam')} />
            </LayoutPageTab>
        );
    }
}

export default withNavigation(Exams);
