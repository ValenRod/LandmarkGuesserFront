import {Dispatch, SetStateAction} from 'react';

interface Args {
  url: string;
  setLandmarkImgSrc: Dispatch<SetStateAction<string | null>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const getLandmark = async (args: Args) => {
  const {url, setLandmarkImgSrc, setFetchErrorState} = args;
  try {
    const res = await fetch(url);
    const data = await res.json();

    const decodedPixabayData = data.hits[0].webformatURL;

    setLandmarkImgSrc(decodedPixabayData);
  } catch (e) {
    setFetchErrorState(true);
  }
};
