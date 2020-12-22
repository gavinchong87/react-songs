import { combineReducers } from 'redux'; //When importing 3rd party library, you need to look into the documentation in order to tell if you need curly braces or not.

// Song list reducer - static array
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:32' },
        { title: 'Macarena', duration: '3:54' },
        { title: 'All Star', duration: '5:42' },
        { title: 'I Want it That Way', duration: '3:32' },
    ];
};

// SelectedSong reduer
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});