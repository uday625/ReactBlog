import React from 'react';
import './Heading.css';

const Heading = () => {
    return (  
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li> <a href="/">Home</a></li>
                        <li> <a href="/new-post">New Post</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    );
}
 
export default Heading;