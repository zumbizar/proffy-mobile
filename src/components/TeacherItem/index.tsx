import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';



import styles from './styles';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                source={{ uri: 'https://github.com/zumbizar.png' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Fernando Henrique</Text>
                    <Text style={styles.subject}>Química</Text>

                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias e games.
                {'\n'}  {'\n'}
                Apaixonado por ganhar todas as partidas de League of Legends, Valorant e Overwatch.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora  {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton]}>
                    <Image source={heartOutLineIcon} /> 
                  
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    );
}

export default TeacherItem;