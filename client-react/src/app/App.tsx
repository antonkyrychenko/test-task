import React from 'react';
import { Route, Switch } from 'react-router';
import NotesPage from "../pages/Notes/NotesPage";
import NoteDetailsPage from "../pages/NoteDetails/NoteDetailsPage";
import AddNotePage from "../pages/AddNote/AddNotePage";
import EditNotePage from "../pages/EditNote/EditNotePage";
import NavBar from "./NavBar/NarBat";

const App = () => {
  const router =
    <Switch>
      <Route path={['/', '/notes']} exact component={NotesPage} />
      <Route path={'/note/:noteId'} exact component={NoteDetailsPage} />
      <Route path={'/notes/add'} exact component={AddNotePage} />
      <Route path={'/note/edit/:noteId'} exact component={EditNotePage} />
      <Route component={() => <div>There is no such page.</div>} />
    </Switch>

  return (
    <div>
      <NavBar />
      {router}
    </div>
  );
}

export default App;
