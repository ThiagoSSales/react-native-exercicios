import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import commomStyles from '../CommomStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {
    const doneOrNotStyle = props.doneAt != null ?
        { textDecorationLine: 'line-through'} : {};
    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if(doneAt != null){
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color='#FFF'/>
            </View>
        );
    } else {
        return (
            <View style={styles.pending}></View>
           );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 15
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.subText,
        fontSize: 12
    }
});