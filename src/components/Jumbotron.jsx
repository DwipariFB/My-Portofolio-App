import React, { Component } from 'react';
import dwipari from "../assets/dwipari.jpg"

export default class Jumbotron extends Component {
  render() {
    return (
        <div className='jumbotron'>
        <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
        <img src={dwipari} width="200" className='rounded-circle img-thumbnail'/>
        <h1 class="display-5 fw-bold">Dwipari Firoos Briliansyah</h1>
        <p class="fs-4 text-center d-flex justify-content-center align-items-center">
        Mahasiswa | Divisi 3D Animator, Junior Front-end, UI Design
        </p>
        <p>
          <a href='https://www.artstation.com/dwiparifb'>ArtStation</a> |  
          <a href='https://github.com/DwipariFB?tab=repositories'> Github</a> |
          <a href='https://www.linkedin.com/in/dwipari-firoos-briliansyah-a309a5228/'> Linkedin</a>
        </p>
        
      </div>
    </div>
    </div>
    );
  }
}
