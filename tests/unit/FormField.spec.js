import { fireEvent, render } from '@testing-library/vue';
import { flushPromises } from '../utils';
import FormField from '@/FormField.vue';

let provide;
beforeEach(() => {
  debugger;
  provide = {
    values: {
      test: ''
    },
    setValue: jest.fn()
  };
});

describe('display props', () => {
  it('should display label prop text', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test',
        label: 'Test label'
      }
    });
    wrapper.getByText('Test label');
  });

  it('should display placeholder prop text', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test',
        placeholder: 'Test placeholder'
      }
    });
    const input = wrapper.getByTestId('default-input');
    expect(input.placeholder).toBe('Test placeholder');
  });
});

describe('display slots', () => {
  it('should display label slot', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        label: 'Custom label slot'
      }
    });
    wrapper.getByText('Custom label slot');
  });

  it('should display icon slot', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        icon: 'Custom icon slot'
      }
    });
    wrapper.getByText('Custom icon slot');
  });

  it('should display input slot', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        input: 'Custom input slot'
      }
    });
    wrapper.getByText('Custom input slot');
  });

  it('should display error slot', () => {
    const wrapper = render(FormField, {
      provide,
      propsData: {
        name: 'test'
      },
      slots: {
        error: 'Custom error slot'
      }
    });
    wrapper.getByText('Custom error slot');
  });
});

describe('correctly injecting provided data', () => {
  it('should use default input value', () => {
    const wrapper = render(FormField, {
      provide: {
        ...provide,
        values: {
          test: 'hello'
        }
      },
      propsData: {
        name: 'test'
      }
    });
    const input = wrapper.getByTestId('default-input');
    expect(input.value).toBe('hello');
  });

  it('should invoke injected setValue', async () => {
    const wrapper = render(FormField, {
      provide,
      propsData: { name: 'test' }
    });
    const input = wrapper.getByTestId('default-input');
    await fireEvent.update(input, 'new value');
    await flushPromises();
    expect(provide.setValue).toBeCalledTimes(1);
  });
});
