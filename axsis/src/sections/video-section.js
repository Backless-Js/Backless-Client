import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";
import './../css/video-section.css';


class VideoSection extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    
    openModal () {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <div className="video-section text-center">
                <div className="overlay pt--60 pb--60 pt_lg--160 pb_lg--160">
                    <div className="axsis-video-btn">
                        <span className="before-btn">Watch this video</span>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='NGNqWhuR34s' onClose={() => this.setState({isOpen: false})} />
                        <button className="axsis-play-btn" onClick={this.openModal}><FaPlay /></button>
                        <span className="after-btn">to know how it works.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoSection;