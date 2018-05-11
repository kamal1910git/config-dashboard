import React from 'react';
import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    domain: namor.generate({ words: 1, numbers:2 }),
    name: namor.generate({ words: 1, numbers: 0 }),
    ntaccount: namor.generate({ words: 1, numbers:3 }),
    lastlogon: "07/05/2018",
    created: "07/05/2017",
    expired: "11/05/2020",
    disabled: "False"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
