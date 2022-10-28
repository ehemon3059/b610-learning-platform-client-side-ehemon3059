import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='programmer-title'>Blogs for Programmer</h1>
            <div className="main-container">
                <div className="child-container">
                    <div className="heading">
                        <h2>what is cors ?</h2>
                    </div>
                    
                    <div className="question-answer">
                            <p>Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.  </p>
                    </div>
                </div>
                <div className="child-container">
                    <div className="heading">
                        <h2>How does private route works  </h2>
                    </div>
                    
                    <div className="question-answer">
                        <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                        
                    </div>
                </div>
                <div className="child-container">
                    <div className="heading">
                        <h2> what is <span style={{color: "green"}}>node js </span> ? </h2>
                    </div>
                    
                    <div className="question-answer">
                            <p>Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return</p>
                            <b>how does node js work</b>
                            <br></br>
                            
                            <p> 
                                
                            Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.


                            Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiles to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel.

                            Much of Node’s utility comes from its large package library, which is accessible from the npm command. NPM, the Node package manager, is part of the standard Node.js installation, although it has its own website.





                                 

                            </p>
                    </div>
                </div>
                <div className="child-container">
                    <div className="heading">
                        <h2> why are you using  <span style={{color: "green"}}>firebase</span> ? </h2>
                    </div>
                    
                    <div className="question-answer">
                            <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!</p>
                            <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                            <b>what other options do you have to implement authentication ?</b>
                            <br></br>
                            
                            <p> Lets start by listing the various ways through which we can achieve authentication,</p>
                            
                            <ul>
                                <li>Cookie-Based authentication</li>
                                <li>Token-Based authentication</li>
                                <li>Third party access(OAuth, API-token)</li>
                                <li>OpenId</li>
                                <li>SAML</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;