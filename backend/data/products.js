const products = [
  {
    _id: '1',
    name: '1era. Línea Serum Antioxdiante ',
    image: '/images/img10.jpg',
    description:
      '1era Línea es un concentrado Serum de Defensa contra los radicales libres. Al ser un potente Antioxidante y Humectante protegen la piel contra las agresiones y el daño celular al que esta expuesto. Nuestros principales ingredientes antioxidantes como el Escualano , Rosa Mosqueta , Sacha Inchi , Espino Amarillo y Lavanda ayudan a mantener y proteger la barrera de la piel, mejorando su tono con el uso frecuente.',
    brand: 'YOU Organic SkinCare',
    category: '',
    price: 14000,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Gleam Óleo Facial',
    image: '/images/img9.jpg',
    description:
      'Gleam es un blend lleno de vitaminas,  ideal para pieles secas y /o maduras;  los ingredientes que la conforman  aportan  elasticidad ,nutrición ,emoliencia e hidratación. Nuestro principales ingredientes como el Argán,  Algodón, Geranio y Bergamota colaboran en el efecto regenerador de los tejidos y ayudan a restaurar las barreras lipídicas  de la piel y retener la hidratación.',
    brand: '',
    category: '',
    price: 9000,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Hialuronic Serum',
    image: '/images/img11.jpg',
    description:
      'El Hialurónico es una sustancia que se encuentra de manera natural en la piel y que ayuda a mantenerla hidratada, pero con el paso de los años su presencia va disminuyendo considerablemente y como consecuencia tenemos la pérdida de firmeza y volumen en la piel. Hialuronic Serum es un potentre Hidratante Restaurador,  los ingredientes en su formulación  aportan  elasticidad , firmeza e hidratación. Nuestros principales ingredientes como el Aloe Vera y extracto de Vino ayudan a mantener una piel tersa, luminosa,  reduciendo la inflamación, proporcionando elasticidad e incrementando el grosor de la piel',
    brand: '',
    category: '',
    price: 19000,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Bifásico Nutritivo',
    image: '/images/img13.jpg',
    description:
      'Bifásico Nutritivo es un limpiador a base de *aceites orgánicos no comedogénicos y extractos botánicos. Al  ser incluidos en tu rutina de limpieza diaria  ayudarán a  conseguir una piel  limpia y luminosa. Por la combinación de sus ingredientes nutritivos  estos eliminan las impurezas sin irritar o maltratar tu piel, brindádole un tono luminoso.',
    brand: '',
    category: '',
    price: 11000,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Gel Limpiador Pepino',
    image: '/images/img12.jpg',
    description:
     'Gel de limpieza suave y eficaz con la Piel. Elaborada con hidrolatos y extractos de Pepino y Manzanilla  incluyen solo tensoactivos de origen natural. Lo ingredientes que la conforman logran el balance del PH de una piel saludable. Sensación de frescura y limpieza inmediata.',
    brand: '',
    category: '',
    price: 9000,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Luxury Rose Mask',
    image: '/images/img32.jpg',
    description:
      'Nuestra mascarilla facial combina arcilla blanca y roja, arroz , avena  y otros activos botánicos que en conjunto limpian,  desintoxican e iluminan la piel. Por su formulación Luxury Rose Mask ayuda a desinflamar, promover el colágeno, devulve la vitalidad y luminosidad  a la piel.',
    brand: '',
    category: '',
    price: 8000,
    countInStock: 7,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '7',
    name: 'Super Food Mask',
    image: '/images/img33.jpg',
    description:
      'Nuestra mascarilla facial combina arcilla blanca y verde, camu camu , clorofila  y otros activos botánicos que en conjunto limpian,  desintoxican y revitalizan la piel. Por su formulación Super Food Mask   ayuda balancear  el exceso de sebo y proporciona el boost de energía a la  piel.',
    brand: '',
    category: '',
    price: 8000,
    countInStock: 4,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '8',
    name: 'Vita-C',
    image: '/images/img16.jpg',
    description:
      'Vita C es un excelente producto antiaging que aporta luminosidad y nutrición, mejora notablemenge el tono, hidrata y protege la barrera cutánea de la piel. Rica en atioxidantes y con una formulación estable a la oxidación. ',
    brand: '',
    category: '',
    price: 13000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '9',
    name: 'A-Klara',
    image: '/images/img18.jpg',
    description:
      'Ayuda a minizar las manchas,  aporta luminosidad y empareja el tono de la piel. A-Klara es una crema para uso nocturno y por sus activos botánicos además de ser despigmentante aporta hidratación inmediata a la piel, es antiinflamatoria lo que la hace efectiva para poder usarla en condiciones cutáneas como el acné y en alteraciones pigmentarias.',
    brand: '',
    category: '',
    price: 16000,
    countInStock: 3,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '10',
    name: 'Leche',
    image: '/images/img15.jpg',
    description:
      'Leche es una crema ligera que garantiza una hidratación instantánea y profunda; genera una reserva de humedad  en la piel que dura por muchas horas.  Por su formulación aumenta la resistencia de la Piel haciendola más elástica proporcionano notables beneficios contra el envejecimiento.',
    brand: '',
    category: '',
    price: 10500,
    countInStock: 9,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '11',
    name: 'Dream Pie',
    image: '/images/img37.jpg',
    description:
      'Con ingredientes potentes escogidos especialmente para regenerar la piel y combatir el envejecimiento “ Dream Pie” es  una crema rica en vitaminas que mejora la circulación de la sangre mejorando notablemente el aspecto de la piel y previniedno la aparicios de arrugas.',
    brand: '',
    category: '',
    price: 12500,
    countInStock: 9,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '12',
    name: 'Ojos Si',
    image: '/images/img17.jpg',
    description:
      'Nutrición especial  para  la delicada zona del contorno de los Ojos, Hidratante y Refrescante. Ayuda a reducir  la inflamación e hinchazón alrededor de los ojos. Elaborada con ingredientes y activos botánicos especiales que brindan firmeza y frescura evitando la aparición de líneas finas  combatiendo las ojeras.',
    brand: '',
    category: '',
    price: 8000,
    countInStock: 8,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '13',
    name: 'Bloom Tónico',
    image: '/images/img20.jpg',
    description:
      'Tónico Bloom brinda una inmediata hidratación y es ideal para toda las pieles, como segunda función principal recupera el PH natural de la Piel saludable. En su formulación  incluye una combinación  de hidrolatos y activos derivados de plantas orgánicas que ayuda a desinflamar, hidratar y retener la humedad de la Piel.',
    brand: '',
    category: '',
    price: 8000,
    countInStock: 7,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '14',
    name: 'Acqua Rose',
    image: '/images/img19.jpg',
    description:
      'Acqua Rose actúa como Hidratante, Tónico facial y Fijador de Maquillaje.Es una fuente natural de propiedades relajantes, antiinflamatorias y descongestionantes , tiene altos niveles de vitaminas y antioxidantes (C, E , K y carotenos) que luchan contra los radicales libres, aporta hidratación, suavidad  y firmeza a la Piel.',
    brand: '',
    category: '',
    price: 8000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '15',
    name: 'Absolute Lash',
    image: '/images/img14.jpg',
    description:
      'Absolute Lash fortalece las  pestañas y cejas hidratando el folículo, promoviendo su crecimiento  y  prolongando la vida saludable  del folículo antes de su caída natural.',
    brand: '',
    category: '',
    price: 7000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '16',
    name: 'Nutritiva Manos Maracuyá',
    image: '/images/img29.jpg',
    description:
      'Crema Nutritiva que ofrece nutrición  e  hidratación  para las  manos deshidratadas o pieles dañadas.',
    brand: '',
    category: '',
    price: 10000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '17',
    name: 'Nutritiva Manos Frutos del Bosque',
    image: '/images/img30.jpg',
    description:
      'Crema Nutritiva que ofrece nutrición  e  hidratación  para las  manos deshidratadas o pieles dañadas.',
    brand: '',
    category: '',
    price: 10000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '18',
    name: 'Flower Petals Body Lotion',
    image: '/images/img31.jpg',
    description:
      'Loción Corporal que ofrece nutrición, regeneración, emoliencia , suavidad  e  hidratación  para la piel.',
    brand: '',
    category: '',
    price: 14500,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '19',
    name: 'Guasha',
    image: '/images/img36.jpg',
    description:
      'Gua Sha es una técnica ancestral china conocida como la técnica del raspado , mejora la circulación linfo sanguínea y relaja los músculos de la cara, con efectos rejuvenecedores ya que a mayor circulación sanguínea mejor calidad de piel. Gua Sha funciona como un ejercicio facial lo que provoca que los músculos de la estructura facial se moldeen y definan.',
    brand: '',
    category: '',
    price: 14000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '20',
    name: 'Rodillo Facial Cuarzo Rosado',
    image: '/images/img34.jpg',
    description:
      'Es una herramienta de masaje facial  y relajo para la piel, muy sencilla en su uso los movimientos se realizan  siempre de abajo hacia arriba. Su función principal es ayudar a mejorar el drenaje linfático del rostro y desinflamar. El rodillo incluye  dos  piedras en cada extremo una de mayor tamaño que la otra a fin de poder abarcar distintas superficies del rostro.El Rodillo facial ayuda a remover el exceso  del fluído debajo  de los ojos mientras que la piedra fría  constriñe los vasos  sanguíneos  para minimizar aún más la hinchazón del rostro.',
    brand: '',
    category: '',
    price: 17000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '21',
    name: 'Rodillo Facial Verde Aventurina',
    image: '/images/img35.jpg',
    description:
      'Es una herramienta de masaje facial  y relajo para la piel, muy sencilla en su uso los movimientos se realizan  siempre de abajo hacia arriba. Su función principal es ayudar a mejorar el drenaje linfático del rostro y desinflamar. El rodillo incluye  dos  piedras en cada extremo una de mayor tamaño que la otra a fin de poder abarcar distintas superficies del rostro.El Rodillo facial ayuda a remover el exceso  del fluído debajo  de los ojos mientras que la piedra fría  constriñe los vasos  sanguíneos  para minimizar aún más la hinchazón del rostro.',
    brand: '',
    category: '',
    price: 17000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '22',
    name: 'Pack Doble Limpieza',
    image: '/images/img25.jpg',
    description:
      'Doble Limpieza Facial - Bifásico Nutritivo 100 ml y Gel  Limpiador de Pepino 100ml. Incluye dos limpiadores : *Bifásico Nutritivo es un limpiador a base de aceite orgánicos no comedogénicos (no obstruyen los poros) , hidrolatos y extractos  que remueve impurezas, maquillaje rostro, maquillaje ojos, bloqueador solar, elimina toxinas, suciedad , sudor y el sebo acumulado en el rostro durante el día. *Gel Limpiador de Pepino  es un limpiador gentil con la piel, gel acuoso de textura ligera , remueve el exceso de suciedad y complementa eficazmente el paso anterior en la limpieza del rostro logrando el balance del PH ideal de una piel saludable. Sensación de frescura y limpieza inmediata.',
    brand: '',
    category: '',
    price: 18500,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '23',
    name: 'Pack Rutina Día',
    image: '/images/img26.jpg',
    description:
      'Hidratación y Antioxidantes para la piel, protección contra los radicales libres durante el día, Hialuronic Serum 30 ml y Serum Antioxidante 1era Línea 30 ml. Pack Rutina Día incluye: *Hialuronic Serum es un potentre Hidratante Restaurador,  los ingredientes en su formulación  aportan  elasticidad , firmeza e hidratación. Nuestro principales ingredientes como el Aloe Vera y extracto de Vino ayudan a mantener una piel tersa , luminosa  reduciendo la inflamación proporcionando elasticidad e incrementando el grosor de la piel. No deja brillo en la piel. Apto para todo tipo de pieles. *Serum 1 era. Línea es un concentrado Serum de Defensa  contra los radicales libres. Al ser un potente  Antioxidante y Humectante protegen la piel contra las agresiones y el daño celular  al que esta expuesto. Nuestros principales ingredientes antioxidantes como el Escualano , Rosa Mosqueta , Sacha Inchi , Espino Amarillo y Lavanda ayudan a mantener y proteger la barrera de la piel, mejorando el  tono de la piel con el  uso frecuente. Apto para todo tipo de piel incluso es ideal para  pieles sensibes y grasas.',
    brand: '',
    category: '',
    price: 30000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '24',
    name: 'Pack Anti Manchas',
    image: '/images/img27.jpg',
    description:
      'Antiaging y Antioxidantes para la piel durante el día, despigmentante y nutrición para la piel durante la noche. Vita -C de 30 ml y A-Klara de 50 ml. Pack Anti Manchas incluye: *Vita- C es un excelente producto antiaging que aporta luminosidad y nutrición, mejora notablemenge el tono, hidrata y protege la barrera cutánea de la piel. Rica en atioxidantes y con una formulación estable a la oxidación. *A -Klara ayuda a minizar las manchas,  aporta luminosidad y empareja el tono de la piel. A-Klara es una crema para uso nocturno y por sus activos botánicos además de ser despigmentante aporta hidratación inmediata a la piel, es antiinflamatoria lo que la hace efectiva para poder usarla en condiciones cutáneas como el acné y en alteraciones pigmentarias.',
    brand: '',
    category: '',
    price: 28000,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
]

module.exports = products
