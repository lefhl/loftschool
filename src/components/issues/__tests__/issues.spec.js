/* eslint-disable */
import issues from "./../issues.vue";
import toggler from "./../../toggler/toggler.vue";
import { mount } from "@vue/test-utils";

let wrapper;

beforeEach(() => {

})

// afterEach(() => {
//   wrapper.destroy()
// })

describe("Issues",  () => {
  const items = [
    {
      user: {
        login: "lol kek"
      },
      body: 'Мой мессенж'
    },
    {
      user: {
        login: "lol kek 2"
      },
      body: 'Мой мессенж 2'
    }
  ]

  wrapper = mount(issues, {
    props: {items, isVisible: true, loading: false}
  });

  it("Пропсы уходят, список рендерится", async () => {

    const itemsList = await wrapper.findAll('.issues__item');

    expect(itemsList.length).toBe(items.length);
    expect(itemsList[0].find('b').text()).toBe(items[0].user.login);
    expect(itemsList[0].find('span').text()).toBe(items[0].body);
    expect(itemsList[1].find('b').text()).toBe(items[1].user.login);
    expect(itemsList[1].find('span').text()).toBe(items[1].body);

  });

  it("Кнопка работает, текст меняется", async () => {
    const toggler_component = await wrapper.findComponent(toggler)

    expect(toggler_component.exists()).toBe(true)

    await toggler_component.find('button').trigger('click')
    expect(toggler_component.find('span').text()).toBe('Hide issues')
    await toggler_component.find('button').trigger('click')
    expect(toggler_component.find('span').text()).toBe('View issues')

  })
});
