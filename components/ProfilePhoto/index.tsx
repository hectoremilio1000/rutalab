import React from 'react'
import {Image} from 'react-native'

export type ProfilePhotoProps = {
    image?: string,
    size?: number,
    }


const ProfilePhoto = ({image, size = 70}: ProfilePhotoProps)=>{
    return (<Image 
        source ={{uri:'https://media-exp1.licdn.com/dms/image/C5603AQG-sMEkigdBPw/profile-displayphoto-shrink_800_800/0/1517031244308?e=1620864000&v=beta&t=kVl1SAOMaM7L5K-4AViBfl3-m5YZOe-t0DZT1tbPPb8'}} 
        style={{
            width:size, 
            height: size, 
            borderRadius:size
        }}
        />
        )
        }
        

export default ProfilePhoto