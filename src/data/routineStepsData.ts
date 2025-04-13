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
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
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
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/male/echar_agua.png'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/male/shampoo.png'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/male/echar_shampoo.png'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/male/jabon_cuerpo.png'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/male/echar_jabon.png'),
      name: 'Echar jabón de cuerpo',
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
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/female/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/female/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/female/quitar_ropa.png'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/female/desnudar.png'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/female/echar_agua.png'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/female/shampoo.png'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/female/echar_shampoo.png'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/female/jabon_cuerpo.png'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/female/echar_jabon.png'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/female/quitar_jabon.png'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/female/secar.png'),
      name: 'Secar',
    },
    {
      id: 'desodorante',
      image: require('@/data/routineImages/shower/female/desodorante.png'),
      name: 'Usar desodorante',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/female/vestir.png'),
      name: 'Vestir',
    },
    {
      id: 'peinar',
      image: require('@/data/routineImages/shower/female/peinar.png'),
      name: 'Peinar',
    },
  ],
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
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/male/echar_agua.png'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/male/shampoo.png'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/male/echar_shampoo.png'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/male/jabon_cuerpo.png'),
      name: 'Coger jabón de cuerpo',
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
      id: 'desodorante',
      image: require('@/data/routineImages/shower/male/desodorante.png'),
      name: 'Usar desodorante',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/male/vestir.png'),
      name: 'Vestir',
    },
    {
      id: 'colonia',
      image: require('@/data/routineImages/shower/male/colonia.png'),
      name: 'Usar colonia',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/female/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/female/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/female/quitar_ropa.png'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/female/desnudar.png'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/female/echar_agua.png'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/female/shampoo.png'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/female/echar_shampoo.png'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/female/jabon_cuerpo.png'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/female/echar_jabon.png'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'lavar_pecho',
      image: require('@/data/routineImages/shower/female/lavar_pecho.png'),
      name: 'Lavar pecho',
    },
    {
      id: 'lavar_vagina',
      image: require('@/data/routineImages/shower/female/lavar_vagina.png'),
      name: 'Lavar vagina',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/female/quitar_jabon.png'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/female/secar.png'),
      name: 'Secar',
    },
    {
      id: 'desodorante',
      image: require('@/data/routineImages/shower/female/desodorante.png'),
      name: 'Usar desodorante',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/female/vestir.png'),
      name: 'Vestir',
    },
    {
      id: 'peinar',
      image: require('@/data/routineImages/shower/female/peinar.png'),
      name: 'Peinar',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [],
};
