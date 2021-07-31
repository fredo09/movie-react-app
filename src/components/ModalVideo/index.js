import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

export const ModalVideo = ({ videoKey, videaPlatform, isOpen, close }) => {

    const [ urlVideo, setUrlVideo ] = useState(null);

    const PLATFORM_VIDEO = {
        YouTube:  `htpps://youtu.be/${videoKey}`,
        Vimeo:  `htpps://vimeo.com/${videoKey}`
    }

    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const platformUrl = PLATFORM_VIDEO[videaPlatform] || 'NO CONTINE VIDEO TRAILER';
        setUrlVideo(platformUrl);

    }, [videoKey, videaPlatform])

    return (
        <Modal
            className="modal-video"
            visible={isOpen}
            centered
            onCancel={close}
            footer={ false}>
            <ReactPlayer url={urlVideo} controls />
        </Modal>
    )
}
