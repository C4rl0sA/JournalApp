import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //Disable the button while the user is creating a note
    dispatch(savingNewNote());

    //uid
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDocResp });
    //dispatch( newNote )
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    //dispatch( activarNote )
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    //uid
    const { uid } = getState().auth;
  };
};
