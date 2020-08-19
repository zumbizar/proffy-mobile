import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
       
        padding: 40,
        
    },

    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 37,
        lineHeight: 40,
        maxWidth: 220,
    },

    okButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04d361',
        height: 58,
        borderRadius: 8,
        width: '100%'
    },

    okButtonText: {
        
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
    },
    
});

export default styles;