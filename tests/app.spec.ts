import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import HelloWorld from '../pages/index.vue';

describe('HelloWorld', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.vm).toBeTruthy();
  });
});
