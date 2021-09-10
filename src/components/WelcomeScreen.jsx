import React from "react";
import '../css/WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen 
        ? ( <div className="WelcomeScreen">
                <h1>Welcome to the Meet app</h1>
                <h4>
                    Log in to see upcoming events around the world for full-stack
                    developers
                </h4>
                <div className="button_cont" align="center">
                    <div class="google-btn">
                        <div class="google-icon-wrapper">
                            <img 
                                class="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1280px-Google_%22G%22_Logo.svg.png"
                                alt="Google sign-in"
                            />
                        </div>
                        <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="google-btn-text" >
                            <b>Sign in with google</b>
                        </button>
                    </div>
                </div>
                <a href="https://benedictbelz.github.io/meet/privacy.html" rel="nofollow noopener">
                    Privacy policy
                </a>
            </div>
        ) : null
}

export default WelcomeScreen;
