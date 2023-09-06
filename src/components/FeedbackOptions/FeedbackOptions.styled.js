import styled from 'styled-components';

export const FeedbackButtons = styled('div')(() => {
    return {
        display: 'flex',
        gap: '20px',
        margin: '0 auto',

    }
})
export const FeedbackButton = styled('button')(() => {
    return {

        padding: '10px',
        borderColor: 'transparent',
        borderRadius: '10px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'blue'
        },
        '&:first-letter': {
            textTransform: 'uppercase',
        },

    }
})













