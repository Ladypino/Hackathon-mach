import React, {Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MachFantastico from './MachFantastico';
import MachMaravilloso from './MachMaravilloso';
import MachPremium from './MachPremium';
import './style/ProfilesResume.css';

const ProfilesResume = () => {
    return (
        <Fragment>
            <div className="slide-container">
                <h2>Perfiles MACH</h2>
                <h5>Tu fidelidad nos importa, queremos mostrártelo. Descubre los perfiles asociados a beneficios que tenemos pensados en ti y en tu acumulación de puntos MACH. </h5>
            </div>
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="slide-container">
                    <MachFantastico/>
                </div>
                <div className="slide-container">
                    <MachMaravilloso/>
                </div>
                <div className="slide-container">
                    <MachPremium/>
                </div>
            </Carousel>
        </Fragment>
    )

}

export default ProfilesResume;