import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

export const ModalVideo = ({ videoKey, videaPlatform, isOpen, close }) => {

    const [ urlVideo, setUrlVideo ] = useState(null);

    const switchVideo = (videoKey, videaPlatform) => {

        const PLATFORM_VIDEO = {
        YouTube:  `htpps://youtu.be/${videoKey}`,
        Vimeo:  `htpps://vimeo.com/${videoKey}`
    }

        const platformUrl = PLATFORM_VIDEO[videaPlatform] || 'NO CONTINE VIDEO TRAILER';
        setUrlVideo(platformUrl);
    }


    useEffect(() => {
        switchVideo(videoKey, videaPlatform);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoKey, videaPlatform]); 

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
