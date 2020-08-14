import React from 'react';
import { View, Text, Image } from 'native-base';
import background from '../../assets/images/give-classes-background.png';
import { ImageBackground } from 'react-native';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function Splash (){

    const { navigate } = useNavigation();


    function handleNavigateToStudyPages(){
        navigate('Study');
    }

    return (
       
        
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" source={background} style={styles.content}>
                
                <Text style={styles.title}>
                    Seja {'\n'}
                     bem-vindo!
                </Text>

                <RectButton onPress={handleNavigateToStudyPages} style={styles.okButton}>
                    <Text style={styles.okButtonText}>Entrar</Text>
                </RectButton>

            </ImageBackground>
        </View>

     
       
    );
    }
   



export default Splash;