// Action creator
export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// export default selectSong;
// write export before each function, so you can export multiple function from one files