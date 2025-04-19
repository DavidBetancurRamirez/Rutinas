import { AGES, GENDERS, ROUTINES } from '@/constants';

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type StepKey = `${AGES}_${GENDERS}_${ROUTINES}`;

export const questionBankMap: Record<StepKey, Question[]> = {
  // CHILD - MALE
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'q1',
      question: '¿Qué haces antes de ducharte?',
      options: ['Ir al baño', 'Comer', 'Dormir'],
      correctAnswer: 'Ir al baño',
    },
    {
      id: 'q2',
      question: '¿Qué producto usas en el cabello?',
      options: ['Jabón', 'Shampoo', 'Pasta dental'],
      correctAnswer: 'Shampoo',
    },
    {
      id: 'q3',
      question: '¿Qué haces al terminar?',
      options: ['Vestirse', 'Llorar', 'Correr'],
      correctAnswer: 'Vestirse',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'q1',
      question: '¿Qué usas para lavarte los dientes?',
      options: ['Shampoo', 'Cepillo', 'Toalla'],
      correctAnswer: 'Cepillo',
    },
    {
      id: 'q2',
      question: '¿Qué producto necesitas?',
      options: ['Pasta dental', 'Jabón', 'Desodorante'],
      correctAnswer: 'Pasta dental',
    },
    {
      id: 'q3',
      question: '¿Cuánto tiempo debes cepillar?',
      options: ['10 segundos', '2 minutos', '30 minutos'],
      correctAnswer: '2 minutos',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'q1',
      question: '¿Qué haces después de usar el baño?',
      options: ['Comer', 'Lavar las manos', 'Jugar'],
      correctAnswer: 'Lavar las manos',
    },
    {
      id: 'q2',
      question: '¿Qué papel usas?',
      options: ['Papel higiénico', 'Papel aluminio', 'Papel de regalo'],
      correctAnswer: 'Papel higiénico',
    },
    {
      id: 'q3',
      question: '¿Dónde orinas?',
      options: ['Piso', 'Lavabo', 'Inodoro'],
      correctAnswer: 'Inodoro',
    },
  ],

  // CHILD - FEMALE
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'q1',
      question: '¿Qué haces al entrar al baño?',
      options: ['Desnudarte', 'Vestirte', 'Salir'],
      correctAnswer: 'Desnudarte',
    },
    {
      id: 'q2',
      question: '¿Para qué sirve el jabón?',
      options: ['Lavar el cuerpo', 'Cepillar los dientes', 'Jugar'],
      correctAnswer: 'Lavar el cuerpo',
    },
    {
      id: 'q3',
      question: '¿Qué haces al terminar?',
      options: ['Usar desodorante', 'Dormir', 'Comer'],
      correctAnswer: 'Usar desodorante',
    },
    
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'q1',
      question: '¿Cuándo te cepillas los dientes?',
      options: ['Después de comer', 'Antes de jugar', 'Antes de mirar TV'],
      correctAnswer: 'Después de comer',
    },
    {
      id: 'q2',
      question: '¿Qué usas en el cepillo?',
      options: ['Jabón', 'Pasta dental', 'Crema'],
      correctAnswer: 'Pasta dental',
    },
    {
      id: 'q3',
      question: '¿Qué haces al terminar de cepillarte?',
      options: ['Enjuagar la boca', 'Dormir', 'Cantar'],
      correctAnswer: 'Enjuagar la boca',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'q1',
      question: '¿Qué haces primero en el baño?',
      options: ['Cerrar la puerta', 'Lavar los platos', 'Peinarte'],
      correctAnswer: 'Cerrar la puerta',
    },
    {
      id: 'q2',
      question: '¿Qué debes hacer con las manos después?',
      options: ['Lavar con agua y jabón', 'Secar con ropa', 'Nada'],
      correctAnswer: 'Lavar con agua y jabón',
    },
    {
      id: 'q3',
      question: '¿Qué haces al terminar?',
      options: ['Tirar la cadena', 'Gritar', 'Bailar'],
      correctAnswer: 'Tirar la cadena',
    },
  ],










  // TEEN - MALE
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'q1',
      question: '¿Cuántas veces a la semana te duchas?',
      options: ['1', '3 o más', 'Nunca'],
      correctAnswer: '3 o más',
    },
    {
      id: 'q2',
      question: '¿Qué usas para el cuerpo?',
      options: ['Jabón', 'Shampoo', 'Desodorante'],
      correctAnswer: 'Jabón',
    },
    {
      id: 'q3',
      question: '¿Después de ducharte qué haces?',
      options: ['Secarte', 'Cepillarte los dientes', 'Ver TV'],
      correctAnswer: 'Secarte',
    },
    {
      id: 'q4',
      question: '¿Qué debes hacer antes de meterte a la ducha?',
      options: ['Quitarte la ropa', 'Llamar a alguien', 'Desayunar'],
      correctAnswer: 'Quitarte la ropa',
    },
    {
      id: 'q5',
      question: '¿Qué zona íntima debes lavar con cuidado?',
      options: ['El pene', 'Los codos', 'Las cejas'],
      correctAnswer: 'El pene',
    },
    {
      id: 'q6',
      question: '¿Por qué es importante lavar bien tus axilas?',
      options: ['Porque sudan', 'Porque se ven', 'Porque huelen a jabón'],
      correctAnswer: 'Porque sudan',
    },
    {
      id: 'q7',
      question: '¿Con qué debes lavar tu zona íntima?',
      options: ['Solo agua o jabón neutro', 'Shampoo fuerte', 'Cloro'],
      correctAnswer: 'Solo agua o jabón neutro',
    },
    {
      id: 'q8',
      question: '¿Qué debes hacer si usaste mucho shampoo?',
      options: ['Enjuagarlo bien', 'Dejarlo ahí', 'Secarlo con toalla'],
      correctAnswer: 'Enjuagarlo bien',
    },
    {
      id: 'q9',
      question: '¿Cuánto tiempo debería durar una ducha?',
      options: ['5 a 10 minutos', '30 minutos', '1 hora'],
      correctAnswer: '5 a 10 minutos',
    },
    {
      id: 'q10',
      question: '¿Qué debes revisar antes de salir de la ducha?',
      options: ['Que te hayas enjuagado bien', 'Que haya comida', 'Que tengas batería en el celular'],
      correctAnswer: 'Que te hayas enjuagado bien',
    },
    {
      id: 'q11',
      question: '¿Qué parte del cuerpo acumula más suciedad?',
      options: ['Pies', 'Espalda', 'Orejas'],
      correctAnswer: 'Pies',
    },
    {
      id: 'q12',
      question: '¿Con qué puedes frotar tu cuerpo para quitar la suciedad?',
      options: ['Esponja o mano', 'Papel', 'Toalla seca'],
      correctAnswer: 'Esponja o mano',
    },
    {
      id: 'q13',
      question: '¿Después de secarte, qué debes hacer?',
      options: ['Vestirte', 'Volver a ducharte', 'Tocarte el pelo mojado'],
      correctAnswer: 'Vestirte',
    },
    {
      id: 'q14',
      question: '¿Qué debes hacer con la toalla después de usarla?',
      options: ['Colgarla para que se seque', 'Tirarla al piso', 'Meterla al cajón'],
      correctAnswer: 'Colgarla para que se seque',
    },
    {
      id: 'q15',
      question: '¿Qué pasa si no te duchas con frecuencia?',
      options: ['Mal olor y problemas en la piel', 'Te da sueño', 'Te crece el cabello'],
      correctAnswer: 'Mal olor y problemas en la piel',
    },
  ],  
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'q1',
      question: '¿Cuántas veces al día debes cepillarte?',
      options: ['1', '2 o 3', '5'],
      correctAnswer: '2 o 3',
    },
    {
      id: 'q2',
      question: '¿Qué puedes usar además del cepillo?',
      options: ['Hilo dental', 'Peine', 'Desodorante'],
      correctAnswer: 'Hilo dental',
    },
    {
      id: 'q3',
      question: '¿Por qué cepillas tus dientes?',
      options: ['Para oler bien', 'Para eliminar bacterias', 'Para dormir'],
      correctAnswer: 'Para eliminar bacterias',
    },
    {
      id: 'q4',
      question: '¿Qué haces antes de cepillarte?',
      options: ['Poner pasta dental', 'Lavar la cara', 'Peinarte'],
      correctAnswer: 'Poner pasta dental',
    },
    {
      id: 'q5',
      question: '¿Qué pasa si no cepillas tus dientes?',
      options: ['Mal aliento y caries', 'Te crecen más', 'Se ponen blancos'],
      correctAnswer: 'Mal aliento y caries',
    },
    {
      id: 'q6',
      question: '¿Por cuánto tiempo mínimo debes cepillar?',
      options: ['2 minutos', '30 segundos', '10 minutos'],
      correctAnswer: '2 minutos',
    },
    {
      id: 'q7',
      question: '¿Dónde debes cepillar además de los dientes?',
      options: ['Lengua', 'Pestañas', 'Manos'],
      correctAnswer: 'Lengua',
    },
    {
      id: 'q8',
      question: '¿Qué haces con el cepillo después de usarlo?',
      options: ['Enjuagarlo', 'Tirarlo', 'Secarlo con toalla'],
      correctAnswer: 'Enjuagarlo',
    },
    {
      id: 'q9',
      question: '¿Dónde debes guardar el cepillo?',
      options: ['En un lugar limpio y seco', 'En el suelo', 'En la ducha'],
      correctAnswer: 'En un lugar limpio y seco',
    },
    {
      id: 'q10',
      question: '¿Cada cuánto deberías cambiar tu cepillo?',
      options: ['Cada 3 meses', 'Cada año', 'Nunca'],
      correctAnswer: 'Cada 3 meses',
    },
    {
      id: 'q11',
      question: '¿Cuál es el mejor momento para cepillarse?',
      options: ['Después de comer', 'Después de correr', 'Antes de peinarse'],
      correctAnswer: 'Después de comer',
    },
    {
      id: 'q12',
      question: '¿Qué sabor es común en la pasta dental?',
      options: ['Menta', 'Chocolate', 'Pollo'],
      correctAnswer: 'Menta',
    },
    {
      id: 'q13',
      question: '¿Qué tipo de cepillo es recomendable?',
      options: ['Suave o medio', 'Duro como escoba', 'Metálico'],
      correctAnswer: 'Suave o medio',
    },
    {
      id: 'q14',
      question: '¿Qué debes hacer si tienes brackets?',
      options: ['Cepillar mejor y usar cepillos especiales', 'Quitarlos', 'No cepillarse'],
      correctAnswer: 'Cepillar mejor y usar cepillos especiales',
    },
    {
      id: 'q15',
      question: '¿Debes usar enjuague bucal?',
      options: ['Sí, ayuda a eliminar bacterias', 'No, es solo para adultos', 'Solo si estás resfriado'],
      correctAnswer: 'Sí, ayuda a eliminar bacterias',
    },
  ],  
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'q1',
      question: '¿Qué haces al terminar en el baño?',
      options: ['Tirar la cadena', 'Encender la luz', 'Lavar ropa'],
      correctAnswer: 'Tirar la cadena',
    },
    {
      id: 'q2',
      question: '¿Cómo cuidas la higiene?',
      options: ['Lavando manos', 'Cantando', 'Gritando'],
      correctAnswer: 'Lavando manos',
    },
    {
      id: 'q3',
      question: '¿Qué haces si ensucias?',
      options: ['Limpiar', 'Ignorar', 'Salir corriendo'],
      correctAnswer: 'Limpiar',
    },
    {
      id: 'q4',
      question: '¿Qué debes hacer antes de entrar al baño?',
      options: ['Tocar la puerta', 'Correr', 'Gritar que vas a entrar'],
      correctAnswer: 'Tocar la puerta',
    },
    {
      id: 'q5',
      question: '¿Qué papel usas para limpiarte?',
      options: ['Papel higiénico', 'Cartulina', 'Servilleta usada'],
      correctAnswer: 'Papel higiénico',
    },
    {
      id: 'q6',
      question: '¿Qué haces después de usar el inodoro?',
      options: ['Bajar la palanca', 'Subir al lavamanos', 'Llamar a tu amigo'],
      correctAnswer: 'Bajar la palanca',
    },
    {
      id: 'q7',
      question: '¿Qué producto puedes usar para eliminar olores?',
      options: ['Ambientador', 'Perfume corporal', 'Agua del inodoro'],
      correctAnswer: 'Ambientador',
    },
    {
      id: 'q8',
      question: '¿Dónde debes orinar?',
      options: ['En el inodoro', 'En la tina', 'En una botella'],
      correctAnswer: 'En el inodoro',
    },
    {
      id: 'q9',
      question: '¿Qué haces si salpicas fuera del inodoro?',
      options: ['Limpiar', 'Reírte', 'Ignorar'],
      correctAnswer: 'Limpiar',
    },
    {
      id: 'q10',
      question: '¿Para qué usas el lavamanos?',
      options: ['Lavar manos', 'Guardar cosas', 'Cepillar el cabello'],
      correctAnswer: 'Lavar manos',
    },
    {
      id: 'q11',
      question: '¿Qué puedes usar para secarte las manos?',
      options: ['Toalla limpia', 'Papel higiénico sucio', 'Tus pantalones'],
      correctAnswer: 'Toalla limpia',
    },
    {
      id: 'q12',
      question: '¿Qué haces si alguien más necesita entrar al baño?',
      options: ['Apurarte', 'Quedarte hablando', 'Ponerle seguro y dormirte'],
      correctAnswer: 'Apurarte',
    },
    {
      id: 'q13',
      question: '¿Por qué es importante cerrar la puerta?',
      options: ['Privacidad', 'Frío', 'Por costumbre'],
      correctAnswer: 'Privacidad',
    },
    {
      id: 'q14',
      question: '¿Cuándo es necesario lavarse las manos?',
      options: ['Después de ir al baño', 'Antes de dormir', 'Después de ver TV'],
      correctAnswer: 'Después de ir al baño',
    },
    {
      id: 'q15',
      question: '¿Qué debes revisar antes de salir del baño?',
      options: ['Higiene, cadena tirada y lavamanos limpio', 'Si hay papel para llevar', 'Que nadie te vea'],
      correctAnswer: 'Higiene, cadena tirada y lavamanos limpio',
    },
  ],
  











  // TEEN - FEMALE
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'q1',
      question: '¿Qué haces antes de entrar a la ducha?',
      options: ['Desvestirte', 'Maquillarte', 'Cenar'],
      correctAnswer: 'Desvestirte',
    },
    {
      id: 'q2',
      question: '¿Qué usas para cuidar el cabello?',
      options: ['Shampoo y acondicionador', 'Cepillo', 'Agua sola'],
      correctAnswer: 'Shampoo y acondicionador',
    },
    {
      id: 'q3',
      question: '¿Qué haces después?',
      options: ['Secarte y vestirte', 'Correr', 'Ver celular'],
      correctAnswer: 'Secarte y vestirte',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'q1',
      question: '¿Qué debes evitar para cuidar tus dientes?',
      options: ['Dulces en exceso', 'Agua', 'Frutas'],
      correctAnswer: 'Dulces en exceso',
    },
    {
      id: 'q2',
      question: '¿Qué haces después de cepillar?',
      options: ['Enjuagar', 'Comer', 'Llamar a alguien'],
      correctAnswer: 'Enjuagar',
    },
    {
      id: 'q3',
      question: '¿Cuándo cepillas tus dientes?',
      options: ['Antes y después de comer', 'Al despertar solamente', 'Antes de jugar'],
      correctAnswer: 'Antes y después de comer',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'q1',
      question: '¿Qué debes hacer al terminar de usar el baño?',
      options: ['Tirar la cadena', 'Salir rápido', 'No hacer nada'],
      correctAnswer: 'Tirar la cadena',
    },
    {
      id: 'q2',
      question: '¿Qué debes hacer con tus manos?',
      options: ['Lavarlas', 'Secarlas con la ropa', 'Tocarte la cara'],
      correctAnswer: 'Lavarlas',
    },
    {
      id: 'q3',
      question: '¿Qué debes usar para limpiarte?',
      options: ['Papel higiénico', 'Toalla mojada', 'Mano'],
      correctAnswer: 'Papel higiénico',
    },
  ],
};
