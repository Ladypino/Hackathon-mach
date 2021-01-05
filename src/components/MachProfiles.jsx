import React, { Fragment } from 'react';
import MachFantastico from './MachFantastico';
import MachMaravilloso from './MachMaravilloso';
import MachPremium from './MachPremium';
import './style/machProfiles.css';

const MachProfiles = () => {
    return (
        <Fragment>
            <div className="machProfiles-title">
                <h2>¿Cómo canjeo mis puntos MACH?</h2>
                <h4>Podrás canjear tus puntos según tu perfil MACH el cual verás al ingresar desde tu celular a nuestra app. Descuentos, productos y hasta la posibilidad de Cashback en tus compras te esperan.</h4>
            </div>
            <div className="profile-machFantastico">
                <MachFantastico />
            </div>
            <div className="profile-machMaravilloso">
                <MachMaravilloso />
            </div>
            <div className="profile-machPremium">
                <MachPremium />
            </div>
            <p className="terms-and-conditions">*Tu perfil MACH se define según la cantidad de puntos acumulados, estos tienen un vencimento anual. Promociones y descuentos válidos hasta acabarse el stock.</p>
        </Fragment>
    );
}

export default MachProfiles;