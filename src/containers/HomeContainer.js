import React from 'react'
import {Home} from './../components/Home'
import { connect } from 'react-redux'
import { setSelections } from '../_actions/redux.actions';

const HomeContainer = (props) => <Home {...props}/>

const mapStateToProps = (store) => {
    return {
        selections : store.selectionsReducer.selections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelections : function(num) {
            dispatch(setSelections(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)