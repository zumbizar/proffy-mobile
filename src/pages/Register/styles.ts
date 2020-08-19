import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    description: {
        marginBottom: 50,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
        marginTop: -35
    },

    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        
    },

    searchForm: {
        marginBottom: 24,
        marginTop: -18,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

   

    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

   


});


export default styles;

