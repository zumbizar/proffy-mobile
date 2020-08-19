import React, { useState } from 'react';
import { View, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';



import styles from './styles';
import PageHeader from '../../components';
import { TextInput, RectButton, ScrollView } from 'react-native-gesture-handler';



function Register () {

   

    const { navigate } = useNavigation();

    
    function handleNavigateToSplashPage() {
        navigate('Splash');
    }
  

    return (

        <ScrollView>

             <View style={styles.container}>

                <PageHeader title="Quase lá! ">
                    <Text style={styles.description}>
                                Complete os dados abaixo.
                            </Text>
                        
                        <View style={styles.searchForm}>
                                <Text style={styles.label}>Nome Completo</Text>
                                <TextInput style={styles.input} 
                                placeholder="Ex: Fernando Henrique Mendes" 
                                placeholderTextColor="#c1bccc" />

                                <Text style={styles.label}>Qual matéria quer ensinar?</Text>
                                <TextInput style={styles.input} 
                                placeholder="Qual a matéria?" 
                                placeholderTextColor="#c1bccc" />

                                <Text style={styles.label}>Custo da aula</Text>
                                <TextInput style={styles.input} 
                                placeholder="Qual seu preço?" 
                                placeholderTextColor="#c1bccc" />

                                <Text style={styles.label}>Whatsapp</Text>
                                <TextInput style={styles.input} 
                                placeholder="Qual seu número?" 
                                placeholderTextColor="#c1bccc" />
                            
                                


                                <View style={styles.inputGroup}>
                                            <View style={styles.inputBlock}>
                                            <Text style={styles.label}>Dia da semana</Text>
                                        <TextInput style={styles.input}
                                        placeholder="Qual o dia?" 
                                        placeholderTextColor="#c1bccc"/>
                                
                                    </View>

                                            <View style={styles.inputBlock}>
                                            <Text style={styles.label}>Horário</Text>
                                        <TextInput style={styles.input}
                                        placeholder="Qual o horário?" 
                                        placeholderTextColor="#c1bccc"/>
                                
                                    </View>

                                </View>

                                <RectButton onPress={handleNavigateToSplashPage} style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Tudo pronto</Text>
                                </RectButton>
                            </View>
                
                </PageHeader>

            </View>
        </ScrollView>

    );
}

export default Register;