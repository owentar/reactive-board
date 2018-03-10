import xs from 'xstream';

const intent = ({ DOM }) => ({
  add$: DOM.select('.add-card').events('click').map(e => e.target.value),
});

const model = ({ add$ }) => {
  const newCard$ = add$.map(column => ({ column })).startWith(null);
  const data$ = xs.of({
    columns: ['TODO', 'Doing', 'Done'],
    cards: [],
  });

  return xs.combine(data$, newCard$);
};

const renderColumns = (columns, newCard) => {
  return columns.map(column => (
    <div className="col">
      <h1>{ column }</h1>
      <div className="container cards-column">
        <button type="button" className="add-card btn btn-secondary" value={column}>Add card</button>
      </div>
    </div>
  ));
};

const view = (state$) => {
  return state$.map(([{ columns }, newCard]) => (
    <div className="container-fluid">
      <div className="row">
        { renderColumns(columns, newCard) }
      </div>
    </div>
  ));
};

export function App (sources) {
  const actions = intent(sources);

  const state$ = model(actions);

  const vtree$ = view(state$);

  return {
    DOM: vtree$,
  };
}
