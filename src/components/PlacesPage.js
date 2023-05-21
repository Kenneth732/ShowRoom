import React, { useState, useEffect } from 'react';
import PlacesList from './PlacesList';
import NavBar from './NavBar';

function PlacesPage() {


  return (
    <div>
      <NavBar />
      <PlacesList />
      <div className='ContentBody'>
        <div className='ContentBar'>
          <div className='Content-Imgs'>
            {/* <img className='Sofa' src='https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/510008fc-7c8b-4928-b835-f283ebe26516/Leonardo_Diffusion_Ethereal_Essence_As_you_approach_the_Ethere_0.jpg' /> */}
          </div>
          <div className='Content-Text'>
            <h1>Collection Digital Room</h1>
            <h3>Eii cu seeh iuu</h3>
            <h4>Nasttimcatak luinnice varhence Eii exiin hence ui unn hex eiin nii </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci neque, pellentesque eu finibus non, tincidunt id magna. Vestibulum nisi sapien, suscipit ac nisl vel, lacinia mattis tellus. Ut laoreet eleifend aliquet. Fusce accumsan iaculis condimentum. Mauris pretium magna in justo aliquet tincidunt. Nullam quam mi, sollicitudin et aliquam et, dapibus vitae lectus. Proin ante lectus, congue id nisi non, accumsan volutpat orci. Quisque sodales lorem sed ornare rhoncus. In vel imperdiet tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesPage;
