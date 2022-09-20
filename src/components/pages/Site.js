import React from 'react';
import '../../App.css';

export default function Profile() {
  return <>
    <div className='site'>
      <div className='summary'>
        This site is primarily for posting blogs. <br/>
        The topic is mainly technology. <br/>
        I could utilize a site generator or something similar. <br/>
        Instead, I created this site to expand my knowledge of front-end technology. <br/>
      </div>
      <hr />
      <div className='technology'>
        <h3>Technology</h3>
        <p>This site is made with the following technologies</p>
        <p>Lang: Rust, javascript</p>
        <p>Tool: actix-web, React, Redux, Saga, Docker, PostgressSQL</p>
        <p>CICD: Github Actions</p>
        <p>AWS: S3, Congito</p>
        <p>Others: OCI, Vercel</p>
      </div>
    </div>
  </>;
}
