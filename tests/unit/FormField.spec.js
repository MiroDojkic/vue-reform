import { fireEvent, render } from '@testing-library/vue';
import { flushPromises } from '../utils';
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

  it('should invoke injected setValue', async () => {
    const values = { test: '' };
    const setValue = jest.fn();
    const provide = { values, setValue };
    const wrapper = render(FormField, {
      provide,
      propsData: { name: 'test' }
    });
    const input = wrapper.getByTestId('default-input');
    await fireEvent.update(input, 'new value');
    await flushPromises();
    expect(setValue).toBeCalledTimes(1);
  });
});
