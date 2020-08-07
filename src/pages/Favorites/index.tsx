import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import OnlyPress from '../../components/ForFavorite';

function Favorites(){
    return (
        <View style={styles.container}>
        <PageHeader title="Meus Proffys favoritos" />

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
            >
        <OnlyPress />
        

        


            </ScrollView>
    </View>
    );
}


export default Favorites;