import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public peliculas: Pelicula[];

  constructor(
  ) {
    this.peliculas = [
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
      {
        id: 1,
        titulo: '12 horas para sobrevivir: El inicio (2018)',
        otros_titulos: 'La primera purga: La noche de las bestias | The First Purge',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Un partido político en Estados Unidos llega al poder y lleva a cabo un experimento: ninguna ley durante 12 horas en Staten Island. Nadie es obligado a permanecer en la isla, pero se le dará 5000 dólares a los que se queden.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Y\'lan Noel, Lex Scott Davis, Joivan Wade, Mugga, Patch Darragh, Marisa Tomei, Luna Lauren Velez, Kristen Solis, Rotimi Paul, Mo McRae, Jermel Howard, Siya',
        genero: ['Acción', 'Terror', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Gerard McMurray',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 5.2,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/09/12-horas-para-sobrevivir-el-inicio.jpg'
      },
      {
        id: 2,
        titulo: 'Ant-Man and the Wasp',
        otros_titulos: 'Ant-Man and the Wasp | El Hombre Hormiga y la Avispa | Homem-Formiga e a Vespa (português)',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Después de su experiencia con el Capitán América, Scott Lang reflexiona sobre ser un super héroe y un padre, entonces Hope van Dyne y el Dr. Hank Pym presentan una misión urgente que pone a Ant-Man a luchar al lado de la Avispa para descubrir secretos del pasado.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins, Bobby Cannavale, Judy Greer, T.I., David Dastmalchian, Michelle Pfeiffer, Laurence Fishburne, Michael Douglas',
        genero: ['Acción', 'Aventura ', 'Ciencia ficción'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Peyton Reed',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/ant-man-and-the-wasp.jpg'
      },
      {
        id: 3,
        titulo: 'Siberia',
        otros_titulos: 'Siberia',
        // tslint:disable-next-line:max-line-length
        sinopsis: 'Cuando el socio ruso de un comerciante norteamericano de diamantes desaparece, él viaja a Sibera para buscarlo, donde también comienza una relación obsesiva con la propietaria de un café.',
        // tslint:disable-next-line:max-line-length
        elenco: 'Keanu Reeves, Boris Gulyarin, Ashley St. George, Veronica Ferres, Pasha D. Lychnikoff, Rafael Petardi, Taran Vitt, James Gracie, Ana Ularu, Dmitry Chepovetsky, Kis Yurij',
        genero: ['Crimen', 'Romance', 'Suspenso'],
        idioma_audio: 'Latino e Inglés subtitulada',
        director: 'Matthew Ross',
        calidad: 'Full HD Bluray - AVC 2000kbps | AAC 160kbps',
        valoracion: 7.3,
        imagen: 'https://www.cinecalidad.to/wp-content/uploads/2018/10/siberia.jpg'
      },
    ];
   }



}
