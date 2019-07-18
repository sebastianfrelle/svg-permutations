import { writable } from 'svelte/store';

export const Group = function Group(id, elements) {
  this.id = id;
  this.elements = elements || [];
};

export const GroupStore = function GroupStore(groups = []) {
  const { update, subscribe } = writable(groups);

  return {
    subscribe,
    addGroup: (group) => {
      update(groups => groups.concat(group));
    },
    removeGroup: (groupId) => {
      update(groups => groups.filter(g => g.id !== groupId));
    }
  };
};

GroupStore.default = new GroupStore();