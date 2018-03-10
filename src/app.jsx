import xs from 'xstream';

const model = () => {
  return xs.of({
    columns: ['TODO', 'Doing', 'Done'],
  });
};

const view = (state$) => {
  return state$.map(({ columns }) => (
    <div className="container-fluid">
      <div className="row">
        { columns.map(column => <div className="col">{ column }</div>) }
      </div>
    </div>
  ));
};

export function App (sources) {
  const state$ = model();

  const vtree$ = view(state$);

  return {
    DOM: vtree$,
  };
}
