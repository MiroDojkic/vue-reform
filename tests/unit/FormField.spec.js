import FormField from '@/FormField.vue';
import { mount } from '@vue/test-utils';

describe('Display props', () => {
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
