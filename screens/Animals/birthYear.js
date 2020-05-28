import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WILD_SAND, MARINER, DOVE_GRAY } from '../../config/colors';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';

const styles = StyleSheet.create({
    table: { flexDirection: 'column', alignSelf: 'stretch', },
    tableRow: { flexDirection: "row", alignSelf: "stretch", marginVertical: 3, backgroundColor: WILD_SAND, paddingVertical: 15 },
    tableData: { flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
    tableHead: { flexDirection: "row", alignSelf: "stretch", paddingVertical: 5 },

    textHead: { color: MARINER, fontSize: 12 },
    textTitle: { color: DOVE_GRAY, fontSize: 14 },
    textData: { color: DOVE_GRAY, textAlign: 'center' },

    textbracket: { fontSize: 9 }

})


export default class BirthYear extends React.PureComponent {
    render() {
        return (
            <View style={styles.table}>
                <View style={styles.tableHead}>
                    <View style={[styles.tableData, { flex: 2 }]}><TextNunitoBold style={styles.textHead}>Incisivos</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoBold style={styles.textHead}>Pinça (1)</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoBold style={styles.textHead}>Médio (2)</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoBold style={styles.textHead}>Canto (2)</TextNunitoBold></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Nasc. Leite</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>7 d</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>30 d</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>6 m</TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Rasamento Leite</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>1 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>1,5 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>2 a</TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Nas. Definitivos</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>2,5 - 3a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>3,5 - 4a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>4,5 - 5a</TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Rasamento</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>6 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>6 a <Text style={styles.textbracket}>{'\n'} (cauda de andorinha)</Text></TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>8 -9 a <Text style={styles.textbracket}>{'\n'} (estrela dentária)</Text></TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Nivelamento</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>9 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>10 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>11-12 a <Text style={styles.textbracket}>{'\n'}(cauda e galvane)</Text></TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Triangulação</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>13 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>14 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>15- 16 a</TextNunitoRegular></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableData, { flex: 2, alignItems: 'flex-start' }]}><TextNunitoBold style={styles.textTitle}>Biangulação</TextNunitoBold></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>17 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>18 a</TextNunitoRegular></View>
                    <View style={styles.tableData}><TextNunitoRegular style={styles.textData}>19 - 20 m</TextNunitoRegular></View>
                </View>
            </View>
        )
    }
}