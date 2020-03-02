import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Nick Teste 1',
            email: 'nick1@email.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Nick Teste 2',
                comment: 'Comment 1'
            }, {
                nickname: 'Nick Teste 3',
                comment: 'Comment 2'
            }] 
        }, {
            id: Math.random(),
            nickname: 'Nick Teste 4',
            email: 'nick4@email.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [{
                nickname: 'Nick Teste 1',
                comment: 'Comment 3'
            }, {
                nickname: 'Nick Teste 3',
                comment: 'Comment 4'
            }] 
        }]
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`} 
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed