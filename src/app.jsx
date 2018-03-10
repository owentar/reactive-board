import xs from 'xstream';

const model = () => {
  return xs.of({
    columns: ['TODO', 'Doing', 'Done'],
  });
};

const renderColumns = columns => {
  return columns.map(column => (
    <div className="col">
      <h1>{ column }</h1>
      <div className="container cards-column">
        <button type="button" className="btn btn-secondary">Add card</button>
      </div>
    </div>
  ));
};

const view = (state$) => {
  return state$.map(({ columns }) => (
    <div className="container-fluid">
      <div className="row">
        { renderColumns(columns) }
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
