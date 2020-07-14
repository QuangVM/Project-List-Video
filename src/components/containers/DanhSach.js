import React from 'react';
import VideoDangPhat from '../VideoDangPhat'
import DanhMucPhat from './DanhMucPhat'
import CheDoToi from '../CheDoToi'
import StyledPlaylist from '../styles/StyledPlaylist'


const DanhSach = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <CheDoToi nightModeCallback={nightModeCallback} nightMode={nightMode} />
        <VideoDangPhat active={active} total={videos.length} />
        <DanhMucPhat videos={videos} active={active} />
    </StyledPlaylist>
);


export default DanhSach;