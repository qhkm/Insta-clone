//import lib react and react native
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }

    render(){
        return (
            <ScrollView>
             {this.renderAlbums()}
            </ScrollView>
        );
    }
}

//this is after refactor from functional component to class based component 
//classes do not require semicolon

export default AlbumList;
