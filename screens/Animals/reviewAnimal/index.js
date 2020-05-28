import React from 'react';
import { View, Alert } from 'react-native';
import SketchOnPiture from '../../../components/SketchOnPicture';
import FotoVet from '../../../assets/foto_vet.jpg';
import RoundedButton from '../../../components/RoundedButton';
import { PICTON_BLUE, GRAY, WHITE, SHAMROCK } from '../../../config/colors';
import CustomButton from '../../../components/CustomButton';
import { scale, croppedViewHeight } from '../../../helpers/scalesHelpers';
import { storeData } from '../../../helpers/storage';
import withHeader from '../../../hoc/withHeader';
import styles from '../styles';
import _ from 'lodash';

class ReviewAnimal extends React.Component {
  static onBack = (navigation) => {
    const marks = navigation.getParam('marks');

    if (marks && marks.length > 0) {
      Alert.alert(
        'Deseja sair sem salvar?',
        'Sua marcações serão excluídas',
        [
          { text: 'Sim', onPress: () => { 
            navigation.goBack();
          } },
          {
            text: 'Não', onPress: () => {}
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.goBack();
    }
  }


  componentWillUnmount() {
    this.props.screenProps.clearMarks();
  }
  componentWillUpdate() {
    const marks = this.props.screenProps.getMarks();
    const snapshot = this.props.screenProps.getSnapshot();
    const rightButton = this.props.navigation.getParam('rightButton');
    const marksParam = this.props.navigation.getParam('marks');

    if(!(_.isEqual(marks, marksParam))) {
      this.props.navigation.setParams({ marks: marks });
    }

    if (marks.length > 0 && !rightButton) {
      this.props.navigation.setParams({
        rightButton: (
          <CustomButton
            text="Salvar"
            color={WHITE}
            backgroundColor={SHAMROCK}
            style={{ paddingHorizontal: scale(10), height: scale(40) }}
            textSize={scale(12)}
            onPress={() => {
              storeData(
                '@resenhaapp/animal:marks',
                JSON.stringify({
                  image: snapshot,
                  marks: marks
                })
              );
              // photosnapshot with marks
            }}
          />
        ),
      });
    } else if (!marks.length && rightButton) {
      this.props.navigation.setParams({
        rightButton: null,
      });
    }
  }

  render() {
    return (  
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: croppedViewHeight,
      }}>
        <SketchOnPiture
          image={FotoVet}
          screenProps={this.props.screenProps}
          callBackOnChange={({ image, changeAction, undoSketch }) => {
            if (changeAction === 'sketch') {
              this.props.navigation.navigate('CreateMark', { undoSketch: undoSketch })
            }
          }}
        >
          {({ startSketch, undoSketch, removeLine }) => (
            <View style={styles.reviewContent}>
              <View style={styles.buttonWrapper}>
                <CustomButton
                  text="Lista de marcações"
                  textSize={scale(12)}
                  color={GRAY}
                  style={styles.customButton}
                  onPress={() => this.props.navigation.navigate('ListMarks', { removeLine: removeLine })}
                />
              </View>
              <View style={styles.icon}>
                <RoundedButton
                  size={scale(40)}
                  color={PICTON_BLUE}
                  iconSize={scale(15)}
                  style={styles.buttonRounded}
                  onPress={startSketch}
                  icon={'icon-plus'}
                />
                {/* <RoundedButton
                  size={scale(40)}
                  color={PICTON_BLUE}
                  iconSize={scale(15)}
                  style={styles.buttonRounded}
                  onPress={undoSketch}
                  icon={'ccw'}
                /> */}
              </View>
            </View>
          )
          }
        </SketchOnPiture>
      </View>
    )
  }
}

export default withHeader(
  'Fazer Resenha',
  'icon-arrow-left',
  null,
  navigation => ReviewAnimal.onBack(navigation),
)(ReviewAnimal);