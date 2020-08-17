import React from 'react';
import { View, ImageBackground, Text, TextInput } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Form, Item, Input, Label } from 'native-base';


import styles from './styles';

function GiveClasses () {

    const { navigate } = useNavigation();
  
   
 

    function handleNavigateToRegisterPage() {
        navigate('Register');
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>

                <Text style={styles.title}>
                    Quer ser um Proffy?
                    </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor.
                </Text>

                
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} 
                    placeholderTextColor="#c1bccc" />

                    <Text style={styles.label}>Senha:</Text>
                    <TextInput secureTextEntry={true} style={styles.input}                
                    placeholderTextColor="#c1bccc" />
                </View>

                <RectButton onPress={handleNavigateToRegisterPage} style={styles.okButton}>
                    <Text style={styles.okButtonText}>Se cadastrar</Text>
                </RectButton>
            </ImageBackground>

        </View>
        );
}

export default GiveClasses;

