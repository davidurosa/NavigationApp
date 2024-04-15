import {StyleSheet} from 'react-native';



export const globalColors = {
    primary: '#5856D6',
    secondary: '#FF9427',
   tertiary: '#FFD55A',
   success: '#198754',
    warning: '#F4A261',
    danger: '#D62828',
    light: '#ffffff',
    dark: '#ffffff',
    };



export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: globalColors.light,
        padding: 20,
    },


    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: '100%',
    },

    buttonText: {
        color: globalColors.light,
        fontSize: 18,
    },

});
