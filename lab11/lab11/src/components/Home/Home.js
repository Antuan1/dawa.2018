import React from 'react';

import imgG from '../../assets/kenichi.jpg'

const home = () => (<div>
	<h1>Pagina de inicio </h1>
	<center><h2>Antuan</h2></center>
	<img src={imgG} alt="Gato" style={{maxHeight: '350px'}}/>
</div>);

export default home;