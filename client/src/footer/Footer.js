import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer bg-light fixed-bottom">
                <div className="align-self-center footer-div d-flex align-content-center justify-content-center flex-column">
                    <p className="text-muted footer-text">Alejandría 2018 &copy;</p>
                </div>
            </footer>
        );
    };
};

export default Footer;