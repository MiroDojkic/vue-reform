import FormField from '@/FormField.vue';
import { mount } from '@vue/test-utils';

describe('Receive props', () => {
  const provide = {
    values() {
      return {};
    },
    setValue() {
      return () => {};
    }
  };
  it('should receive name prop', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'testname'
      }
    });
    expect(wrapper.props('name')).toBe('testname');
  });
  it('default label prop value should be null', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      }
    });
    expect(wrapper.props('label')).toBe(null);
  });
  it('default placeholder prop value should be null', () => {
    const wrapper = mount(FormField, {
      provide,
      propsData: {
        name: 'test'
      }
    });
    expect(wrapper.props('placeholder')).toBe(null);
  });
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
});
