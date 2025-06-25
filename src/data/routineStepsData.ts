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
      image: require('@/data/routineImages/teeth/male/usar_hilo.webp'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/male/pasta_cepillo.webp'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/male/mojar_cepillo.webp'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/male/cepillar.webp'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/male/duracion.webp'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/male/llenar_vaso.webp'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/male/juagar.webp'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/male/escupir_agua.webp'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/male/limpiar_cepillo.webp'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/male/cerrar_llave.webp'),
      name: 'Cerrar la llave',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/male/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/male/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/male/quitar_ropa.webp'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/male/desnudar.webp'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/male/echar_agua.webp'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/male/shampoo.webp'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/male/echar_shampoo.webp'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/male/jabon_cuerpo.webp'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/male/echar_jabon.webp'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/male/quitar_jabon.webp'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/male/secar.webp'),
      name: 'Secar',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/male/vestir.webp'),
      name: 'Vestir',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/male/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/male/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/male/levantar_tapa.webp'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/male/bajar_pantalon.webp'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/male/bajar_interior.webp'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/male/sentar_inodoro.webp'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/male/hacer_caca.webp'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/male/sacar_papel.webp'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/male/limpiar_nalga.webp'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/male/tirar_papel.webp'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/male/subir_interior.webp'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/male/subir_pantalon.webp'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/male/bajar_tapa.webp'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/male/vaciar.webp'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/male/lavar_manos.webp'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/female/usar_hilo.webp'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/female/pasta_cepillo.webp'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/female/mojar_cepillo.webp'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/female/cepillar.webp'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/female/duracion.webp'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/female/llenar_vaso.webp'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/female/juagar.webp'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/female/escupir_agua.webp'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/female/limpiar_cepillo.webp'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/female/cerrar_llave.webp'),
      name: 'Cerrar la llave',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/female/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/female/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/female/quitar_ropa.webp'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/female/desnudar.webp'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/female/echar_agua.webp'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/female/shampoo.webp'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/female/echar_shampoo.webp'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/female/jabon_cuerpo.webp'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/female/echar_jabon.webp'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/female/quitar_jabon.webp'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/female/secar.webp'),
      name: 'Secar',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/female/vestir.webp'),
      name: 'Vestir',
    },
  ],
  [`${AGES.CHILD}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/female/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/female/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/female/levantar_tapa.webp'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/female/bajar_pantalon.webp'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/female/bajar_interior.webp'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/female/sentar_inodoro.webp'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/female/hacer_caca.webp'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/female/sacar_papel.webp'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/female/limpiar_nalga.webp'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/female/tirar_papel.webp'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/female/subir_interior.webp'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/female/subir_pantalon.webp'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/female/bajar_tapa.webp'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/female/vaciar.webp'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/female/lavar_manos.webp'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/male/usar_hilo.webp'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/male/pasta_cepillo.webp'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/male/mojar_cepillo.webp'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/male/cepillar.webp'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/male/duracion.webp'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/male/llenar_vaso.webp'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/male/juagar.webp'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/male/escupir_agua.webp'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/male/limpiar_cepillo.webp'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/male/cerrar_llave.webp'),
      name: 'Cerrar la llave',
    },
    {
      id: 'usar_enjuague',
      image: require('@/data/routineImages/teeth/male/usar_enjuague.webp'),
      name: 'Usar enjuague bucal',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/male/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/male/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/male/quitar_ropa.webp'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/male/desnudar.webp'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/male/echar_agua.webp'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/male/shampoo.webp'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/male/echar_shampoo.webp'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/male/jabon_cuerpo.webp'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/male/echar_jabon.webp'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'lavar_axilas',
      image: require('@/data/routineImages/shower/male/lavar_axilas.webp'),
      name: 'Lavar axilas',
    },
    {
      id: 'lavar_pene',
      image: require('@/data/routineImages/shower/male/lavar_pene.webp'),
      name: 'Lavar pene',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/male/quitar_jabon.webp'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/male/secar.webp'),
      name: 'Secar',
    },
    {
      id: 'desodorante',
      image: require('@/data/routineImages/shower/male/desodorante.webp'),
      name: 'Usar desodorante',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/male/vestir.webp'),
      name: 'Vestir',
    },
    {
      id: 'colonia',
      image: require('@/data/routineImages/shower/male/colonia.webp'),
      name: 'Usar colonia',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.MALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/male/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/male/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/male/levantar_tapa.webp'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/male/bajar_pantalon.webp'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/male/bajar_interior.webp'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/male/sentar_inodoro.webp'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/male/hacer_caca.webp'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/male/sacar_papel.webp'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/male/limpiar_nalga.webp'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/male/tirar_papel.webp'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/male/subir_interior.webp'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/male/subir_pantalon.webp'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/male/bajar_tapa.webp'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/male/vaciar.webp'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/male/lavar_manos.webp'),
      name: 'Lavar las manos',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.TEETH}`]: [
    {
      id: 'usar_hilo',
      image: require('@/data/routineImages/teeth/female/usar_hilo.webp'),
      name: 'Usar hilo dental',
    },
    {
      id: 'pasta_cepillo',
      image: require('@/data/routineImages/teeth/female/pasta_cepillo.webp'),
      name: 'Echar pasta al cepillo',
    },
    {
      id: 'mojar_cepillo',
      image: require('@/data/routineImages/teeth/female/mojar_cepillo.webp'),
      name: 'Mojar el cepillo',
    },
    {
      id: 'cepillar',
      image: require('@/data/routineImages/teeth/female/cepillar.webp'),
      name: 'Cepillar dientes',
    },
    {
      id: 'duracion',
      image: require('@/data/routineImages/teeth/female/duracion.webp'),
      name: 'Cepillar por almenos 2 minutos',
    },
    {
      id: 'llenar_vaso',
      image: require('@/data/routineImages/teeth/female/llenar_vaso.webp'),
      name: 'Llenar vaso con agua',
    },
    {
      id: 'juagar',
      image: require('@/data/routineImages/teeth/female/juagar.webp'),
      name: 'Enjuagar la boca',
    },
    {
      id: 'escupir_agua',
      image: require('@/data/routineImages/teeth/female/escupir_agua.webp'),
      name: 'Escupir agua',
    },
    {
      id: 'limpiar_cepillo',
      image: require('@/data/routineImages/teeth/female/limpiar_cepillo.webp'),
      name: 'Limpiar el cepillo',
    },
    {
      id: 'cerrar_llave',
      image: require('@/data/routineImages/teeth/female/cerrar_llave.webp'),
      name: 'Cerrar la llave',
    },
    {
      id: 'usar_enjuague',
      image: require('@/data/routineImages/teeth/female/usar_enjuague.webp'),
      name: 'Usar enjuague bucal',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.SHOWER}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/shower/female/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/shower/female/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'quitar_ropa',
      image: require('@/data/routineImages/shower/female/quitar_ropa.webp'),
      name: 'Quitar la ropa',
    },
    {
      id: 'desnudar',
      image: require('@/data/routineImages/shower/female/desnudar.webp'),
      name: 'Entrar desnudo al baño',
    },
    {
      id: 'echar_agua',
      image: require('@/data/routineImages/shower/female/echar_agua.webp'),
      name: 'Echar agua',
    },
    {
      id: 'shampoo',
      image: require('@/data/routineImages/shower/female/shampoo.webp'),
      name: 'Coger shampoo',
    },
    {
      id: 'echar_shampoo',
      image: require('@/data/routineImages/shower/female/echar_shampoo.webp'),
      name: 'Echar shampoo',
    },
    {
      id: 'jabon_cuerpo',
      image: require('@/data/routineImages/shower/female/jabon_cuerpo.webp'),
      name: 'Coger jabón de cuerpo',
    },
    {
      id: 'echar_jabon',
      image: require('@/data/routineImages/shower/female/echar_jabon.webp'),
      name: 'Echar jabón de cuerpo',
    },
    {
      id: 'lavar_pecho',
      image: require('@/data/routineImages/shower/female/lavar_pecho.webp'),
      name: 'Lavar pecho',
    },
    {
      id: 'lavar_vagina',
      image: require('@/data/routineImages/shower/female/lavar_vagina.webp'),
      name: 'Lavar vagina',
    },
    {
      id: 'quitar_jabon',
      image: require('@/data/routineImages/shower/female/quitar_jabon.webp'),
      name: 'Quitar jabón',
    },
    {
      id: 'secar',
      image: require('@/data/routineImages/shower/female/secar.webp'),
      name: 'Secar',
    },
    {
      id: 'desodorante',
      image: require('@/data/routineImages/shower/female/desodorante.webp'),
      name: 'Usar desodorante',
    },
    {
      id: 'vestir',
      image: require('@/data/routineImages/shower/female/vestir.webp'),
      name: 'Vestir',
    },
    {
      id: 'peinar',
      image: require('@/data/routineImages/shower/female/peinar.webp'),
      name: 'Peinar',
    },
  ],
  [`${AGES.TEEN}_${GENDERS.FEMALE}_${ROUTINES.BATHROOM}`]: [
    {
      id: 'ir_bano',
      image: require('@/data/routineImages/bathroom/female/ir_bano.webp'),
      name: 'Ir al baño',
    },
    {
      id: 'cerrar_puerta',
      image: require('@/data/routineImages/bathroom/female/cerrar_puerta.webp'),
      name: 'Cerrar la puerta',
    },
    {
      id: 'levantar_tapa',
      image: require('@/data/routineImages/bathroom/female/levantar_tapa.webp'),
      name: 'Levantar tapa del inodoro',
    },
    {
      id: 'bajar_pantalon',
      image: require('@/data/routineImages/bathroom/female/bajar_pantalon.webp'),
      name: 'Bajar pantalón',
    },
    {
      id: 'bajar_interior',
      image: require('@/data/routineImages/bathroom/female/bajar_interior.webp'),
      name: 'Bajar ropa interior',
    },
    {
      id: 'sentar_inodoro',
      image: require('@/data/routineImages/bathroom/female/sentar_inodoro.webp'),
      name: 'Sentarse en el inodoro',
    },
    {
      id: 'hacer_caca',
      image: require('@/data/routineImages/bathroom/female/hacer_caca.webp'),
      name: 'Hacer necesidades',
    },
    {
      id: 'sacar_papel',
      image: require('@/data/routineImages/bathroom/female/sacar_papel.webp'),
      name: 'Sacar papel higiénico',
    },
    {
      id: 'limpiar_nalga',
      image: require('@/data/routineImages/bathroom/female/limpiar_nalga.webp'),
      name: 'Limpiarse',
    },
    {
      id: 'tirar_papel',
      image: require('@/data/routineImages/bathroom/female/tirar_papel.webp'),
      name: 'Tirar papel a la caneca',
    },
    {
      id: 'subir_interior',
      image: require('@/data/routineImages/bathroom/female/subir_interior.webp'),
      name: 'Subir ropa interior',
    },
    {
      id: 'subir_pantalon',
      image: require('@/data/routineImages/bathroom/female/subir_pantalon.webp'),
      name: 'Subir pantalón',
    },
    {
      id: 'bajar_tapa',
      image: require('@/data/routineImages/bathroom/female/bajar_tapa.webp'),
      name: 'Bajar tapa del inodoro',
    },
    {
      id: 'vaciar',
      image: require('@/data/routineImages/bathroom/female/vaciar.webp'),
      name: 'Vaciar el inodoro',
    },
    {
      id: 'lavar_manos',
      image: require('@/data/routineImages/bathroom/female/lavar_manos.webp'),
      name: 'Lavar las manos',
    },
  ],
};
