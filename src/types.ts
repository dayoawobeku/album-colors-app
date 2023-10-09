export interface Album {
  album_id: string;
  album_title: string;
  cover_image: string;
  release_date: string;
  palettes: string[];
  genres: string[];
  album_url: string;
  apple_music_url: string;
}

export interface Artist {
  id: string;
  name: string;
  albums: Album[];
}
