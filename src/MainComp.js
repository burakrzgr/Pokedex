import React,{useState} from 'react';
import Search from './components/Seach';
import LoadingPanel from './LoadingPanel';
import Main from './components/Main';

function MainComp() {
    const [state, setState] = useState({ showNewPoke: false, loading: true });
    function setShowNewPoke(v) {
      setState({ ...state, showNewPoke: v });
    }
    function loaded() {
      setState({ ...state, loading: false });
    }
    return (
      <>
        <Search addPokeEvent={(v) => setShowNewPoke(v)}></Search>
        {state.loading ? (
          <LoadingPanel isLoading={state.loading} loaded={() => loaded()} />
        ) : (
          <Main
            addPokeEvent={(v) => setShowNewPoke(v)}
            showNewPoke={state.showNewPoke}
          ></Main>
        )}
      </>
    );
  }

  export default MainComp;