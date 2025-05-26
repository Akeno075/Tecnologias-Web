(() => {
  interface Animal {
    name: string;
  }

  interface Bear extends Animal {
    honey: boolean;
  }

  const bear: Bear = {
    name: 'Baloo',
    honey: true
  };

  console.log(`El oso se llama ${bear.name} y ${bear.honey ? 'le gusta' : 'no le gusta'} la miel.`);
})();
