import xs from 'xstream';

export function App (sources) {
  const vtree$ = xs.of(
    <div className="container-fluid">
      <div className="row">
        <div className="col">TODO</div>
        <div className="col">Doing</div>
        <div className="col">Done</div>
      </div>
    </div>
  );
  return {
    DOM: vtree$,
  };
}
