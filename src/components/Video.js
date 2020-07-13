import React from 'react';
import ReactPlayer from 'react-player'
import StyledVideoWrapper from './styles/StyledVideoWrapper'
import StyledVideo from './styles/StyledVideo'
import StyledJourney from './styles/StyledJourney';


const Video = ({ active, autoplay, endCallback, progressCallback }) => (
    <StyledVideo>
        <StyledJourney>
            <StyledVideoWrapper>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    style={{ position: 'absolute', top: '0' }}
                    playing={autoplay}
                    controls={true}
                    url={active.video}
                    onEnded={endCallback}
                    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyledJourney>
    </StyledVideo>
)

export default Video;