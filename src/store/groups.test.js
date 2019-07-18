import { Group, GroupStore } from './groups.js';

let groupStore;
beforeEach(() => {
  groupStore = new GroupStore();
});

test('Group is correctly initialized', () => {
  let id = '123';
  let g = new Group(id);

  expect(g.id).toBe(id);
  expect(g.elements.length).toBe(0)
});

test('adding an element to group', () => {
  let id = '123';
  let g = new Group(id);

  let groups;
  groupStore.subscribe(v => groups = v);

  expect(groups).toEqual([]);
  groupStore.addGroup(g);
  expect(groups).toEqual([g])
});
