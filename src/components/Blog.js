import React from 'react';

const Blog = () => {
    return (
        <div>
             <div className='mb-5'>
                <h3> what is cors?</h3>
                <span> CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</span>
             </div>
             <div className='mb-5'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <span>
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </span>
             </div>
             <div className='mb-5'>
                <h3>
                How does the private route work?
                </h3>
                <span>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </span>
             </div>
             <div className='mb-5'>
                <h3>What is Node? How does Node work?</h3>
                <span>
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </span>
             </div>
        </div>
    );
};

export default Blog;