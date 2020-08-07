import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
       
        padding: 40,
        
    },

    content: {
        flex: 1,
        justifyContent: 'center',

    },
    
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 150,
        
    },
    
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
        
    },

    okButton: {
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        borderRadius: 8,
    },

    okButtonText: {
        
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',
    }
});



export default styles;