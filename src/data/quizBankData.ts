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
