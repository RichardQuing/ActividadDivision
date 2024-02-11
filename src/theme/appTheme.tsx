import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, BUTTON_COLOR, TEXT_NORMAL } from '../components/Color';

export const styles = StyleSheet.create({
    textBig: {
        fontSize: 50,
        textAlign: 'center',
        color: PRIMARY_COLOR,
        top: 50,
        marginBottom: 50,
    }
    ,
    avatar: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
    },
    textButoon: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        backgroundColor: BUTTON_COLOR,
        top: 30,
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 30
    }
    , titleNormal: {
        fontSize: 35,
        color: TEXT_NORMAL,
        textAlign: 'center',
        top:-20
    }, titleResultado: {
        top:15,
        fontSize: 20,
        color: TEXT_NORMAL,
        textAlign: 'center'
    }
    ,
    textCampo: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: BUTTON_COLOR,
        marginBottom: 18,
        marginTop: 18,
        borderRadius: 25
    }

})