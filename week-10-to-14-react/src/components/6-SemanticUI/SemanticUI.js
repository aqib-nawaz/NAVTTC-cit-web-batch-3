import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import SemanticUiMenu from './Menu'

const extra = (
    <a href='#this.com'>
        <Icon name='user' />
        16 Friends
    </a>
)
const SemanticUi = () => (

    <div>
        <SemanticUiMenu/>
        <Card
            image='https://randomuser.me/api/portraits/men/75.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
        />
        <Button content='Primary' primary />
        <Button content='Secondary' secondary />
    </div>

)

export default SemanticUi