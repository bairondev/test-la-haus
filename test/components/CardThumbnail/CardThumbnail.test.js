import {CardThumbnail} from '@/components/CardThumbnail/CardThumbnail';
import { shallowMount } from '@vue/test-utils';

describe('CardThumbnail Component', () => {
  
  test('Validar url de las imagenes', () => {

    const wrapper = shallowMount(CardThumbnail)

    const urlImg = wrapper.find('img')
    console.log("Load images", imgUrl);

  })

})
