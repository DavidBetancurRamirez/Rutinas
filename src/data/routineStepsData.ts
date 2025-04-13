import { ImageSourcePropType } from 'react-native';

import { AGES, GENDERS, ROUTINES } from '@/constants';

export type Step = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export type StepKey = `${AGES}_${GENDERS}_${ROUTINES}`;

export const routineStepsMap: Record<StepKey, Step[]> = {
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/male/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/male/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/male/quitar_ropa.png'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/male/desnudar.png'),
      name: 'Entrar desnudo',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/male/echar_agua.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/male/shampoo.png'),
      name: 'Cojer shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/male/echar_shampoo.png'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/male/jabon_cuerpo.png'),
      name: 'Cojer jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/male/echar_jabon.png'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'lavar_axilas',
      image: require('@/data/routineImages/shower/male/lavar_axilas.png'),
      name: 'Lavar axilas',
    },
    {
      id: 'lavar_pene',
      image: require('@/data/routineImages/shower/male/lavar_pene.png'),
      name: 'Lavar pene',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/male/quitar_jabon.png'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/male/secar.png'),
      name: 'Secar',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/male/vestir.png'),
      name: 'Vestir',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [],
};
