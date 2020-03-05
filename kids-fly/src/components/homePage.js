import React from 'react';


const HomePage = () => {
    return (
        <div className="home-wrapper">
            <h2>Sign in options</h2>
            <button>Create KidsFly account</button>
            <h3>Already have an account? <button>Sign in</button></h3>
            <br />
            <h2>Or</h2>
            <br />
            <button>Continue with<span></span> Google</button>
            <button>Facebook</button>
            <button>Twitter</button>
        </div>
    )
};

export default HomePage;