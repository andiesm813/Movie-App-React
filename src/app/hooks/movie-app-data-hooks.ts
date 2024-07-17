import { useCallback, useEffect, useState } from 'react';
import { getMovieListList, getMyPurchasesList, getNowPlayingList, getShowtimesList, getTheatresList, getTheatresNearYouList } from '../services/movie-app-data';
import { MovieListType } from '../models/MovieAppData/movie-list-type';
import { MyPurchasesType } from '../models/MovieAppData/my-purchases-type';
import { NowPlayingType } from '../models/MovieAppData/now-playing-type';
import { ShowtimesType } from '../models/MovieAppData/showtimes-type';
import { TheatresNearYouType } from '../models/MovieAppData/theatres-near-you-type';
import { TheatresType } from '../models/MovieAppData/theatres-type';

export const useGetNowPlayingList = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingType[]>([]);

  const requestNowPlaying = useCallback(() => {
    let ignore = false;
    getNowPlayingList()
      .then((data) => {
        if (!ignore) {
          setNowPlaying(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestNowPlaying();
  }, [requestNowPlaying]);

  return { requestMovieAppDataNowPlaying: requestNowPlaying, movieAppDataNowPlaying: nowPlaying, setMovieAppDataNowPlaying: setNowPlaying };
}

export const useGetMovieListList = () => {
  const [movieList, setMovieList] = useState<MovieListType[]>([]);

  const requestMovieList = useCallback(() => {
    let ignore = false;
    getMovieListList()
      .then((data) => {
        if (!ignore) {
          setMovieList(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestMovieList();
  }, [requestMovieList]);

  return { requestMovieAppDataMovieList: requestMovieList, movieAppDataMovieList: movieList, setMovieAppDataMovieList: setMovieList };
}

export const useGetTheatresList = () => {
  const [theatres, setTheatres] = useState<TheatresType[]>([]);

  const requestTheatres = useCallback(() => {
    let ignore = false;
    getTheatresList()
      .then((data) => {
        if (!ignore) {
          setTheatres(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTheatres();
  }, [requestTheatres]);

  return { requestMovieAppDataTheatres: requestTheatres, movieAppDataTheatres: theatres, setMovieAppDataTheatres: setTheatres };
}

export const useGetShowtimesList = () => {
  const [showtimes, setShowtimes] = useState<ShowtimesType[]>([]);

  const requestShowtimes = useCallback(() => {
    let ignore = false;
    getShowtimesList()
      .then((data) => {
        if (!ignore) {
          setShowtimes(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestShowtimes();
  }, [requestShowtimes]);

  return { requestMovieAppDataShowtimes: requestShowtimes, movieAppDataShowtimes: showtimes, setMovieAppDataShowtimes: setShowtimes };
}

export const useGetTheatresNearYouList = () => {
  const [theatresNearYou, setTheatresNearYou] = useState<TheatresNearYouType[]>([]);

  const requestTheatresNearYou = useCallback(() => {
    let ignore = false;
    getTheatresNearYouList()
      .then((data) => {
        if (!ignore) {
          setTheatresNearYou(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTheatresNearYou();
  }, [requestTheatresNearYou]);

  return { requestMovieAppDataTheatresNearYou: requestTheatresNearYou, movieAppDataTheatresNearYou: theatresNearYou, setMovieAppDataTheatresNearYou: setTheatresNearYou };
}

export const useGetMyPurchasesList = () => {
  const [myPurchases, setMyPurchases] = useState<MyPurchasesType[]>([]);

  const requestMyPurchases = useCallback(() => {
    let ignore = false;
    getMyPurchasesList()
      .then((data) => {
        if (!ignore) {
          setMyPurchases(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestMyPurchases();
  }, [requestMyPurchases]);

  return { requestMovieAppDataMyPurchases: requestMyPurchases, movieAppDataMyPurchases: myPurchases, setMovieAppDataMyPurchases: setMyPurchases };
}
