import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Flex } from 'theme-ui'; 
import { buttonContainer } from './styles/ConnectionsCountButton';


interface ConnectionsCountButtonProps {
    example: string;
}

const ConnectionsCountButton: React.FC<ConnectionsCountButtonProps> = ({example}) => {
    console.log(example)
    const connectionsCount = 0; // replace with store selector
    return (
        <Flex sx={{...buttonContainer}}>
            <div>
                <FormattedMessage 
                    id='dashboard.connectionsCountButton.subtitle'
                    description='Connections count button subtitle'
                    defaultMessage='Remaining'
                />
            </div>
            <div>
                <FormattedMessage 
                    id='dashboard.connectionsCountButton.title'
                    description='Connections count button title'
                    defaultMessage='Connections'
                />
            </div>
            <div>
                <FormattedNumber 
                    value={connectionsCount}
                />
            </div>
        </Flex>
    )
}

export default ConnectionsCountButton;