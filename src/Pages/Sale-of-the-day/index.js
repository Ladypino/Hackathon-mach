import React, {Fragment} from 'react';
import HeroSale from '../../components/HeroSaleOfTheDay';
import SaleDay from '../../components/SaleDay';

const SaleOfTheDay = () => {
    return(
        <Fragment>
            <HeroSale/>
            <SaleDay/>
        </Fragment>
    );
}

export default SaleOfTheDay;