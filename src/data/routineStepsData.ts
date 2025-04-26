import { ImageSourcePropType } from 'react-native';

import { AGES, GENDERS, ROUTINES } from '@/constants';

export type Step = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export type StepKey = `${AGES}_${GENDERS}_${ROUTINES}`;

export const routineStepsMap: Record<StepKey, Step[]> = {
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/male/usar_hilo.png'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/male/pasta_cepillo.png'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/male/mojar_cepillo.png'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/male/cepillar.png'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/male/duracion.png'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/male/llenar_vaso.png'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/male/juagar.png'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/male/escupir_agua.png'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/male/limpiar_cepillo.png'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/male/cerrar_llave.png'),
      name: 'Cerrar la llave',
    },
  ],
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
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/male/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/male/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/male/levantar_tapa.png'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/male/bajar_pantalon.png'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/male/bajar_interior.png'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/male/sentar_inodoro.png'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/male/hacer_caca.png'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/male/sacar_papel.png'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/male/limpiar_nalga.png'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/male/tirar_papel.png'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/male/subir_interior.png'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/male/subir_pantalon.png'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/male/bajar_tapa.png'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/male/vaciar.png'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/male/lavar_manos.png'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/female/usar_hilo.png'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/female/pasta_cepillo.png'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/female/mojar_cepillo.png'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/female/cepillar.png'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/female/duracion.png'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/female/llenar_vaso.png'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/female/juagar.png'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/female/escupir_agua.png'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/female/limpiar_cepillo.png'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/female/cerrar_llave.png'),
      name: 'Cerrar la llave',
    },
  ],
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
      id: 'vestir',
      image: require('@/data/routineImages/shower/female/vestir.png'),
      name: 'Vestir',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/female/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/female/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/female/levantar_tapa.png'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/female/bajar_pantalon.png'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/female/bajar_interior.png'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/female/sentar_inodoro.png'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/female/hacer_caca.png'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/female/sacar_papel.png'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/female/limpiar_nalga.png'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/female/tirar_papel.png'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/female/subir_interior.png'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/female/subir_pantalon.png'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/female/bajar_tapa.png'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/female/vaciar.png'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/female/lavar_manos.png'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/male/usar_hilo.png'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/male/pasta_cepillo.png'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/male/mojar_cepillo.png'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/male/cepillar.png'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/male/duracion.png'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/male/llenar_vaso.png'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/male/juagar.png'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/male/escupir_agua.png'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/male/limpiar_cepillo.png'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/male/cerrar_llave.png'),
      name: 'Cerrar la llave',
    },
    {
      id: 'usar_enjuague',
      image: require('@/data/routineImages/teeth/male/usar_enjuague.png'),
      name: 'Usar enjuague bucal',
    },
  ],
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
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/male/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/male/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/male/levantar_tapa.png'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/male/bajar_pantalon.png'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/male/bajar_interior.png'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/male/sentar_inodoro.png'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/male/hacer_caca.png'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/male/sacar_papel.png'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/male/limpiar_nalga.png'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/male/tirar_papel.png'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/male/subir_interior.png'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/male/subir_pantalon.png'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/male/bajar_tapa.png'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/male/vaciar.png'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/male/lavar_manos.png'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/female/usar_hilo.png'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/female/pasta_cepillo.png'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/female/mojar_cepillo.png'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/female/cepillar.png'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/female/duracion.png'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/female/llenar_vaso.png'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/female/juagar.png'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/female/escupir_agua.png'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/female/limpiar_cepillo.png'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/female/cerrar_llave.png'),
      name: 'Cerrar la llave',
    },
    {
      id: 'usar_enjuague',
      image: require('@/data/routineImages/teeth/female/usar_enjuague.png'),
      name: 'Usar enjuague bucal',
    },
  ],
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
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/female/ir_bano.png'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/female/cerrar_puerta.png'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/female/levantar_tapa.png'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/female/bajar_pantalon.png'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/female/bajar_interior.png'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/female/sentar_inodoro.png'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/female/hacer_caca.png'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/female/sacar_papel.png'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/female/limpiar_nalga.png'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/female/tirar_papel.png'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/female/subir_interior.png'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/female/subir_pantalon.png'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/female/bajar_tapa.png'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/female/vaciar.png'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/female/lavar_manos.png'),
      name: 'Lavar las manos',
    },
  ],
};
