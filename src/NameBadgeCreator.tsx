import * as React from 'react'

export interface INamebadgeCreator{
    fullName: string
}
const parseName = (fullName: string)=>{
    const nameArray = fullName.split(" ")
    let abbreviatedResult  = "";
    for(let i=0;i<nameArray.length;i++){
        if(nameArray[i] && nameArray[i].length){
            let indexChar = nameArray[i].charAt(0).toUpperCase()
            abbreviatedResult += indexChar
        }
    }
    return abbreviatedResult
}
const NameBadgeCreator = (props: INamebadgeCreator)=>{
    const abbreviatedDisplay  = parseName(props.fullName)
    return (
        <div className={'abbreviated-style'} style={{width: (abbreviatedDisplay.length*10)+'px'}}>
            {abbreviatedDisplay}
        </div>
    )
}

export {NameBadgeCreator}