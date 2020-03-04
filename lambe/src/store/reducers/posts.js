import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Nick Teste 1',
        email: 'nick1@email.com',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/bw.jpg'),
        comments: [{
            nickname: 'Nick Teste 1',
            comment: 'Comment 3'
        }, {
            nickname: 'Nick Teste 3',
            comment: 'Comment 4'
        }] 
    }]
}

const reducer = (state =initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer