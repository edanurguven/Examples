import React from 'react'

export default function reducers(state,actions){
    switch (actions.type) {
        case 'ChangeType':
            const {typeValue} = actions.payload;
            return {...state,type:typeValue};
        case 'ChangeLevel':
            const {levelValue} = actions.payload;
            return {...state, level: levelValue};
        default:
            return {...state}
    }
}