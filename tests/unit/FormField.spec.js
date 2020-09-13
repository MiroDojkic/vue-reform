import FormField from '@/FormField.vue';
import { mount } from '@vue/test-utils';

describe('display props', () => {
  const provide = {
    values() {
      return {};
    },
    setValue() {
      return () => {};
    }
  };

  it('should display label prop text', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test',
        label: 'Test label'
      }
    });
    expect(wrapper.text()).toContain('Test label');
  });

  it('should display placeholder prop text', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test',
        placeholder: 'Test placeholder'
      }
    });
    const input = wrapper.find('[data-testid="default-input"]');
    expect(input.element.placeholder).toBe('Test placeholder');
  });
});

describe('display slots', () => {
  const provide = {
    values() {
      return {};
    },
    setValue() {
      return () => {};
    }
  };

  it('should display label slot', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        label: 'Custom label slot'
      }
    });
    expect(wrapper.text()).toContain('Custom label slot');
  });

  it('should display icon slot', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        icon: 'Custom icon slot'
      }
    });
    expect(wrapper.text()).toContain('Custom icon slot');
  });

  it('should display input slot', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        input: 'Custom input slot'
      }
    });
    expect(wrapper.text()).toContain('Custom input slot');
  });

  it('should display error slot', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        error: 'Custom error slot'
      }
    });
    expect(wrapper.text()).toContain('Custom error slot');
  });
});

describe('correctly injecting provided data', () => {
  it('should use default input value', () => {
    const provide = {
      values: {
        test: 'hello'
      },
      setValue: () => {}
    };
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      }
    });
    const input = wrapper.find('[data-testid="default-input"]');
    expect(input.element.value).toBe('hello');
  });
});
