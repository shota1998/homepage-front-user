import React from 'react';
import '../../App.css';

export default function Profile() {
  return <>
    <div className='profile'>
      <div className='whoami'>
        <h3>Shota Sato</h3>
        <p>Software enginner</p>
      </div>
      <hr />
      <div className='bio'>
        <h3>Bio</h3>
        <p>1998: Born in Japan</p>
        <p>2020: Dropped out of college</p>
        <p>2021 ~ Now: Working as a backend engineer.</p>
      </div>
      <hr />
      <div className='skill'>
        <h3>Work experiences</h3>
        <p>Lang: PHP</p>
        <p>Tool: Codeigniter, MySQL, Github, Backlog, New rerlic</p>
        <p>AWS: CloudWatch</p>
        <p>Style: TDD, Agile</p>
        <p>Others: Refactoring, Performance Improvements</p>
      </div>
      <hr />
      <div className='skill'>
        <h3>Private experiences</h3>
        <p>Lang: Rust, javascript</p>
        <p>Tool: actix-web, React, Redux, Saga, GraphQL</p>
        <p>CICD: Github Actions</p>
        <p>AWS: EC2, S3, RDS, Cognito</p>
        <p>Style: Issue based development</p>
      </div>
      <hr />
      <div className='skill'>
        <h3>Qualifications</h3>
        <p>AWS Solutions Architect - Associate</p>
        <p>基本情報技術者 (Fundamental Information Technology Engineer Examination)</p>
        <p>LPIC Level 2</p>
        <p>Deep Learning for GENERAL</p>
        <p>TOEIC 925</p>
        <p>EIKEN Grade Pre-1</p>
      </div>
      <hr />
      <div className='sns'>
        <h3>Accounts</h3>
        <a href="https://github.com/shota1998"            target="_blank" rel="noreferrer"><p>GitHub</p></a>
        <a href="https://www.linkedin.com/in/shota-sato/" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
      </div>
    </div>
  </>;
}
