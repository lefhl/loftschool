/* eslint-disable */
import toggler from "./../issues.vue";
import { shallowMount } from "@vue/test-utils";

describe("Issues", () => {
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

  const wrapper = shallowMount(toggler, {
    props: {items}
  });

  it("Пропсы уходят, список рендерится", () => {

    const itemsList = wrapper.findAll('.issues__item');

    expect(itemsList.length).toBe(items.length);
    expect(itemsList[0].find('b').text()).toBe(items[0].user.login);
    expect(itemsList[0].find('span').text()).toBe(items[0].body);
    expect(itemsList[1].find('b').text()).toBe(items[1].user.login);
    expect(itemsList[1].find('span').text()).toBe(items[1].body);

  });
});
