import React from 'react';

function Navigation() {
    
    return (
        <div className="section">
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <span className="icon has-text-white">
                                <i className="fas fa-portrait fa-2x"></i>
                            </span>
                        </div>
                        <div className="level-item">
                            <h1 className="title has-text-white has-text-weight-bold">FaceHunt</h1>
                        </div>
                    </div>
                    <div className="level-right">
                        <a href="https://g12portfolio.web.app/" target="_blank" className="button is-outlined is-white level-item">Portfolio</a>
                        <a href="https://github.com/ican17/face-recognition-" target="_blank" className="button is-outlined is-white level-item">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;

