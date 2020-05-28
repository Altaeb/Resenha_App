import React from 'react';
import withHeader from '../../hoc/withHeader';
import { View, ScrollView } from 'react-native';
import Collapse from '../../components/Collapse';
import CustomButton from '../../components/CustomButton';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import ResenhaIcon from '../../components/ResenhaIcon';
import { MARINER, DOVE_GRAY, WHITE, SHAMROCK } from '../../config/colors';
import styles from './styles';
import { scale } from '../../helpers/scalesHelpers';


class Faq extends React.PureComponent {
    state = {
        collapsed: false,
        itemsCollapse: [
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Lorem ipsum dolor sit amet, consetetur?',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
        ]
    }
    render() {
        return (
            <View style={styles.collapseWrapper}>
                <ScrollView>
                    {this.state.itemsCollapse.length > 0 &&
                        this.state.itemsCollapse.map((item, index) => (
                            <Collapse
                                style={{ marginTop: - 1 }}
                                key={`id_${index}`}
                                styleItemHeader={styles.itemHeader}
                                collapseHeader={collapsed => (
                                    <View style={styles.itemCollapse}>
                                        <TextNunitoBold style={{ color: MARINER, marginRight: 5 }}>
                                            {index + 1}.
                                        </TextNunitoBold>
                                        <TextNunitoRegular style={{ color: DOVE_GRAY, marginRight: 10 }}>
                                            {item.title}
                                        </TextNunitoRegular>
                                        <ResenhaIcon
                                            style={collapsed ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }}
                                            name="icon-arrow-right"
                                            color={MARINER}
                                            size={10}
                                        />
                                    </View>
                                )}
                                collapseBody={() => (
                                    (
                                        <View style={styles.itemCollapseContent}>
                                            <TextNunitoRegular style={{ color: DOVE_GRAY, fontSize: scale(10) }}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </TextNunitoRegular>
                                        </View>
                                    )
                                )}
                            />
                        ))
                    }
                    <View style={styles.messageWrapper}>
                        <TextNunitoRegular style={styles.messageText}>Ficou com alguma dúvida?</TextNunitoRegular>
                        <TextNunitoRegular style={styles.messageText}>Entre em contato pelo Whatsapp</TextNunitoRegular>
                        <View style={{ marginTop: 10 }}>
                            <CustomButton
                                text="Enviar Mensagem"
                                icon={'icon-whatsapp'}
                                iconColor={WHITE}
                                color={WHITE}
                                backgroundColor={SHAMROCK}
                                onPress={() => screenProps.changeModalVisibility(true, NewPassword(screenProps))}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default withHeader('F.A.Q', 'icon-arrow-left')(Faq);
