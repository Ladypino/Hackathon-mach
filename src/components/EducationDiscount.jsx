import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import headerEducation from '../images/headerEducation.jpg';
import gallery3 from '../images/Gallery/gallery3.jpg'

const Example = (props) => {
  return (
    <div>
     <section>
            <div className='Gastronomy--CoverPage--ctn'>
                <p>Home > Beneficios > Gastronomía</p>

                <h1 className='Gastronomy--CoverPage--ctn-h1'>Una rica experiencia siempre se comparte</h1>
                <h3 className='Gastronomy--CoverPage--ctn-h3'>Prepárate para disfrutar los descuentos y promociones en gatronomía que MACH trae para ti.</h3>
            </div>
            <img className='Gastronomy--CoverPage--img' src={headerEducation} alt='Portada Mach Beneficios Gastronomía' />
        </section>
      <Card body>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText> <img className='Gastronomy--CoverPage--img' src={gallery3} alt='Portada Mach Beneficios Gastronomía' /></CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-right">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  );
};

export default Example;