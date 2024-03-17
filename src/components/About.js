import React from 'react';
import { useState } from 'react';
import '../styles/About.css'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';

function About() {
    const [showConfetti, setShowConfetti] = useState(false);
    function handleClickDownloadCV() {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 4000);
    }
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = './files/EdenGolanCV.pdf';
        downloadLink.download = 'EdenGolanCV.pdf';
        downloadLink.click();
        handleClickDownloadCV();
    };
    return (
        <div id='About'>{showConfetti && <Confetti />}
            <div>
                <span className='name'>Eden Golan</span>
            </div>
            <div>
                <span className='titleWork'>Software Developer</span>
            </div>
            <div>
                <span>Hey, I'm Eden Golan!</span>
            </div>
            <div>
                <span>I'm with a lot of Motivation and Self-learning skills.</span>
            </div>
            <div className='buttons'>
                <div>
                    <button onClick={handleDownload}>Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                        <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                    </button>
                </div>
                <div>
                    <button>
                        <Link to="/Contact" className='letsTalk'>Let's Talk
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-signal" viewBox="0 0 16 16">
                                <path d="m6.08.234.179.727a7.3 7.3 0 0 0-2.01.832l-.383-.643A7.9 7.9 0 0 1 6.079.234zm3.84 0L9.742.96a7.3 7.3 0 0 1 2.01.832l.388-.643A8 8 0 0 0 9.92.234m-8.77 3.63a8 8 0 0 0-.916 2.215l.727.18a7.3 7.3 0 0 1 .832-2.01l-.643-.386zM.75 8a7 7 0 0 1 .081-1.086L.091 6.8a8 8 0 0 0 0 2.398l.74-.112A7 7 0 0 1 .75 8m11.384 6.848-.384-.64a7.2 7.2 0 0 1-2.007.831l.18.728a8 8 0 0 0 2.211-.919M15.251 8q0 .547-.082 1.086l.74.112a8 8 0 0 0 0-2.398l-.74.114q.082.54.082 1.086m.516 1.918-.728-.18a7.3 7.3 0 0 1-.832 2.012l.643.387a8 8 0 0 0 .917-2.219m-6.68 5.25c-.72.11-1.453.11-2.173 0l-.112.742a8 8 0 0 0 2.396 0l-.112-.741zm4.75-2.868a7.2 7.2 0 0 1-1.537 1.534l.446.605a8 8 0 0 0 1.695-1.689zM12.3 2.163c.587.432 1.105.95 1.537 1.537l.604-.45a8 8 0 0 0-1.69-1.691zM2.163 3.7A7.2 7.2 0 0 1 3.7 2.163l-.45-.604a8 8 0 0 0-1.691 1.69l.604.45zm12.688.163-.644.387c.377.623.658 1.3.832 2.007l.728-.18a8 8 0 0 0-.916-2.214M6.913.831a7.3 7.3 0 0 1 2.172 0l.112-.74a8 8 0 0 0-2.396 0zM2.547 14.64 1 15l.36-1.549-.729-.17-.361 1.548a.75.75 0 0 0 .9.902l1.548-.357zM.786 12.612l.732.168.25-1.073A7.2 7.2 0 0 1 .96 9.74l-.727.18a8 8 0 0 0 .736 1.902l-.184.79zm3.5 1.623-1.073.25.17.731.79-.184c.6.327 1.239.574 1.902.737l.18-.728a7.2 7.2 0 0 1-1.962-.811zM8 1.5a6.5 6.5 0 0 0-6.498 6.502 6.5 6.5 0 0 0 .998 3.455l-.625 2.668L4.54 13.5a6.502 6.502 0 0 0 6.93-11A6.5 6.5 0 0 0 8 1.5"/>
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;