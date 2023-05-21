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
        <div className='Content-F'>
          <div className='Content-Card'>
            <div className='card-img'>
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/04647a7c-a95c-44ff-81f0-40e5187d99d5/Leonardo_Diffusion_HyperSensory_Haven_Immerse_yourself_in_the_1.jpg' />
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/04647a7c-a95c-44ff-81f0-40e5187d99d5/Leonardo_Diffusion_HyperSensory_Haven_Immerse_yourself_in_the_0.jpg' />
            </div>
            <div className='card-content'>
              <h1>Tiir</h1>
              <h3>Tuur tiir suii en i</h3>
            </div>
          </div>
          {/*  */}
          <div className='Content-Card'>
            <div className='card-img'>
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/9f21be12-ac20-4e92-b717-0e562484813e/Leonardo_Diffusion_HyperSensory_Haven_Immerse_yourself_in_the_1.jpg' />
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/9f21be12-ac20-4e92-b717-0e562484813e/Leonardo_Diffusion_HyperSensory_Haven_Immerse_yourself_in_the_0.jpg' />
            </div>
            <div className='card-content'>
              <h1>Tiir</h1>
              <h3>Tuur tiir suii en i</h3>
            </div>
          </div>
          {/*  */}
          <div className='Content-Card'>
            <div className='card-img'>
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/e8a52de5-b083-4e24-99fa-0899854c0d68/Leonardo_Diffusion_Ethereal_Essence_Behold_the_wondrous_Ethere_1.jpg' alt='Product' />
              <img src='https://cdn.leonardo.ai/users/ca9e5ae6-c2a1-45db-80c6-2bc46654f209/generations/e8a52de5-b083-4e24-99fa-0899854c0d68/Leonardo_Diffusion_Ethereal_Essence_Behold_the_wondrous_Ethere_0.jpg' alt='Product' />
            </div>
            <div className='card-content'>
              <h1 className='card-title'>Tiir</h1>
              <h3 className='card-description'>Tuur tiir suii en i</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PlacesPage;
