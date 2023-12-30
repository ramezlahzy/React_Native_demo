import { StyleSheet } from 'react-native';
import theme from './theme';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgCurveColor: {
        backgroundColor: theme.colors.brand.main,
        position: "absolute",
        width: "100%",
        height: 45,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    topSection: {
        marginTop: 14,
        padding: 5
    },
    homeIcon: {
        justifyContent: "center",
        marginBottom: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        //borderWidth:0.8,
        borderColor: "#a8aaaa",
        shadowOffset: { width: 0, height: 2, },
        elevation: 2,
        shadowColor: '#a8aaaa',
        shadowOpacity: 1,
        shadowRadius: 4,
        height: 50,
        width: 50,
        borderRadius: 25
    },

    TopTabStyle: {
        overflow: "hidden",
        elevation: 3,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 15
    },

    inputFieldLabel: {
        fontSize: 15,
        fontFamily: theme.fonts.regular,
        marginBottom: -3
    },
    inputFieldError: {
        fontSize: 15,
        fontFamily: theme.fonts.regular,
        color: theme.colors.brand.danger
    }

})