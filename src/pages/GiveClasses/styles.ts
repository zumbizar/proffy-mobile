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
        marginTop: 100
        
    },
    
    description: {
        marginBottom: 20,
        marginTop: 10,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
        
    },

    okButton: {
        marginTop: 10,
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
    },

    searchForm: {
        marginTop: 15
        
    },

    label: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins_400Regular'
    },

    input: {
        color: '#000',
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
});



export default styles;